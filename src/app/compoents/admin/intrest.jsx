"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";


const interestGroups = [
  "UX:80",
  "AI:80",
  "Blockchain",
  "Cyber Security",
  "Data Science",
  "VR:80",
  "Game:80",
  "IoT:80",
];

export default function InterestGroupsAdmin() {
  const [selectedGroup, setSelectedGroup] = useState("UX:80");
  const [groupContent, setGroupContent] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchGroupContent();
  }, [selectedGroup]);

  const fetchGroupContent = async () => {
    const querySnapshot = await getDocs(
      collection(db, "interestGroups", selectedGroup, "contents")
    );
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setGroupContent(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "interestGroups", selectedGroup, "contents", id));
    fetchGroupContent();
  };

  const handleEdit = async (id, updatedContent) => {
    await updateDoc(doc(db, "interestGroups", selectedGroup, "contents", id), updatedContent);
    fetchGroupContent();
  };

  const handleAdd = async () => {
    let imageUrl = "";
    if (imageFile) {
      const storageRef = ref(storage, `interestGroups/${selectedGroup}/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "interestGroups", selectedGroup, "contents"), {
      title: "New Title",
      description: "New Description",
      imageUrl,
    });
    setImageFile(null);
    fetchGroupContent();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-[#87C041] mb-4">Interest Groups Admin Panel</h1>

      <select
        className="border p-2 rounded mb-6"
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        {interestGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      <div className="space-y-4">
        {groupContent.map((content) => (
          <div
            key={content.id}
            className="border p-4 rounded shadow flex flex-col gap-2"
          >
            <input
              type="text"
              className="border p-1"
              value={content.title}
              onChange={(e) =>
                handleEdit(content.id, { ...content, title: e.target.value })
              }
            />
            <textarea
              className="border p-1"
              value={content.description}
              onChange={(e) =>
                handleEdit(content.id, {
                  ...content,
                  description: e.target.value,
                })
              }
            />
            {content.imageUrl && (
              <img src={content.imageUrl} alt="" className="w-40 h-auto" />
            )}
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDelete(content.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Add New Content</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button
          className="ml-4 bg-[#87C041] text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add Content
        </button>
      </div>
    </div>
  );
}