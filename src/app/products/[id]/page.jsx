"use client"
import React from 'react'
import Image from 'next/image'
import delivery from '@/app/assets/images/delivery.png'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'next/navigation'
import { useQuery } from "@tanstack/react-query"
export default function Product(){
    const {id} =useParams()
    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        return data;
      };

    const {
        isLoading,
        error,
        data: product,
      } = useQuery({ queryKey: ['product'], queryFn:fetchProduct})

      if(error){
        return (
            <p>Something went wrong:{error.message}</p>
        )
      }
    return (
        <section className="w-page-width max-w-center-width py-4 mx-auto"  data-testid="checkProductRenderId" >
          {
            !isLoading?
            <div className='flex justify-between'>
                <div className='w-[55%]'>
                    <div className='bg-skin-b  py-8 flex justify-center items-center rounded-md'>
                       <div className='w-[350px] '> 
                        <Image width={350} height={280}  src={product.thumbnail} alt={`${product.title}`}/>
                        </div>
                    </div>
                    <div className='flex items-center flex-wrap gap-4 mt-4 cursor-pointer'>
                        {
                            product.images.map((image,i)=>{
                                return (
                                    <div className="hover:scale-110 transition-transform duration-200" key={i}> 
                                      <Image width={200} height={200}  src={image} alt={`${product.title}`}/>
                                     </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div>
                        <p className='text-[25px] font-semibold'>{product.title}</p>
                    </div>
                    <div className='my-2'>
                    <Rating
                       readonly={true} 
                       initialValue={product.rating}
                       size={22}
                       allowFraction
                   />
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>$</span>
                            <span className='text-[18px] font-semibold ml-1'>{product.price}</span>
                            <span className='text-[14px]  ml-1'>{product.discountPercentage?`(${product.discountPercentage}%)`:""}</span>
                        </p>
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>Brand: </span>
                            <span className='text-[18px] font-semibold ml-1'>{product.brand}</span>
                        </p>
                    </div>
                    <div>
                        <p className='mt-2'>
                            <span className='text-[18px]'>Category: </span>
                            <span className='text-[18px] font-semibold ml-1'>{product.category}</span>
                        </p>
                    </div>
                    <div className='mt-2'>
                        <p>{product.description}</p>
                    </div>
                    <div className='mt-6'>
                        <Image src={delivery}  alt="delivery"/>
                    </div>
                </div>
            </div>:<p >Loading...</p>
          }
        </section>
    )
}