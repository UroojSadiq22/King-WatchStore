import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Contact() {
  const submitHandler = () => {
    alert("You registered successfully!");
  };
  return (
    <section
      id="contact"
      className="min-h-screen sm:py-24 py-2 flex justify-center items-center"
    >
      <div className="relative w-full h-screen">
        <Image
          src="/contactcover.jpeg"
          alt="contactus"
          fill
          style={{objectFit: "cover"}}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <form className="absolute lg:left-4 left-0" onSubmit={submitHandler}>
        <Card className="lg:mx-4 lg:w-[50rem] md:w-[30rem] w-[15rem] lg:min-h-[30rem] flex flex-col justify-center items-center bg-white/80 backdrop-blur-md border-[3px] border-[#f5854e] shadow-xl">
          <CardTitle className="mt-10 lg:text-3xl text-2xl">Contact Us</CardTitle>
          <CardHeader>
            <div className="md:grid md:grid-cols-2 md:gap-10 flex flex-col m-6">
              <div className="flex flex-col gap-2 items-center">
                <div>
                  <label className="block sm:text-lg text-sm">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="sm:p-2 p-1 sm:w-[20rem] w-[12rem] flex items-center justify-center rounded bg-orange-300 border-2 border-transparent focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block sm:text-lg text-sm">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="sm:p-2 p-1 sm:w-[20rem] w-[12rem] rounded bg-orange-300 border-2 border-transparent focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block sm:text-lg text-sm">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="sm:p-2 p-1 sm:w-[20rem] w-[12rem] rounded bg-orange-300 border-2 border-transparent focus:border-black focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block sm:text-lg text-sm">Message:</label>
                <textarea
                  name="message"
                  className="sm:p-2 p-1 sm:w-[20rem] w-[12rem] rounded bg-orange-300 border-2 border-transparent focus:border-black focus:outline-none lg:h-[12rem] h-[6rem]"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <button
              type="submit"
              className="relative inline-block lg:p-4 p-2 lg:w-[15rem] w-[12rem] lg:m-4 rounded-lg text-center text-white overflow-hidden 
               group bg-gray-400 transition-all duration-300 ease-in-out"
            >
              <span className="absolute inset-0 bg-orange-300 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 font-bold">Submit</h1>
            </button>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}
