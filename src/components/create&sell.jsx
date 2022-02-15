import React from 'react'
import { myInfo } from '../data'

const CreateSell = () => {
  return (
    <div className="flex flex-col  mt-10">
      <p className="text-[#800080] text-center text-3xl font-bold">
        Create and Sell your NFTs
      </p>

      <div className="mt-3  flex items-center justify-center space-x-10">
        {myInfo.map((data) => {
          return (
            <div className="border-2 bg-gray-200 space-y-5 p-4 mt-5 h-[27vh] flex items-start justify-center flex-col">
              <img src={data.logo} alt="" className="h-12 w-12" />
              <p className="max-w-xs">
                Diam diam sea eirmod stet duo ut ea. Amet magna justo ipsum et,
                nonumy takimata amet diam nonumy duo tempor,.
              </p>
            </div>
          )
        })}
      </div>
      {/* <div className="text-right mr-40 p-2 bg-blue-400 flex justify-start items-start max-w-fit rounded-xl">
        <p className="text-right">Start Now</p>
      </div> */}
    </div>
  )
}

export default CreateSell
