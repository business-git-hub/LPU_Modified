import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  List,
  MessageSquare,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/blog", label: "See Blog", icon: BookOpen },
    { path: "/admin/university", label: "See Universities", icon: List },
    { path: "/admin/contact", label: "See Contact Forms", icon: MessageSquare },
  ];

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    setIsSidebarOpen(false);
  };

  return (
    <aside
      className={`${isSidebarOpen ? "block" : "hidden"} md:block bg-[#4056B6] text-white fixed md:relative z-40 w-56 transition-all duration-300 ease-in-out h-full shadow-lg`}
    >
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold truncate">Top University</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring focus:ring-gray-300 md:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`flex items-center px-4 py-3 transition-colors ${isActive
                ? "bg-white text-[#4056B6] font-bold shadow-md"
                : "hover:bg-[#5067c7] hover:shadow-sm"
                }`}
            >
              <Icon size={20} />
              <span className="ml-3 truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export default Sidebar;
