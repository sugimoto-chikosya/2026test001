import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
<div className="min-h-screen bg-[#1058E1] flex">
  <Sidebar />
  <main className="flex-1 min-w-0 overflow-x-auto bg-white rounded-tl-3xl shadow-xl p-8">
  <div className="min-w-0">
    <Outlet />
  </div>
  </main>
</div>
    </div>
  );
}
