import React from "react"
import socials from '@/app/assets/images/socials.png'
import Image from "next/image"
export default function Footer(){
    return(
        <footer className="bg-b-black text-t-white">
            <div className="w-page-width max-w-center-width py-4 mx-auto flex items-center justify-between">
                <div className="flex justify-between w-[100%] py-4">
                    <div>
                        <div>
                            <p className="font-bold text-[18px] mb-2">Exclusive</p>
                        </div>
                        <div>
                            <p>Subscrible</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-bold text-[18px] mb-2">Support</p>
                        </div>
                        <div>
                            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-bold text-[18px] mb-2">Account</p>
                        </div>
                        <div>
                            <p className="mb-2">My Account</p>
                            <p className="mb-2">Login/Register</p>
                            <p className="mb-2">Cart</p>
                            <p className="mb-2">Wishlist</p>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-bold text-[18px] mb-2">Quick Link</p>
                        </div>
                        <div>
                            <p className="mb-2">Privacy Policy</p>
                            <p className="mb-2">Terms of Use</p>
                            <p className="mb-2">FAQ</p>
                            <p className="mb-2">Contact</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image width={150} src={socials} alt="socials"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}