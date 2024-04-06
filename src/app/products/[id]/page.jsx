"use client"
import React from 'react'
import Image from 'next/image'
import game from '@/app/assets/images/game.png'
import delivery from '@/app/assets/images/delivery.png'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'next/navigation'
export default function Product(){
    const {id} =useParams()
    console.log(id)
    return (
        <section className="w-page-width max-w-center-width py-4 mx-auto">
            <div className='flex justify-between'>
                <div className='w-[55%]'>
                    <div className='bg-[#F5F5F5]  py-8 flex justify-center items-center rounded-md'>
                       <div className='w-[350px] h-[350px]'> 
                        <Image objectFit="cover" src={game} alt='product'/>
                        </div>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div>
                        <p className='text-[25px] font-semibold'>Havic HV G-92</p>
                    </div>
                    <div className='my-2'>
                    <Rating
                      readonly={true}
                      size={22}
                      initialValue={1}
                   />
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>Rs</span>
                            <span className='text-[18px] font-semibold ml-1'>721</span>
                            <span className='text-[14px]  ml-1'>(5%)</span>
                        </p>
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>Brand: </span>
                            <span className='text-[18px] font-semibold ml-1'>HM</span>
                        </p>
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>Category: </span>
                            <span className='text-[18px] font-semibold ml-1'>Game</span>
                        </p>
                    </div>
                    <div className='mt-2'>
                        <p>A HNM Brand is very Good, i swear I tested it.</p>
                    </div>
                    <div className='mt-6'>
                        <Image src={delivery} alt='delivery'/>
                    </div>
                </div>
            </div>
        </section>
    )
}