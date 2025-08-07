"use client";

import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase"; // Adjust the import path as necessary

export default function Landing() {
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const snapshot = await getDocs(collection(db, "landing"));
    const data = snapshot.docs.map(doc => doc.data().url);
    setImages(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) return;
    await addDoc(collection(db, "landing"), { url: imageUrl });
    setImageUrl("");
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-[#87C041] mb-4">Landing Images</h1>

      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-[#87C041] text-white px-4 py-2 rounded hover:bg-[#76a637]"
        >
          Add Image
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Landing ${idx}`}
            className="rounded shadow-md border"
          />
        ))}
      </div>
    </div>
  );
}