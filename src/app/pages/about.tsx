import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <main id="about" className="relative py-24">
     <div className="relative w-full h-[70vh]">
        <Image
          src="/about.jpg"
          alt="about us"
          fill
          style={{objectFit: "cover"}}
          className="w-full h-full"
        />
      </div>


      <Card className="absolute top-1/2 sm:top-2/3 md:right-12 transform -translate-y-1/2 
        sm:w-[35rem] w-[16rem] m-6 md:h-[20rem] sm:h-[30rem] 
      bg-white/80 backdrop-blur-md border-[3px] border-[#f5854e] shadow-lg">
        <CardHeader className="text-sm">
          <CardTitle className="m-1 text-2xl">About Us</CardTitle>
          <CardDescription className="text-sm sm:text-md">
            Welcome to{" "}
            <span>
              <Image src="/logo.png" alt="logo" height={28} width={28} style={{width: "auto" , height:"auto"}}/>
            </span>{" "}
            where timeless craftsmanship meets modern design. Our mission is to
            offer high-quality, authentic timepieces that suit every style and
            occasion. We partner with renowned watchmakers to bring you luxury,
            sports, and smart watches—each selected for its precision and
            elegance. <br/> <br/>
            We’re committed to providing exceptional customer service, global
          shipping, and a seamless shopping experience. Whether you seek a
          classic piece or a performance watch, [Your Watch Store Name] has the
          perfect timepiece for you.
          </CardDescription>
        </CardHeader>
        {/* <CardContent className="text-sm">
          We’re committed to providing exceptional customer service, global
          shipping, and a seamless shopping experience. Whether you seek a
          classic piece or a performance watch, [Your Watch Store Name] has the
          perfect timepiece for you.
        </CardContent> */}
      </Card>
    </main>
  );
}
