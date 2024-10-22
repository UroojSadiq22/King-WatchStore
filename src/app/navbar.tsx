"use client"

import { useState , forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser , FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import Search from "./pages/search/page";
import User from "./pages/user/page";


const MenuIcon = forwardRef((props, ref) => (
  <div ref={ref} {...props}>
    <FiMenu className="text-xl cursor-pointer" />
  </div>
));
MenuIcon.displayName = "MenuIcon";

export default function Navbar() {
  const [username, setUsername] = useState<string | null>(null);
  return (
<nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-10">
<main className="flex sm:justify-around justify-between items-center sm:m-6 md:m-4 m-6 gap-2">


      <div>
        <Image src="/logo.png" alt="logo" height={74} width={74} style={{width: "auto" , height:"auto"}} />
      </div>

      <div className="hidden md:flex justify-center items-center lg:gap-16 md:gap-10">
        <Link href="/" className="p-2 hover:text-white transition duration-300 ease-in-out relative group">
          <h1>Home</h1>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="#about" className="p-2 hover:text-white transition duration-300 ease-in-out relative group">
          <h1>About</h1>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="#brands" className="p-2 hover:text-white transition duration-300 ease-in-out relative group">
          <h1>Brands</h1>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

        <Link href="#contact" className="p-2 hover:text-white transition duration-300 ease-in-out relative group">
          <h1>Contact Us</h1>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>

      </div>

<div className="flex gap-6 flex-row-reverse">

<div className="md:hidden">

<Sheet>
      <SheetTrigger asChild>


      {/* <FiMenu className="text-xl cursor-pointer" /> */}
      <MenuIcon/>
      
      </SheetTrigger>
      <SheetContent className="p-8 pt-10 backdrop-blur-lg h-full flex flex-col">
       <SheetClose asChild>
       <Link href="/" className="text-xl hover:text-blue-400 transition-all duration-300">
          <h1>Home</h1>
          <hr className="my-2"/>
        </Link>
        </SheetClose>

        <SheetClose asChild>
        <Link href="#about" className="text-xl hover:text-blue-400 transition-all duration-300">
          <h1>About</h1>
          <hr className="my-2"/>
        </Link>
        </SheetClose>

        <SheetClose asChild>
        <Link href="#brands" className="text-xl hover:text-blue-400 transition-all duration-300">
          <h1>Brands</h1>
          <hr className="my-2"/>
        </Link>
        </SheetClose>

        <SheetClose asChild>
        <Link href="#contact" className="text-xl hover:text-blue-400 transition-all duration-300">
          <h1>Contact Us</h1>
          <hr className="my-2"/>
        </Link>
        </SheetClose>
      
      </SheetContent>
    </Sheet>
</div>
      

      <div className="flex justify-center items-center gap-6">
        <Search/>
        {/* {username ? (
              <div className="text-xl font-bold">
                {username.charAt(0).toUpperCase()}
              </div>
            ) : (
              <User setUsername={setUsername} />
            )} */}
            <FiUser className="text-xl cursor-pointer" />
        <FiShoppingCart className="text-xl cursor-pointer" />
      </div>

</div>

    </main>
</nav>
    
  );
}
