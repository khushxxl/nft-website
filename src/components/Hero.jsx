import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="flex items-start justify-evenly mt-10">
        <div>
          <p className="text-5xl font-bold text-[#800080]">
            Discover Rare <br /> Collections of <br /> Art & NFTs{' '}
          </p>
          <p className=" max-w-md w-full mt-4 font-semibold">
            Sed diam no aliquyam est accusam eos sed, diam lorem ut dolor magna
            dolor lorem et justo, at lorem sanctus et amet vero dolor vero.
            Lorem dolor sea sed tempor..
          </p>

          <div className="mt-10 bg-blue-400 max-w-fit rounded-2xl w-full p-3 text-white">
            <p>Start Collecting {'>'}</p>
          </div>

          <div className="flex text-4xl text-blue-900 font-semibold space-x-10 mt-10 border-2 border-blue-300 max-w-fit p-5 rounded-xl ">
            <div className="flex flex-col items-center">
              <p>{'1000+'}</p>
              <p className="text-sm">xyzxyzxyz</p>
            </div>

            <div className=" bg-black h-[50px] w-[2px]" />

            <div className="flex flex-col items-center">
              <p>{'10+'}</p>
              <p className="text-sm">xyzxyzxyz</p>
            </div>
            <div className=" bg-black h-[50px] w-[2px]" />

            <div className="flex flex-col items-center">
              <p>{'20+'}</p>
              <p className="text-sm">xyzxyzxyz</p>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-b from-cyan-500 to-blue-500 h-[70vh] ">
          <img
            class="w-full"
            src={require('../images/eth.png')}
            alt="NFT Card"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
