const BoardHeader = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl font-bold">Mobile App</h1>
        <div className="flex space-x-2">
          <img src="/icons/pen-square.svg" alt="" />
          <img src="/icons/link-square.svg" alt="" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
          <img src="/icons/plus-square.svg" alt="" />
          <span className="text-sm font-medium">Invite</span>
        </button>
        <div className="flex -space-x-2">
          {[4, 3, 2, 1].map((num) => (
            <img
              key={num}
              src={`/images/people${num}.png`}
              className="w-8 h-8"
              alt={`Person ${num}`}
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 border-2 border-white flex items-center justify-center text-xs">
            +2
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50">
          <img src="/icons/filter.svg" className="h-4" alt="" />
          <span className="text-sm">Filter</span>
          <img src="/icons/chevron-down.svg" alt="" />
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50">
          <img src="/icons/calendar.svg" className="h-4" alt="" />
          <span className="text-sm">Today</span>
          <img src="/icons/chevron-down.svg" alt="" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50">
          <img src="/icons/profile.svg" className="h-4" alt="" />
          <span className="text-sm">Share</span>
        </button>

        <div className="h-6 border-r border-gray-800"></div>

        <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <img src="/icons/double-bar.svg" alt="" />
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          <img src="/icons/category.svg" className="h-5" alt="" />
        </button>
      </div>
    </div>
  </>
);

export default BoardHeader;
