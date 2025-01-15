import {Appbar, Sidebar, MainCard} from "@repo/ui/index";

const Dashboard = () => {
    return (
      <div className="max-h-screen overflow-hidden">
        <Appbar></Appbar>
        <div className="flex">
          <Sidebar />
          <MainCard title={"Customer"} />
        </div>
      </div>
    );
}


export default Dashboard;