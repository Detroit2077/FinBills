// import { Appbar } from "ui";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import MainCard from "../components/MainCard";
const Ledgers = () => {
    return <div>
        <Appbar></Appbar>
        <div className="flex">
        <Sidebar></Sidebar>
        <MainCard title={"Ledger"}></MainCard>
        </div>
    </div>;
}


export default Ledgers;