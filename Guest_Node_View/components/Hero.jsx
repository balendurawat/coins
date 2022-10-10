import React from "react";
import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex mf:flex-row flex-col items-start justify-between mx-[400px] mt-52">
      <div className="flex flex-1 justify-start flex-col mf:mr-10">
        <p className="text-left mt-5 text-white font-light text-base tracking-[.2em] md:w-9/12 w-11/12">
          GET STARTED FOR NODE OPERATORS
        </p>
        <h1 className="text-8xl text-gradient pt-3">Run a Node</h1>
        <p className="text-left mt-5 text-white font-light text-4xl md:w-7/12 w-11/12">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        <button
          type="button"
          className="flex flex-row w-fit justify-center items-center mt-12 text-white text-lg font-semibold bg-[#2952e3] px-6 py-4 rounded-md cursor-pointer hover:bg-[#2546bd]"
        >
          Go to documentation
        </button>
      </div>

      <div className="relative w-96 h-80 justify-center flex items-center rounded-xl h-60 my-5 eth-card white-glassmorphics p-6">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            <p className="text-white font-light text-sm">Address</p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
