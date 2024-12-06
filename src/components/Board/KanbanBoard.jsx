import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactSortable } from "react-sortablejs";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import { updateTaskLists } from "../../store/tasksSlice";

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddClick = (status) => {
    setSelectedStatus(status);
    setIsModalOpen(true);
  };

  const updateList = (newState, listName) => {
    const cleanState = newState.map(
      ({ chosen, selected, filtered, ...item }) => ({
        ...item,
      })
    );

    dispatch(
      updateTaskLists({
        source: cleanState,
        target: cleanState,
        sourceList: listName,
        targetList: listName,
      })
    );
  };

  const sortableOptions = {
    group: "shared",
    animation: 200,
    setData: function (dataTransfer, dragEl) {
      dataTransfer.setData("text", dragEl.textContent);
    },
    clone: function (item) {
      return { ...item };
    },
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-xl p-4">
          <div className="flex items-center justify-between border-b-4 border-purple-500 mb-4 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <h3 className="font-semibold">To Do</h3>
              <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
                {tasks.todo.length}
              </span>
            </div>
            <img
              src="/icons/plus-square.svg"
              className="cursor-pointer"
              alt=""
              onClick={() => handleAddClick("todo")}
            />
          </div>
          <ReactSortable
            list={tasks.todo.map((item) => ({ ...item }))}
            setList={(newState) => updateList(newState, "todo")}
            className="space-y-4 min-h-[50px]"
            {...sortableOptions}
          >
            {tasks.todo.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ReactSortable>
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          <div className="flex items-center justify-between border-b-4 border-yellow-500 mb-4 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <h3 className="font-semibold">In Progress</h3>
              <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
                {tasks.inProgress.length}
              </span>
            </div>
          </div>
          <ReactSortable
            list={tasks.inProgress.map((item) => ({ ...item }))}
            setList={(newState) => updateList(newState, "inProgress")}
            className="space-y-4 min-h-[50px]"
            {...sortableOptions}
          >
            {tasks.inProgress.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ReactSortable>
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          <div className="flex items-center justify-between border-b-4 border-green-500 mb-4 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold">Done</h3>
              <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
                {tasks.done.length}
              </span>
            </div>
          </div>
          <ReactSortable
            list={tasks.done.map((item) => ({ ...item }))}
            setList={(newState) => updateList(newState, "done")}
            className="space-y-4 min-h-[50px]"
            {...sortableOptions}
          >
            {tasks.done.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </ReactSortable>
        </div>
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={selectedStatus}
      />
    </>
  );
};

export default KanbanBoard;
