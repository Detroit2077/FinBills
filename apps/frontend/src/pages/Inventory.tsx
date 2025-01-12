import {Appbar, Sidebar, MainCard} from "@repo/ui/index";

const Inventory = () => {
    return <div>
        <Appbar></Appbar>
        <div className="flex">
        <Sidebar></Sidebar>
        <MainCard title={"Inventory"}></MainCard>
    </div>;
</div>
}



export default Inventory;