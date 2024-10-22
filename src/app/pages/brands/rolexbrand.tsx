import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image"
  import { it } from "node:test";
  import { useState } from "react";
  import { FiShoppingCart } from "react-icons/fi";
  
  export default function Brand1() {
  
    const watches = [
      {
        id:1,
        name: "Date Just",
        image: "/r1.png",
        description: "An elegant style to wear",
        price: "$25.66",
      },
      {
        id:2,
        name: "Day Date",
        image: "/r2.png",
        description: "Classic and elegance",
        price: "$150.00",
      },
      {
        id:3,
        name: "Oyster Pertual",
        image: "/r3.png",
        description: "Technology meets style",
        price: "$200.00",
      },
      {
        id:4,
        name: "Black Divine",
        image: "/watches(3).png",
        description: "Business and classy style",
        price: "$200.00",
      },
      {
        id:5,
        name: "Red Delight",
        image: "/watches(2).png",
        description: "Technology meets style",
        price: "$200.00",
      },
      {
        id:6,
        name: "Green Hunt",
        image: "/watches(1).png",
        description: "Regular styling to wear",
        price: "$200.00",
      },
    ];
  
    const [cart, setCart] = useState<any>([]);
    const [totalCost, setTotalCost] = useState<number>(0);
  
    const calculateTotal = (cartItems: any[]) => {
      const total = cartItems.reduce((acc, item) => {
        const numericPrice = parseFloat(item.price.replace('$', '')); // Remove '$'
        return acc + numericPrice;
      }, 0);
      setTotalCost(total);
    };
  
    const addToCart = (item: any) => {
      setCart((prevCart:any) => {
        const updatedCart = [...prevCart, item];
        calculateTotal(updatedCart); // Update total cost
        return updatedCart;
      });
    };
  
    const removeFromCart = (id: number) => {
      setCart((prevCart:any) => {
        const updatedCart = prevCart.filter((item:any) => item.id !== id);
        calculateTotal(updatedCart); // Update total cost
        return updatedCart;
      });
    };
    return (
      <>
  <section className="flex justify-center">
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-12 p-10 overflow-hidden">
      {watches.map((item) => (
        <Card key={item.id} className="p-0 sm:w-[300px] w-[240px] text-center cursor-pointer
         hover:bg-gray-300 hover:border-[3px] hover:border-[#f5854e] 
         shadow-2xl flex flex-col justify-center items-center transition-all 
         duration-300 transform hover:scale-105 will-change-transform">
        <CardHeader className="p-0">
          <Image src={item.image} alt={item.name} width={138} height={138} className="p-0 relative" style={{width: "auto" , height:"auto"}}/>
          <button
                className="absolute p-2 bg-orange-400 text-white rounded right-2"
                onClick={() => addToCart(item)}
              >
                 <FiShoppingCart className="text-lg cursor-pointer" />
              </button>
        </CardHeader>
        <div className="bg-orange-300 flex justify-between lg:gap-8 gap-0 m-0">
        <CardContent className="text-start p-4">
        <CardTitle className="mt-2 lg:text-2xl text-xl">{item.name}</CardTitle>
        <CardDescription className="lg:text-sm text-xs">{item.description}</CardDescription>
        </CardContent>
        <CardFooter className="pt-1 text-gray-600 lg:text-base text-sm">
         {item.price}
         
        </CardFooter>
        </div>
        
        
        
      </Card>
      ))}
    </div>
  
    {/* <h2 className="text-2xl font-bold mt-10">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="mt-4">
            <h3 className="text-xl">Total Cost: ${totalCost.toFixed(2)}</h3>
            {cart.map((item:any) => (
              <li
                key={item.id}
                className="flex justify-between p-2 bg-gray-50 shadow mb-2 rounded"
              >
                <span>{item.name}</span>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )} */}
  
  </section>
      
      
      </>
          
    )
  }
  