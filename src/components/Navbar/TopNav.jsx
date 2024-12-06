const TopNav = () => (
  <header className="bg-white border-b border-gray-200 px-6 py-3">
    <div className="flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <img src="/icons/search.svg" className="h-5" alt="" />
          </span>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      <div className="flex items-center ml-4">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <img src="/icons/calendar.svg" className="w-6 h-6" alt="" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <img src="/icons/message-question.svg" className="w-6 h-6" alt="" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <img src="/icons/notification.svg" className="w-6 h-6" alt="" />
        </button>

        <div className="flex items-center space-x-3 ml-4 pl-4">
          <div className="text-right">
            <div className="text-sm font-medium">Palak Jain</div>
            <div className="text-xs text-gray-500">Rajathan, India</div>
          </div>
          <div className="flex gap-1">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <button className="ml-1 text-gray-400">
              <img src="/icons/chevron-down.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default TopNav;
