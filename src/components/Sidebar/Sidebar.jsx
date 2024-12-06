import NavItem from "./NavItem";
import ProjectItem from "./ProjectItem";
import ThoughtsTime from "./ThoughtsTime";

const Sidebar = () => (
  <div className="w-64 bg-white text-gray-500 border-r border-gray-200 flex flex-col justify-between font-medium">
    <div>
      <div className="flex justify-between items-center gap-2 h-16 p-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="" />
          <h1 className="text-xl font-semibold text-gray-900">Project M.</h1>
        </div>
        <img src="/icons/chevron-left.svg" alt="" />
      </div>

      <hr />

      <nav className="space-y-2 p-5">
        <NavItem icon="/icons/category.svg" text="Home" />
        <NavItem icon="/icons/message.svg" text="Messages" />
        <NavItem icon="/icons/task.svg" text="Tasks" />
        <NavItem icon="/icons/profile.svg" text="Members" />
        <NavItem icon="/icons/settings.svg" text="Settings" />
      </nav>

      <hr className="mx-4" />

      <div>
        <div className="flex justify-between items-center p-5">
          <h2 className="text-sm font-semibold text-gray-500">MY PROJECTS</h2>
          <img src="/icons/add-square.svg" alt="" />
        </div>
        <div className="space-y-2 px-1.5">
          <ProjectItem color="bg-green-500" text="Mobile App" active={true} />
          <ProjectItem color="bg-orange-500" text="Website Redesign" />
          <ProjectItem color="bg-purple-200" text="Design System" />
          <ProjectItem color="bg-blue-500" text="Wireframes" />
        </div>
      </div>
    </div>

    <div className="p-4 mt-10">
      <ThoughtsTime />
    </div>
  </div>
);

export default Sidebar;
