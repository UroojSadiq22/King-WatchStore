import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaMessage,
  FaLocationPin,
} from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full sm:h-[28rem] mt-12 bg-gray-50 backdrop-blur-3xl">
      <div className="text-2xl flex justify-center items-center p-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      <div className="flex sm:flex-row flex-col justify-around items-center mb-8 gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-orange-800 font-bold">Follow Us</h1>
          <div className="flex justify-center items-center gap-10 m-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-[30px] h-[30px] text-orange-400" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-[30px] h-[30px] text-orange-400" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-[30px] h-[30px] text-orange-400" />
            </a>

            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-[30px] h-[30px] text-orange-400" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-orange-800 font-bold">Contact Us</h1>
          <div className="m-4">
            <div className="flex justify-center items-center gap-4 mb-2">
              <FaPhone className="w-[20px] h-[20px] text-orange-400" />
              <p>+123 456 7890</p>
            </div>

            <div className="flex justify-center items-center gap-4 mb-2">
              <FaMessage className="w-[20px] h-[20px] text-orange-400" />
              <p>info@eventhorizon.com</p>
            </div>

            <div className="flex justify-center items-center gap-4 mb-2">
              <FaLocationPin className="w-[20px] h-[20px] text-orange-400" />
              <p>12F ABC street, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[1px] border-gray-700 mx-auto w-3/4" />

      <div className="text-center m-6 text-sm">
        <p>
          © {new Date().getFullYear()} by{" "}
          <span className="font-bold sm:text-lg">Urooj Sadiq</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
