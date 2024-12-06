const ProjectItem = ({ color, text, active }) => (
  <div
    className={`flex items-center justify-between space-x-3 px-4 py-2 rounded-lg cursor-pointer text-sm ${
      active ? "bg-purple-50 font-semibold text-gray-900" : "hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center Success space-x-3">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span>{text}</span>
    </div>
    {active && <img src="/icons/dot.svg" alt="" />}
  </div>
);

export default ProjectItem;
