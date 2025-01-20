import React from "react";
import handshake from "../assets/handshake.png";
import Timeline from "./Timeline";
import Card from "./Card";
import screen from "../assets/screen.png";
import phone from "../assets/phone.png";
import rating from "../assets/rating.png";
import PhoneCall from "../assets/PhoneCall.png";
import "./BrandPage.css";
import girl from "../assets/girl.png";
import EnvelopeSimple from "../assets/EnvelopeSimple.png";
import instagram from "../assets/instagram.png";
import icon from "../assets/icon.png";
import mail from "../assets/mail.png";
import Links from "../assets/Links.png";
const BrandPage: React.FC = () => {
  return (
    <div className="overscroll-none">
      {/* Navbar */}
      <div className="navbar w-full h-[72px] flex justify-between items-center bg-[#FFFFFF] border-b border-[#E5E5E5] px-[98px]">
        <div className="logo font-bold text-[20px] leading-6 tracking-tight text-[#222222]">
          Finbills.
        </div>
        <div className="nav-links flex items-center gap-[50px]">
          <div className="flex gap-8 text-[#222222] font-medium">
            <div>Home</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
          <div className="auth-buttons flex gap-[20px]">
            <div className="signup-button bg-[#604AFF] text-white rounded-full px-[23px] py-[8px] text-center">
              Signup
            </div>
            <div className="login-button text-[#604AFF] rounded-full border border-[#604AFF] px-[20px] py-[8px] text-center">
              Login
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero flex justify-between items-center mx-24 mt-9">
        <div className="hero-content flex flex-col gap-6 ">
          <h1 className="text-[#604AFF] text-[60px] font-bold leading-[76px]">
            Empower Your Business with FinBills
          </h1>
          <p className="text-[#222222] text-[20px] leading-8">
            Welcome to Finbills. Streamline your financial operations, manage
            inventory, and scale your business with ease. Experience the future
            of business management today.
          </p>
          <div className="hero-buttons flex gap-6">
            <button className="bg-[#604AFF] text-white rounded-full px-6 py-2">
              Get Started
            </button>
            <button className="text-[#604AFF] border border-[#604AFF] rounded-full px-6 py-2">
              Explore
            </button>
          </div>
        </div>
        <div>
          <img
            src={handshake}
            alt="Handshake"
            className="w-[498px] h-[421px]"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section ml-40 mt-14 pr-6">
        <div className="text-center text-[#122130CF] text-[52px] font-bold pr-28">
          Our Features
        </div>
        <p className="text-center text-[#757575] text-[18px] mt-2 pr-20">
          Empowering businesses with innovative tools to streamline operations
          and boost growth.
        </p>
        <div className="features-grid grid grid-cols-3 gap-8 mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* How It Works Section */}
      <div className=" text-center  pl-[40px] pt-10">
        <h2 className="text-[64px] font-semibold">
          How it <span className="bg-[#81A4FE] px-2">Works</span>
        </h2>
        <p className="text-[#5B616E] text-[18px] mt-4">
          Easily capture all stocks in inventory
        </p>
      </div>

      <div className="w-[1140px] h-[1220px] left-[142.5px] top-[318.39px] pb-[2.39px] gap-[16px] ml-[240px] mt-20">
        <div className=" w-[1085.5px] h-[396px] flex items-center justify-between">
          <div className="w-[360px] h-[396px] flex flex-col ">
            <div className="w-[400px] h-[396px] flex flex-col mr-10">
              <div className="flex">
                <div className="w-[200px] h-[58px] top-[-0.3px] font-[500] text-[48px] leading-[57.6px] tracking-tight">
                  Sign Up
                </div>
                <div className="w-[210px] h-[58px] top-[-0.3px] left-[4px] font-[500] text-[48px] leading-[57.6px] tracking-tight bg-[#81A4FE] text-center">
                  to Finbills
                </div>
              </div>
              <div className="w-[250px] h-[58px] top-[57.29px] font-[500] text-[48px] leading-[57.6px] tracking-tight">
                super quick
              </div>
            </div>
          </div>
          <div className="w-[56px] h-[396px] left-[541.96px]  flex flex-col items-center gap-2">
            <div className="h-[56px] w-[56px] rounded-full left-[541.98px] bg-[#604AFF] flex items-center justify-center text-[32px] font-[500px] leading-[32px] text-[#F7F8F8]">
              1
            </div>

            <div className="w-[2px] h-[300px] top-[72px] left-[568.98px] bg-[#8F95A9] mt-4"></div>
          </div>
          <div className=" h-[305px]">
            <img src={girl}></img>
          </div>
        </div>
        {/* 2 */}
        <div className=" w-[1140px] h-[396px] flex items-center justify-between mt-2">
          <div className="w-[270px] h-[396px] flex flex-col ">
            <div className="w-[400px] h-[396px] flex flex-col">
              <div className="flex">
                <div className="w-[398px] h-[58px] top-[-0.3px] font-[500] text-[48px] leading-[57.6px]">
                  Set Up Store
                </div>
              </div>
            </div>
          </div>
          <div className="w-[56px] h-[396px] left-[500.96px]  flex flex-col items-center gap-2">
            <div className="h-[56px] w-[56px] rounded-full left-[541.98px] bg-[#604AFF] flex items-center justify-center text-[32px] font-[500px] leading-[32px] text-[#F7F8F8]">
              2
            </div>

            <div className="w-[2px] h-[300px] top-[72px] left-[560.98px] bg-[#8F95A9] mt-4"></div>
          </div>
          <div className=" w-[364px] h-[296px]">
            <img src={screen}></img>
          </div>
        </div>
        {/* ///// */}
        <div className=" w-[1085.5px] h-[396px] flex items-center justify-between mt-2">
          <div className="w-[262px] h-[396px] flex flex-col ">
            <div className="w-[400px] h-[396px] flex flex-col mr-10">
              <div className="w-[300px] h-[100px]  font-[500] text-[48px] leading-[57.6px] tracking-tight">
                Track Shipment on ease
              </div>
            </div>
          </div>
          <div className="w-[56px] h-[396px] left-[541.96px]  flex flex-col items-center gap-2">
            <div className="h-[56px] w-[56px] rounded-full left-[541.98px] bg-[#604AFF] flex items-center justify-center text-[32px] font-[500px] leading-[32px] text-[#F7F8F8]">
              3
            </div>
          </div>
          <div className=" h-[305px]">
            <img src={phone}></img>
          </div>
        </div>
      </div>

      <div className="h-[664.08px] top-[2811px] left-[-4px] py-[120px] px-[55px] bg-[#7D72CC] flex flex-col items-center">
        <div className="w-[1338px] height-[93px] gap-[20px] flex justify-center flex-col items-center">
          <div className="h-[49px] font-[700] text-[38px] leading-[49.4px] align-middle text-[#F6F6F6] flex">
            Real Stories from Satisfied Customers
          </div>
          <div className="h-[24px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
            See how Sanchalak is making an impact.
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-[1170px] h-[271.08px] gap-[30px] mt-14 flex">
          <div className="w-[570px] h-[271px] bg-[#F7F8F8] rounded-[20px] border-[1px] border-[#E5F4F2] shadow-[34.85px_29.p-[40px] gap-[30px]">
            <div className="w-[490px] h-[191.08px] gap-[30px] flex p-[40px]">
              <div className="w-[180px] h-[191px] gap-[16px] flex flex-col items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full bg-red-200 "></div>
                <div className="w-[180px] h-[55px] flex flex-col gap-[6px]">
                  <div className="w-[180px] h-[27px] font-[600] text-[21px] text-center">
                    Priya
                  </div>
                  <div className="w-[180px] h-[22px] font-[400] text-[14px] text-center">
                    Priyas Handicraft
                  </div>
                </div>
              </div>
              <div className="w-[280px] h-[191.08px] gap-[24px] flex flex-col">
                <div className="h-[23.08px] gap-[5px]">
                  <img src={rating}></img>
                </div>
                <div className="w-[270px] h-[144px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
                  "Since using Sanchalak, managing <br /> my inventory has
                  become a breeze. The dashboard is intuitive, and the barcode
                  generator saves me hours every week. I no longer worry about
                  shipment delays or tracking issues!"
                </div>
              </div>
            </div>
          </div>

          <div className="w-[570px] h-[271px] bg-[#F7F8F8] rounded-[20px] border-[1px] border-[#E5F4F2] shadow-[34.85px_29.p-[40px] gap-[30px]">
            <div className="w-[490px] h-[191.08px] gap-[30px] flex p-[40px]">
              <div className="w-[180px] h-[191px] gap-[16px] flex flex-col items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full bg-red-200 "></div>
                <div className="w-[180px] h-[55px] flex flex-col gap-[6px]">
                  <div className="w-[180px] h-[27px] font-[600] text-[21px] text-center">
                    Priya
                  </div>
                  <div className="w-[180px] h-[22px] font-[400] text-[14px] text-center">
                    Priyas Handicraft
                  </div>
                </div>
              </div>
              <div className="w-[280px] h-[191.08px] gap-[24px] flex flex-col">
                <div className="h-[23.08px] gap-[5px]">
                  <img src={rating}></img>
                </div>
                <div className="w-[270px] h-[144px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
                  "Since using Sanchalak, managing <br /> my inventory has
                  become a breeze. The dashboard is intuitive, and the barcode
                  generator saves me hours every week. I no longer worry about
                  shipment delays or tracking issues!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get in touch form */}

      <div className="w-full h-[546px] gap-[30px] top-[3475px] py-[60px] px-[55px] bg-[#F7F8F8]">
        <div className="w-[1328px] h-[439px] rounded-[20px] border-[1px] border-[#E5F4F2] top-[3475px] pt-[26px] px-[60px] pb-[60px] bg-[#FFFFFF] ml-10 gap-[60px] flex flex-col ">
          <div className="w-[1208px] h-[83px] gap-[40px]">
            <div className="w-[456px] h-[49px] gap-[40px] font-[700] text-[38px] leading-[49.4px] text-[#2D2D2D]">
              Let’s get in touch!
            </div>
            <p className="w-[1208px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
              Got questions about the Sanchalak? Our team is here to help.
              Contact us for quick and friendly support.
            </p>
          </div>

          <div className="w-[1208px] gap-[40px] flex ">
            <div className="h-[210px]">
              <div className="w-[465px] gap-[40px]">
                <div className="w-[465px] h-[68px] gap-[20px] flex flex-col">
                  <div className="flex gap-[12px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
                    <img className="w-[24px]" src={PhoneCall}></img> +012 345
                    6789
                  </div>
                  <div className="flex gap-[12px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
                    <img className="w-[24px]" src={EnvelopeSimple}></img>{" "}
                    care@finbills.com
                  </div>
                </div>
                <div className="w-[465px] h-[79px] gap-[20px] flex flex-col"></div>
              </div>
              <div className="w-[465px] gap-[40px]">
                <div className="w-[465px] h-[68px] gap-[20px] flex flex-col">
                  <div className="flex gap-[12px] h-[24px] font-[600] text-[21px] leading-[27.3px] text-[#2D2D2D]">
                    Connect with us
                  </div>
                  <div className="flex h-[24px] font-[400] text-[16px] leading-[24px] text-[#2D2D2D]">
                    <div className="w-[135px] h-[24px] gap-[15px] flex flex-row">
                      <img className="w-[24px]" src={instagram}></img>
                      <img className="w-[24px]" src={instagram}></img>
                      <img className="w-[24px]" src={instagram}></img>
                      <img className="w-[24px]" src={instagram}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="w-[465px] gap-[20px] h-[210px] flex flex-col ">
              <div className="h-[60px] rounded-[20px] border-[1px] py-[8px] pl-[20px] bg-[#FFFFFF] border-[#D8D8D8] flex items-center">
                <img src={icon} className="w-[29px] h-[20px]"></img>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[59px] w-full rounded-r-[20px] border-y-[1px] pl-4"
                ></input>
              </div>
              <div className="h-[60px] rounded-[20px] border-[1px] py-[8px] pl-[20px] bg-[#FFFFFF] border-[#D8D8D8] flex items-center">
                <img src={mail} className="w-[29px] h-[20px]"></img>
                <input
                  type="text"
                  placeholder="Email"
                  className="h-[59px] w-full rounded-r-[20px] border-y-[1px] pl-4"
                ></input>
              </div>
              <button className="w-[159px] h-[60px] rounded-[20px] pr-8 pb-5 bg-[#009379] flex justify-center item-center ">
                <div className="w-[59px] h-[24px] font-[600] text-[24px] align-middle text-[#FFFFFF]">
                  Submit
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="h-[523px] bg-[#F7F8F8] top-[4020px] left-[-7px] px-[80px] pl-[90px]">
        <div className="w-[1291px] h-[368px] border-b-[1px] py-[48px] gap-[48px] border-[#E2E8F0] flex ">
          <div className="h-[46px] col-start-1"><img src={Links}></img></div>
          <div className="w-[173.3px] h-[318px] flex flex-col">
            <div className="h-[46px] text-[16px] font-[500] leading-[17.6px] text-[#94A3B8] w-[73px]" >Product</div>
            <div className="h-[46px] font-[400] text-[16px] text-[#0F172A] " >Pricing</div>
            <div className="h-[46px]" >Product</div>
            <div className="h-[46px]" >Product</div>
            <div className="h-[46px]" >Product</div>

          </div>
          <div className="h-[46px] col-start-2"><img src={Links}></img></div>
          <div className="h-[46px] col-start-2"><img src={Links}></img></div>
          <div className="h-[46px] col-start-2"><img src={Links}></img></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BrandPage;
