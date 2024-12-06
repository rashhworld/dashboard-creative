const TaskCard = ({ task }) => {
  const { title, description, priority } = task;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm cursor-move">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-2 py-1 text-xs rounded ${
            priority === "Low"
              ? "bg-orange-100 text-orange-600"
              : priority === "High"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {priority}
        </span>
        <img src="/icons/dot.svg" alt="" />
      </div>

      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {[4, 1, 2].map((num) => (
            <img
              key={num}
              src={`/images/people${num}.png`}
              className="h-6"
              alt={`Person ${num}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-xs font-medium">
          <div className="flex items-center space-x-1">
            <img src="/icons/message.svg" className="h-4" alt="" />
            <span>12 comments</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="/icons/folder.svg" className="h-4" alt="" />
            <span>3 files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
