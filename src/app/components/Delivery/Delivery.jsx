import React from "react"
import support from '@/app/assets/images/support.png'
import Image from 'next/image'
export default function Delivery(){
    return (
        <section className="w-page-width max-w-center-width py-4 mx-auto">
            <div className="flex justify-center">
                <Image width={900} src={support} alt="support"/>
            </div>
        </section>
    )
}