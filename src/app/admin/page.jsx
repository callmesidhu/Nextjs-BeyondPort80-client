// app/admin/page.tsx (Login Page)
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("faya-admin-auth");
    if (auth) router.push("/admin/dashboard");
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("faya-admin-auth", "true");
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-10 rounded-lg shadow-md border border-gray-200 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-center text-[#87C041]">Faya Admin Login</h1>
        <input type="text" placeholder="Username" className="border p-2 rounded" required />
        <input type="password" placeholder="Password" className="border p-2 rounded" required />
        <button
          type="submit"
          className="bg-[#87C041] text-white py-2 rounded hover:bg-[#76a637]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
