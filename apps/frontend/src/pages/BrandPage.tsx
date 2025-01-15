import React from "react";
import handshake from "../assets/handshake.png";
import Avatar from "../assets/Avatar.png";
import Timeline from "./Timeline";
import Card from "./card";
import "./BrandPage.css"; // Assuming there's a CSS file for BrandPage

const BrandPage = () => {
  return (
    <div className="overscroll-none">
      {/* Navbar */}
      <div className="w-full h-[72px] flex justify-between items-center bg-[#FFFFFF] border-b border-[#E5E5E5] pt-[8px] pr-[98px] pb-[8px] pl-[98px] brand_p">
        <div className="w-[102px] h-[24px] font-bold text-[20px] leading-6 tracking-tight	text-[#222222]">
          Finbills.
        </div>
        <div className="w-[1090px] h-[59px] gap-[282px] flex items-center pl-60">
          <div className="w-[258px] h-[24px] flex items-center gap-8 font-sans text-[#222222] font-[400px] leading-6 tracking-tight">
            <div className="top-[17.5px]">Home</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
          <div className="w-[248px] h-[59px] flex gap-[39px] items-center">
            <div className="w-[128px] h-[41.79px] bg-[#604AFF] border-[1px] border-[#AAAAAA] rounded-[50px] py-[5px] px-[23px] text-center font-[400px] font-sans text-[#FFFFFF]">
              Signup
            </div>
            <div className="w-[86px] h-[59px] rounded-[50px] py-[12px] px-[20px] text-center text-[#604AFF] pt-4">
              Login
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-[1303px] h-[481px] top-[75px] left-[85px] gap-[115px] flex justify-between items-center ml-20 mt-9">
        <div className="w-[700px] h-[359px] gap-[51px] flex flex-col">
          <div>
            <p className="font-bold text-[60px] leading-[76px] text-[#604AFF] w-[700px] flex flex-col">
              Empower Your Business
            </p>
            <p className="font-bold text-[60px] leading-[76px] text-[#604AFF]">
              with FinBills
            </p>
          </div>
          <div className="font-sans font-[400px] text-[#222222] text-[20px] w-[603px] h-[122px] size-[20px] leading-8">
            Welcome to Finbills, Streamline your financial operations, manage
            inventory, and scale your business with ease. Experience the future
            of business management today.
          </div>
          <div className="w-[350px] h-[48px] flex gap-[27px]">
            <div className="w-[162px] h-[48px] bg-[#604AFF] border-[1px] border-[#AAAAAA] rounded-[50px] pt-[11px] px-[23px] text-center font-[400px] font-sans text-[#D9D9D9] text-[16px]">
              Getting Started
            </div>
            <div className="w-[118px] h-[48px] rounded-[50px] pt-[11px] px-[20px] text-center text-[#604AFF] text-[16px] border-[1px] border-[#604AFF]">
              Explore
            </div>
          </div>
        </div>

        <div>
          <img src={handshake} alt="" className="w-[498px] h-[421px]" />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-[1200px] h-[604px] top-[616px] left-[200px] mx-10 mt-10">
        <div className="h-[92px] flex flex-col gap-[7px] items-center justify-between ml-52">
          <div className="text-[52px] w-[952px] h-[63px] flex items-center justify-center leading-[62.93px] tracking-wide text-[#122130CF] font-bold">
            Our Features
          </div>
          <div className="w-[794px] h-[22px] font-[400px] text-[18px] leading[21.78px] tracking-wide items-center text-[#757575]">
            Empowering businesses with innovative tools to streamline operations
            and boost growth.
          </div>
        </div>

        <div className="w-[1145px] h-[480px] top-[124px] left-[14px] gap-[32px] ml-36 mt-14">
          <div className="h-[237px] flex justify-between items-center">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="h-[237px] flex justify-between items-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="w-[1200px] h-[158.4px] flex flex-col gap-5 items-center justify-center mt-5">
          <div className="w-[546px] h-[110px] flex gap-4 justify-center items-center ml-56">
            <div className="font-semibold text-[64px]">How it</div>
            <div className="font-semibold text-[64px] bg-[#81A4FE] px-2 py-1">
              Works
            </div>
          </div>
          <div className="text-[#5B616E] font-[400px] text-[18px] leading-[32px]">
            Easily capture all stocks in inventory
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-[1200px] flex justify-center items-center mt-10">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
