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
                src="https://cdn-icons.flaticon.com/png/512/2272/premium/2272815.png?token=exp=1644817718~hmac=fb9b2bb35c98c48f4344be8bf814ff31"
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
