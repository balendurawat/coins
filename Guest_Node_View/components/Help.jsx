import React from "react";

const Help = () => {
  return (
    <div className="help-gradient py-24 px-[400px] gap-8 flex flex-col">
      <h2 className="text-4xl font-medium text-gray-100 tracking-wider" >Help & Support</h2>
      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col gap-3 border-2 border-gray-300 rounded-sm hover:shadow-md shadow-gray-200 bg-[#2d2d2d] p-10">
          <h2 className="text-xl font-medium text-gray-100">Discord</h2>
          <h2 className="text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            tenetur.
          </h2>
        </div>
        <div className="flex flex-col gap-3 border-2 border-gray-300 rounded-sm hover:shadow-md shadow-gray-200 bg-[#2d2d2d] p-10">
          <h2 className="text-xl font-medium text-gray-100">Github</h2>
          <h2 className="text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            tenetur.
          </h2>
        </div>
        <div className="flex flex-col gap-3 border-2 border-gray-300 rounded-sm hover:shadow-md shadow-gray-200 bg-[#2d2d2d] p-10">
          <h2 className="text-xl font-medium text-gray-100">Forums</h2>
          <h2 className="text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            tenetur.
          </h2>
        </div>
        <div className="flex flex-col gap-3 border-2 border-gray-300 rounded-sm hover:shadow-md shadow-gray-200 bg-[#2d2d2d] p-10">
          <h2 className="text-xl font-medium text-gray-100">Report a bug</h2>
          <h2 className="text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            tenetur.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Help;
