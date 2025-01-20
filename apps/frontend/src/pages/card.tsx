import Avatar from "../assets/Avatar.png";
const Card = () => {
  return (
    <div className="w-[304px] h-[230px] p-[15px] gap-[20px] flex flex-col items-center">
      <img src={Avatar} alt="" className="w-[50px] h-[50px]" />
      <div className="w-[260px] h-[109px] gap-[8px] flex flex-col items-center">
        <div className="text-[#212121] font-semibold  text-[20px] leading-[29.05px] ">
          Real-Time Reports
        </div>
        <div className="text-[#616161] leading-6  text-[16px] w-[232px] h-[72px] pl-6">
          Monitor your business with up-to-the-minute insights to make informed
          decisions.
        </div>
      </div>
    </div>
  );
};

export default Card;
