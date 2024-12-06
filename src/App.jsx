import Sidebar from "./components/Sidebar/Sidebar";
import TopNav from "./components/Navbar/TopNav";
import BoardHeader from "./components/Board/BoardHeader";
import KanbanBoard from "./components/Board/KanbanBoard";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNav />

        <div className="flex-1 p-8">
          <BoardHeader />
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default App;
