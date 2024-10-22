import Image from "next/image";
import Brand1 from "./brand1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Brand2 from "./brand2";
import RolexBrand from "./rolexbrand";

export default function Brands() {
  return (
    <>
      <section id="brands" className="py-28">
        <Tabs
          defaultValue="rolex"
          className="w-full flex flex-col items-center gap-4"
        >
          <TabsList className="sm:w-1/2 w-4/5 sm:h-[10rem] h-[5rem] flex justify-around items-center">
            <TabsTrigger
              value="rolex"
              className="data-[state=active]:h-full data-[state=active]:bg-gray-300"
            >
              <Image src="/b1logo.png" alt="logo" height={128} width={128} />
            </TabsTrigger>
            <TabsTrigger
              value="longines"
              className="data-[state=active]:h-full data-[state=active]:bg-gray-300"
            >
              <Image src="/b3logo.png" alt="logo" height={128} width={128} />
            </TabsTrigger>
            <TabsTrigger
              value="chopard"
              className="data-[state=active]:h-full data-[state=active]:bg-gray-300"
            >
              <Image src="/b2logo.png" alt="logo" height={128} width={128} />
            </TabsTrigger>
            <TabsTrigger
              value="audemars"
              className="data-[state=active]:h-full data-[state=active]:bg-gray-300"
            >
              <Image src="/b4logo.png" alt="logo" height={128} width={128} />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rolex">
            <RolexBrand />
          </TabsContent>
          <TabsContent value="longines">
            <Brand2 />
          </TabsContent>
          <TabsContent value="chopard">
            <Brand1 />
          </TabsContent>
          <TabsContent value="audemars">
            <Brand2 />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
