// import { Appbar } from "ui";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import MainCard from "../components/MainCard";
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