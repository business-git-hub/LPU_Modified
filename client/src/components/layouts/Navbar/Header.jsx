import { useState } from 'react';
import { Menu, X, LogOut, User, ChevronDown } from "lucide-react";
import useLogout from '../../../hooks/Authentication/useLogout ';
import { useNavigate } from "react-router-dom";
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
const Header = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { handleLogout, isLoggingOut } = useLogout();
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200 w-full z-20">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring focus:ring-gray-300 md:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-semibold text-gray-700">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
                  {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              <img
                // src="https://via.placeholder.com/40"
                src={user.profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden sm:block font-medium text-gray-700">
                {user.name}
              </span>
              <ChevronDown size={16} className="text-gray-600" />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200">
                <button
                  onClick={() => navigate("/admin/profile")}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </button>
                <button
                  onClick={() => { handleLogout(); setIsProfileDropdownOpen(false); }}
                  disabled={isLoggingOut}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {isLoggingOut ? "Logging out..." : <LogOut size={16} className="mr-2" />}
                  {!isLoggingOut && "Logout"}
                </button>
                    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
