"use client";

export default function Sidebar({ setActiveTab }) {
  const sidebarItems = ["Landing", "Interest Groups", "Requests"];

  const handleLogout = () => {
    localStorage.removeItem("faya-admin-auth");
    window.location.href = "/admin"; // in case router not passed
  };

  return (
    <aside className="w-64 bg-[#87C041] text-white p-6 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">Faya Admin</h1>
        <nav className="flex flex-col gap-4">
          {sidebarItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(item)}
              className="text-left hover:underline hover:font-semibold"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 bg-white text-[#87C041] font-semibold py-2 rounded hover:bg-[#f0f0f0]"
      >
        Logout
      </button>
    </aside>
  );
}
