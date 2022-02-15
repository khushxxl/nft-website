import React from 'react'
import { myData } from '../data'

const Categories = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <p className="text-3xl font-semibold text-[#800080]">Categories</p>
      </div>

      <div className="flex space-x-10 mb-10">
        {myData.map((data) => {
          return (
            <div className="border-[2.5px] rounded-xl mt-5 border-blue-500 pr-6 pb-2 pl-6 pt-5 flex flex-col items-center justify-center text-center h-[160px]">
              <img
                src={require('../images/wallet.png')}
                alt=""
                className="h-20"
              />
              <p className="mt-2 text-xl font-semibold">Categories {data.id}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
