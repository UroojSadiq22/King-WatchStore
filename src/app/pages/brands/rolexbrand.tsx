import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function Brand1() {
  const watches = [
    {
      id: 1,
      name: "Date Just",
      image: "/r1.png",
      description: "An elegant style to wear",
      price: "$25.66",
    },
    {
      id: 2,
      name: "Day Date",
      image: "/r2.png",
      description: "Classic and elegance",
      price: "$150.00",
    },
    {
      id: 3,
      name: "Oyster Pertual",
      image: "/r3.png",
      description: "Technology meets style",
      price: "$200.00",
    },
    {
      id: 4,
      name: "Black Divine",
      image: "/watches(3).png",
      description: "Business and classy style",
      price: "$200.00",
    },
    {
      id: 5,
      name: "Red Delight",
      image: "/watches(2).png",
      description: "Technology meets style",
      price: "$200.00",
    },
    {
      id: 6,
      name: "Green Hunt",
      image: "/watches(1).png",
      description: "Regular styling to wear",
      price: "$200.00",
    },
  ];

  return (
    <>
      <section className="flex justify-center">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-12 p-10 overflow-hidden">
          {watches.map((item) => (
            <Card
              key={item.id}
              className="p-0 sm:w-[300px] w-[240px] text-center cursor-pointer
         hover:bg-gray-300 hover:border-[3px] hover:border-[#f5854e] 
         shadow-2xl flex flex-col justify-center items-center transition-all 
         duration-300 transform hover:scale-105 will-change-transform"
            >
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={138}
                  height={138}
                  className="p-0 relative"
                  style={{ width: "auto", height: "auto" }}
                />
                <button
                  className="absolute p-2 bg-orange-400 text-white rounded right-2"
              
                >
                  <FiShoppingCart className="text-lg cursor-pointer" />
                </button>
              </CardHeader>
              <div className="bg-orange-300 flex justify-between lg:gap-8 gap-0 m-0">
                <CardContent className="text-start p-4">
                  <CardTitle className="mt-2 lg:text-2xl text-xl">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="lg:text-sm text-xs">
                    {item.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-1 text-gray-600 lg:text-base text-sm">
                  {item.price}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
