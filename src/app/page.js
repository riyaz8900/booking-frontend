"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import backgroundImage from '../../public/image.jpg'
import TopNav from "./components/TopNav";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="relative   w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>

      {/* Content */}
      <div className="container-fluid bg-white mx-auto relative z-10">
        <div className="container hidden lg:block mx-auto">
          <TopNav />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <Navbar />

        <div className="flex min-h-screen flex-col md:flex-col lg:flex-row justify-between items-center px-2 pt-8">
          {/* Left Content */}
          <div className="text-white w-full md:w-2/2 lg:w-1/2  mb-8 md:mb-0">
            <div className="">
              <img src="/car.gif" width={130} alt="Car animation" />
            </div>

            <div className="mb-8">
              <h1 className="text-sm md:text-2xl lg:text-5xl font-bold mb-4">
                Premium Chauffeur<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                  Services for Every Journey
                </span>
              </h1>

              <p className="text-lg mb-2">
                From corporate travel to airport transfers, ENTREX ensures a safe,
              </p>
              <p className="text-lg">
                punctual, and comfortable ride—everytime.
              </p>
            </div>

            {/* Features Grid */}


            <div className="py-3">
              <button
                type="button"
                className="px-6 py-3 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 shadow-lg"
                style={{
                  background: 'linear-gradient(270deg, #F3AA45 0%, #ED2628 100%)',
                  color: 'white',
                }}
              >
                <span className="relative z-10">Call Us Now</span>
              </button>
            </div>
            <div className="flex gap-5 mt-3 mb-8">
              <div className="flex flex-col items-center">
                <div className="font-inter">
                  {/* Heading with exact font specs */}
                  <h1 className="font-semibold md:text-[20.92px]  lg:text-[39.92px]  text-sm md:leading-[30.03px] tracking-[0%]">
                    Verified
                  </h1>

                  {/* Paragraph with exact font specs */}
                  <p className="font-medium md:text-[19.02px] lg:text-[20.92px] text-sm md:leading-[30.03px] tracking-[0%]">
                    Chauffeurs
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-inter">
                  {/* Heading with exact font specs */}
                  <h1 className="font-bold lg:text-[39.92px] md:text-[20.92px] text-sm md:leading-[30.03px] tracking-[0%]">
                    Real-time
                  </h1>

                  {/* Paragraph with exact font specs */}
                  <p className="font-medium md:text-[19.02px] lg:text-[20.92px]  text-sm md:leading-[30.03px] tracking-[0%]">
                    Tracking
                  </p>
                </div>

              </div>
              <div className="flex flex-col items-center">
                <div className="font-inter">
                  {/* Heading with exact font specs */}
                  <h1 className="font-semibold md:text-[20.92px] lg:text-[39.92px]  text-sm md:leading-[30.03px] tracking-[0%]">
                    R24x7
                  </h1>

                  {/* Paragraph with exact font specs */}
                  <p className="font-medium md:text-[20.02px] text-sm md:leading-[30.03px] tracking-[0%]">
                    Support
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-1/3">
            <div className="transition-transform duration-300 hover:scale-105">

              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}