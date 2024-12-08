import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/tasksSlice";

const BoardHeader = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const filters = useSelector((state) => state.tasks.filters);

  const priorityOptions = ["All", "High", "Low"];
  const dateOptions = ["All", "Today", "This Week", "This Month"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilterSelect = (type, value) => {
    dispatch(setFilters({ type, value }));
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold">Mobile App</h1>
          <div className="flex space-x-2">
            <img src="/icons/pen-square.svg" alt="pen icon" />
            <img src="/icons/link-square.svg" alt="link icon" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 py-2 text-indigo-600">
            <img src="/icons/plus-square.svg" alt="add icon" />
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
        <div className="flex space-x-3" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "priority" ? null : "priority")
              }
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50"
            >
              <img src="/icons/filter.svg" className="h-4" alt="filter icon" />
              <span className="text-sm">
                {filters.priority === "All" ? "Priority" : filters.priority}
              </span>
              <img src="/icons/chevron-down.svg" alt="chevron down icon" />
            </button>

            {openDropdown === "priority" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {priorityOptions.map((option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
                      filters.priority === option ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleFilterSelect("priority", option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "date" ? null : "date")
              }
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50"
            >
              <img
                src="/icons/calendar.svg"
                className="h-4"
                alt="calendar icon"
              />
              <span className="text-sm">
                {filters.date === "All" ? "Due Date" : filters.date}
              </span>
              <img src="/icons/chevron-down.svg" alt="chevron down icon" />
            </button>

            {openDropdown === "date" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {dateOptions.map((option) => (
                  <div
                    key={option}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
                      filters.date === option ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleFilterSelect("date", option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-white border border-gray-800 rounded-md hover:bg-gray-50">
            <img src="/icons/profile.svg" className="h-4" alt="profile icon" />
            <span className="text-sm">Share</span>
          </button>

          <div className="h-6 border-r border-gray-800"></div>

          <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <img src="/icons/double-bar.svg" alt="double bar icon" />
          </button>

          <button className="text-gray-400 hover:text-gray-600">
            <img
              src="/icons/category.svg"
              className="h-5"
              alt="category icon"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardHeader;
