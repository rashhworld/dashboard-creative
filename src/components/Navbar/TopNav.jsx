import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ActivityDropdown from "./ActivityDropdown";

const TopNav = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <img src="/icons/search.svg" className="h-5" alt="search icon" />
            </span>
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="flex items-center ml-4">
          <button
            className="p-2 relative"
            onClick={() => setIsActivityOpen(!isActivityOpen)}
          >
            <img
              src="/icons/calendar.svg"
              className="w-6 h-6"
              alt="calendar icon"
            />
            <ActivityDropdown
              isOpen={isActivityOpen}
              onClose={() => setIsActivityOpen(false)}
            />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <img
              src="/icons/message-question.svg"
              className="w-6 h-6"
              alt="message question icon"
            />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <img
              src="/icons/notification.svg"
              className="w-6 h-6"
              alt="notification icon"
            />
          </button>

          <div className="flex items-center space-x-3 ml-4 pl-4 relative">
            <div className="text-right">
              <div className="text-sm font-medium">
                {user ? user.displayName : "Guest"}
              </div>
              <div className="text-xs text-gray-500">
                {user ? (
                  user.email
                ) : (
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <img src="/icons/chevron-down.svg" alt="chevron down icon" />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
