import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QRCode from "../assets/images/SignUp/QRCodeContainer.png"

const LogIn = () => {
  return (
    <>
      <Navbar />

      <div className="w-full max-w-full m-auto px-6">
        <div className="w-full max-w-full lg:max-w-[65.76%] m-auto flex flex-col md:flex-row lg:flex-row py-12 lg:pt-16 lg:pb-[115px]">
          <div className=" w-full max-w-full flex flex-col gap-8">
            <h1 className=" w-full max-w-full lg:max-w-[564px] text-[32px] text-center lg:text-left  leading-[44.8px] text-blackCustom font-medium">
              Sign in with NINAuth
            </h1>
            {/* Steps Main Container */}

            <div className="w-full max-w-full  flex flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex flex-row items-center gap-[38px]">
                {/* Steps Navigation */}
                <div className="flex flex-col items-center">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-[57px] max-w-[57px] h-[57px] max-h-[57px] border-[1px] border-[#E1E1D8] rounded-full flex items-center justify-center">
                      <span className="text-[24px] text-primaryColor leading-[28.8px] font-normal">
                        1
                      </span>
                    </div>
                    <div className="h-[100px] w-[1px] bg-[#E1E1D8]"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-[57px] max-w-[57px] h-[57px] max-h-[57px] border-[1px] border-[#E1E1D8] rounded-full flex items-center justify-center">
                      <span className="text-[24px] text-primaryColor leading-[28.8px] font-normal">
                        2
                      </span>
                    </div>
                    <div className="h-[100px] lg:h-[100px] w-[1px] bg-[#E1E1D8]"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-[57px] max-w-[57px] h-[57px] max-h-[57px] border-[1px] border-[#E1E1D8] rounded-full flex items-center justify-center">
                      <span className="text-[24px] text-primaryColor leading-[28.8px] font-normal">
                        3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instruction Text */}
                <div className="flex flex-col gap-[48px] lg:gap-[96px] items-center w-full max-w-full lg:max-w-[380px] text-[17px] font-medium text-blackCustom leading-[30.6px]">
                  <p className="text-[17px] font-medium text-blackCustom leading-[30.6px]">
                    Scan the QR code with your phone, and you will be taken to
                    your app store to download the app.
                  </p>
                  <p className="text-[17px] font-medium text-blackCustom leading-[30.6px]">
                  Download the NINAAuth app to complete the onboarding process.
                  </p>
                  <p className="text-[17px] font-medium text-blackCustom leading-[30.6px]">
                  You are all set! Once all details have been approved you will be able to use the app.
                  </p>
                </div>
              </div>
              <div className="w-[273px] h-[273px] object-cover">
                <img src={QRCode} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LogIn;
