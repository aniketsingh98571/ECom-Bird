"use client"
import React,{useState} from "react"
import Card from "./Card"
import { useQuery } from "@tanstack/react-query"
export default function Products(){
    const [page, setPage] = useState(1);
     const limit = 10;

     const fetchProducts = async (key, page = 1) => {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${ page * limit}`);
        const data = await response.json();
        return data;
      };
    const {
        isLoading,
        error,
        data: products,
      } = useQuery({ queryKey: ['products',page], queryFn: fetchProducts })
      if(error){
        return (
            <p>Something went wrong...</p>
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
                                <Card data={item} key={item.id}/>
                            )
                        })
                
                    }
                </div>
              }
              <div onClick={nextHandler}>Next</div>
              <div onClick={prevHandler}>Prev</div>
        </section>
    )
}