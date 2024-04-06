"use client"
import React,{useState} from "react"
import Card from "./Card"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
export default function Products(){
    const [page, setPage] = useState(1);
     const limit = 10;

     const fetchProducts = async (page) => {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${ page * limit}`);
        const data = await response.json();
        return data;
      };
    const {
        isLoading,
        error,
        data: products,
      } = useQuery({ queryKey: ['products',page], queryFn:()=>fetchProducts(page), keepPreviousData : true})

      if(error){
        return (
            <p>Something went wrong...,{error.message}</p>
        )
      }
      const nextHandler=()=>{
        setPage(prevPage => prevPage + 1);
      }
      const prevHandler=()=>{
        setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage);
      }
    return (
        <section className="w-page-width max-w-center-width py-4 mx-auto">
            {
                isLoading?
                <div>
                    <p>Loding.....</p>
                </div>:
                <div className="flex flex-wrap items-center gap-4">
                    {
                        products.products.map((item)=>{
                            return (
                              <Link href={`/products/${item.id}`} className="w-[23%]" key={item.id}>
                                <Card data={item} />
                              </Link>
                            )
                        })
                
                    }
                </div>
              }
              <div className="flex items-center justify-center gap-4">
                <div  className="bg-[#000000] text-[#ffffff] rounded-md py-4 cursor-pointer text-center inline-block w-[100px]" onClick={prevHandler}>Prev</div>
                <div onClick={nextHandler} className="bg-[#000000] cursor-pointer text-[#ffffff] text-center rounded-md py-4 w-[100px] inline-block">Next</div>
              </div>
        </section>
    )
}