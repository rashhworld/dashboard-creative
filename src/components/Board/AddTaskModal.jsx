import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasksSlice";

const AddTaskModal = ({ isOpen, onClose, status }) => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        status,
        task: taskData,
      })
    );
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueDate: new Date().toISOString().split("T")[0],
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={taskData.title}
                onChange={(e) =>
                  setTaskData({ ...taskData, title: e.target.value })
                }
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={taskData.description}
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                value={taskData.priority}
                onChange={(e) =>
                  setTaskData({ ...taskData, priority: e.target.value })
                }
                className="w-full p-2 border rounded-md"
              >
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Due Date</label>
              <input
                type="date"
                value={taskData.dueDate}
                onChange={(e) =>
                  setTaskData({ ...taskData, dueDate: e.target.value })
                }
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
