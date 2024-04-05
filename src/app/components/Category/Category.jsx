import React from "react"
import category from '@/app/assets/images/category.png'
import Image from "next/image"
export default function Category(){
    return (
        <section className="w-page-width max-w-center-width py-4 mx-auto">
            <div>
                <Image src={category} alt="category"/>
            </div>
        </section>
    )
}