import React from "react"
import Image from "next/image"
import game from '@/app/assets/images/game.png'
import eye from '@/app/assets/images/eye.png'
import heart from '@/app/assets/images/heart.png'
export default function Card({data}){
    console.log(data)
    return (
             <div className="w-[23%] cursor-pointer">
                    <div className="bg-[#F5F5F5] p-4 rounded-md flex items-center justify-center relative">
                        <div className="w-[150px] h-[150px]">
                           <Image  fill={true} src={data.thumbnail} alt={data.brand}/>
                        </div>
                        <div className="bg-[#ffffff] w-[30px] h-[30px] rounded-[50%] right-4 top-14 flex items-center justify-center absolute">
                            <Image width={20}  src={eye} alt="eye"/>
                        </div>
                        <div className="bg-[#ffffff] w-[30px] h-[30px] rounded-[50%] right-4 top-4 flex items-center justify-center absolute">
                            <Image width={18} src={heart} alt="heart"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-medium mt-2">{data.brand}</p>
                        </div>
                        <div>
                            <p className="mt-2">
                                <span>$</span>
                                <span className="text-[#DB4444] ml-1">{data.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            )
}