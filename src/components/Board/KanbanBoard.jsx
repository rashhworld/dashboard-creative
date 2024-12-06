import TaskCard from "./TaskCard";

const KanbanBoard = () => (
  <div className="grid grid-cols-3 gap-6">
    <div className="bg-gray-100 rounded-xl p-4">
      <div className="flex items-center justify-between border-b-4 border-purple-500 mb-4 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <h3 className="font-semibold">To Do</h3>
          <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
            4
          </span>
        </div>
        <img src="/icons/plus-square.svg" className="cursor-pointer" alt="" />
      </div>
      <div className="space-y-4">
        <TaskCard
          priority="Low"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
        <TaskCard
          priority="High"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
      </div>
    </div>
    <div className="bg-gray-100 rounded-xl p-4">
      <div className="flex items-center justify-between border-b-4 border-yellow-500 mb-4 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <h3 className="font-semibold">In Progress</h3>
          <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
            3
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <TaskCard
          priority="completed"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
        <TaskCard
          priority="Low"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
      </div>
    </div>
    <div className="bg-gray-100 rounded-xl p-4">
      <div className="flex items-center justify-between border-b-4 border-green-500 mb-4 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h3 className="font-semibold">Done</h3>
          <span className="text-gray-500 bg-gray-200 rounded-full text-sm font-medium h-5 w-5 flex justify-center items-center">
            2
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <TaskCard
          priority="Low"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
        <TaskCard
          priority="Low"
          title="Brainstorming"
          description="Brainstorming brings team members' diverse experience into play."
        />
      </div>
    </div>
  </div>
);

export default KanbanBoard;
