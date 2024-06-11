import React from "react";
import Container from "../Container";
import footerImg from "../../assets/Image2.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f99f1c] mt-36 h-[500px]">
      <Container>
        <div className="hidden lg:flex items-center">
          <div className="flex-1 relative">
            <input
              placeholder="Enter Your Email"
              className="w-full rounded-2xl h-14 px-5"
              type="text"
            />
            <button className="flex items-center  gap-3 absolute right-6 top-2 bg-orange-500 text-white rounded-xl px-4 py-2">
              Subscribe <FaArrowRight />
            </button>
            <div className="text-left space-y-4 mt-16">
              <h1 className="text-3xl font-bold">
                pti<span className="text-orange-500">.</span>
              </h1>
              <div className="flex justify-between">
                <p className="font-bold">Copyright@Tripp.All Right Reserved</p>
                <div className="flex items-center gap-2">
                  <div className="bg-[#feddba] size-8 rounded-full flex justify-center items-center">
                    <FaGoogle className="text-orange-500" />
                  </div>
                  <div className="bg-[#feddba] size-8 rounded-full flex justify-center items-center">
                    <FaTwitter className="text-orange-500" />
                  </div>
                  <div className="bg-[#feddba] size-8 rounded-full flex justify-center items-center">
                    <FaInstagram className="text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full h-full" src={footerImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-4 sm:p-10 justify-center items-center gap-5 lg:hidden">
          <div className="relative w-full">
            <input
              placeholder="Enter Your Email"
              className="w-full rounded-2xl h-14 px-5"
              type="text"
            />
            <button className="flex items-center  gap-3 absolute right-0 top-2 font-semibold text-orange-500 rounded-xl px-4 py-2">
              Subscribe <FaArrowRight />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#fc6011] size-8 rounded-full flex justify-center items-center">
              <FaGoogle className="text-white" />
            </div>
            <div className="bg-[#fc6011] size-8 rounded-full flex justify-center items-center">
              <FaTwitter className="text-white" />
            </div>
            <div className="bg-[#fc6011] size-8 rounded-full flex justify-center items-center">
              <FaInstagram className="text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold space-y-4">
              pti<span className="text-orange-500">.</span>
              <p className="font-bold text-base">
                Copyright@Tripp.All Right Reserved
              </p>
            </h1>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
