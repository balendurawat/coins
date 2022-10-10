import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 gradient-bg-welcome py-24 pb-20 px-44">
      <div className="flex gap-32 pb-8">
        <div className="flex flex-col justify-between">
          <h2 className="text-5xl font-medium text-gray-100">0xthree</h2>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium text-gray-200">Get updates</h2>
            <p className="text-lg text-gray-300">
              We are growing fast! Subscribe to stay updated
            </p>

            <div className="flex gap-4">
              <input
                type="text"
                className="bg-gray-200 py-4 px-2 text-gray-800 text-lg placeholder:text-gray-700 placeholder:text-lg outline-none border-none rounded-sm"
                placeholder="Enter email"
              />

              <button
                type="button"
                className="flex flex-row w-fit justify-center items-center text-white text-xl font-semibold bg-[#2952e3] p-4 cursor-pointer hover:bg-[#2546bd] rounded-sm"
              >
                Go to documentation
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <div className="flex gap-32">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-gray-400 tracking-wider capitalize font-semibold">Developers</h3>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Getting Started
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Leaderboard
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Run a Node
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Docs
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-gray-400 tracking-wider capitalize font-semibold">Ecosystem</h3>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Getting Started
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Leaderboard
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Run a Node
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Docs
              </p>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-gray-400 tracking-wider capitalize font-semibold">Resources</h3>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Getting Started
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Leaderboard
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Run a Node
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Docs
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg text-gray-400 tracking-wider capitalize font-semibold">
                Help & support
              </h3>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Getting Started
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Leaderboard
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Run a Node
              </p>
              <p className="text-lg text-gray-200 capitalize cursor-pointer font-light">
                Docs
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-700 w-full h-[1px] border-none outline-none" />

      <div className="flex gap-12 pt-8 justify-between items-center">
        <p className="text-sm text-gray-200">©2022 copyright lorem ipsum idk</p>
        <div className="flex items-center gap-8">
          <p className="text-base text-gray-300 cursor-pointer">Node</p>
          <p className="text-base text-gray-300 cursor-pointer">
            Code of conduct
          </p>
          <p className="text-base text-gray-300 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-base text-gray-300 cursor-pointer">
            Terms of service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
