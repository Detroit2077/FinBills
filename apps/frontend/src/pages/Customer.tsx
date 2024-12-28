import {Appbar, Sidebar, MainCard} from "@repo/ui/index";

const Dashboard = () => {
    return <div>
        <Appbar></Appbar>
        <div className="flex">
        <Sidebar></Sidebar>
        <MainCard title={"Customer"}></MainCard>
        </div>
    </div>;
}


export default Dashboard;