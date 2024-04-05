import React from "react"
import Image from 'next/image'
import search from '@/app/assets/images/search.png'
import heart from '@/app/assets/images/heart.png'
import cart from '@/app/assets/images/cart.png'
import user from '@/app/assets/images/user.png'
import Link from "next/link"
export default function Header(){
    return (
        <header>
            <div className="w-page-width max-w-center-width py-4 mx-auto flex items-center justify-between">
                <Link href="/">
                    <div>
                        <p className="font-bold text-[32px]">Exclusive</p>
                    </div>
                </Link>
                <div className="flex items-center gap-6">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign Up</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-[#F5F5F5] py-4 px-10 rounded-md relative mr-6">
                        <div>
                            <input className="bg-[#F5F5F5] outline-0 " type="search" placeholder="What are you looking for?"/>
                        </div>
                        <div>
                            <Image width={20} className="absolute right-5 top-4" src={search} alt="Search"/>
                        </div>
                    </div>
                    <div>
                        <Image width={20} src={heart} alt="like"/>
                    </div>
                    <div>
                        <Image width={23} src={cart} alt="cart"/>
                    </div>
                    <div>
                        <Image width={23} src={user} alt="User"/>
                    </div>
                </div>
            </div>
        </header>
    )
}