import { Appbar, Sidebar, MainCard } from "@repo/ui/index";

const Ledgers = () => {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <Sidebar></Sidebar>
        <MainCard title={"Ledger"}></MainCard>
      </div>
    </div>
  );
};

export default Ledgers;
