"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import About from "./pages/about";
import Brands from "./pages/brands/page";
import Contact from "./pages/contact";
import { Card, CardContent } from "@/components/ui/card";
import CardCrousal from "./card"

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const watches = [
    {
      id:1,
      name: "Brown Watch",
      image: "/watches.png",
      description: "An elegant style to wear",
      price: "$25.66",
    },
    {
      id:2,
      name: "Blue Watch",
      image: "/watches(1).png",
      description: "Class and elegance combined",
      price: "$150.00",
    },
    {
      id:3,
      name: "Green Watch",
      image: "/watches(2).png",
      description: "Technology meets style",
      price: "$200.00",
    },
    {
      id:4,
      name: "Green Watch",
      image: "/watches(3).png",
      description: "Technology meets style",
      price: "$200.00",
    },
  ];

  return (
    <>

    <main className="min-h-screen flex flex-col-reverse sm:flex-row justify-around items-center sm:mt-20 mt-10 sm:py-20 py-16 px-4 sm:px-10 w-full">
  <div className="flex flex-col p-4 gap-10 w-full sm:w-auto">
    <h1 className="text-white animate-horizontal-scroll sm:text-6xl text-4xl font-bold mt-10 sm:mt-0">
      Exquisite Watches
      <br />
      <span className="sm:text-3xl text-2xl">
        Choose Luxury,<span className="text-black"> Choose us</span>
      </span>
    </h1>
    <div>
      <p className="mb-10 animate-vertical-scroll text-sm text-gray-700">
        Discover the Perfect Watch for Every Occasion
        <br /> and Elevate Your Style with Timeless Elegance <br />
        and Precision Craftsmanship
      </p>

      <div className="flex gap-6 p-4 border border-transparent">
        <Link
          href="/facebook"
          className="p-1 hover:bg-[#f5854e] hover:text-white rounded-full border border-white animate-move-around"
        >
          <FaFacebookF className="text-xl cursor-pointer" />
        </Link>
        <Link
          href="/twitter"
          className="p-1 hover:bg-[#f5854e] hover:text-white transition-all duration-100 ease-in-out rounded-full border border-white"
        >
          <FaTwitter className="text-xl cursor-pointer" />
        </Link>
        <Link
          href="/youtube"
          className="p-1 hover:bg-[#f5854e] hover:text-white transition-all duration-100 ease-in-out rounded-full border border-white"
        >
          <FaYoutube className="text-xl cursor-pointer" />
        </Link>
      </div>
    </div>
  </div>
  

  <Carousel
  plugins={[plugin.current]}
  className="w-full max-w-sm sm:max-w-xs flex flex-col justify-center items-center"
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}
>
  <CarouselContent className="w-full">
    {watches.map((watch, index) => (
      <CarouselItem key={index} className="flex justify-center">
        <div className="p-1">
          <Image
            src={watch.image}
            alt={`watch-${index}`}
            width={300}
            height={300}
            style={{width: "auto" , height:"auto"}}
            className="object-contain"
          />
        </div>

      </CarouselItem>
    ))}
    

  </CarouselContent>
  <Image
            src="/Ellipse 4.png"
            alt="shadow"
            width={200}
            height={200}
            style={{width: "auto" , height:"auto"}}
            className="object-contain"
          />
  <CarouselPrevious className="hover:bg-[#f5854e] hover:text-white" />
  <CarouselNext className="hover:bg-[#f5854e] hover:text-white" />
  
</Carousel>

{/* <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}

    
</main>




    <About/>
    <Brands/>
    <Contact/>
    
    </>
   
    
  );
}
