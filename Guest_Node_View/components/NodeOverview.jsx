import React from "react";

const NodeOverview = () => {
  return (
    <div className="flex flex-col items-end pt-24 pb-12 px-[400px] bg-gray-200">
      <div className="flex flex-col items-start gap-4 w-[60%]">
        <h2 className="text-5xl font-medium text-gray-800">Node Overview</h2>
        <p className="text-2xl text-gray-700">
          Mina is secured by proof-of-stake consensus. Unlike other legacy
          protocols, any participant can validate transactions like a full node
          — making decentralization possible. And here, node operators can play
          two roles: they can produce blocks, and/or they can produce SNARKs.
        </p>
      </div>

      <div className="flex flex-col items-start gap-6 py-8 w-[60%]">
        <hr className="bg-neutral-300 w-full h-1" />
        <h2 className="text-3xl font-medium text-gray-800 w-full">Two Roles</h2>
        <div className="flex items-center justify-between w-full gap-12">
          <div className="w-full h-40 white-glassmorphics bg-bg-1 bg-center bg-no-repeat bg-cover"></div>
          <div className="w-full h-40 white-glassmorphics bg-bg-2 bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col items-start gap-4 w-[60%]">
            <h2 className="uppercase text-xl font-medium text-gray-600">
              BLOCK PRODUCERS
            </h2>
            <p className="text-lg text-gray-500">
              Similar to miners or stakers in other protocols, block producers
              can be selected to produce a block and earn block rewards,
              coinbase, transaction fees and network fees. Block producers can
              also be SNARK producers and generate their own proofs.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 w-[60%]">
            <h2 className="uppercase text-xl font-medium text-gray-600">
              Snark producers
            </h2>
            <p className="text-lg text-gray-500">
              SNARK producers help compress data in the network by generating
              SNARK proofs of transactions. They then sell those SNARK proofs to
              block producers on the Snarketplace in return for a portion of the
              block rewards.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 py-12 pb-8 w-[60%]">
        <hr className="bg-neutral-300 w-full h-1" />
        <h2 className="text-5xl font-medium text-gray-800 pt-6">Run a Node</h2>
        <div className="flex items-start gap-12 justify-between">
          <div className="flex flex-col items-start gap-4">
            <h2 className="uppercase text-4xl font-medium text-gray-600">01</h2>
            <p className="uppercase text-xl text-gray-500">Install Mina</p>
            <p className="text-base text-gray-500">
              Check the systems requirements and install Mina. The Mina package
              is around 100MB — which is smaller than most, but still takes some
              time.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="uppercase text-4xl font-medium text-gray-600">02</h2>
            <p className="uppercase text-xl text-gray-500">Install Mina</p>
            <p className="text-base text-gray-500">
              Check the systems requirements and install Mina. The Mina package
              is around 100MB — which is smaller than most, but still takes some
              time.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="uppercase text-4xl font-medium text-gray-600">03</h2>
            <p className="uppercase text-xl text-gray-500">Install Mina</p>
            <p className="text-base text-gray-500">
              Check the systems requirements and install Mina. The Mina package
              is around 100MB — which is smaller than most, but still takes some
              time.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex flex-row w-fit justify-center items-center mt-12 text-white text-xl font-semibold bg-[#2952e3] p-6 rounded-md cursor-pointer hover:bg-[#2546bd]"
        >
          Go to documentation
        </button>
      </div>
    </div>
  );
};

export default NodeOverview;
