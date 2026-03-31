import { Outlet } from "react-router";
import { CompanyHeader } from "./CompanyHeader";
import { CompanySidebar } from "./CompanySidebar";

export function CompanyLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CompanyHeader showNavigation={false} />
      <div className="flex flex-1">
        <CompanySidebar />
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
