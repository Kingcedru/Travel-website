"use client";

import Image from "next/image";
import forestStay from "../../public/backgrounds/forest-stay.png";
import sunset from "../../public/backgrounds/sunset.png";
import tree from "../../public/backgrounds/tree-house.png";
import tracking from "../../public/backgrounds/tracking.png";
import forestTrack from "../../public/backgrounds/forest-track.png";

import account from "../../public/social/account_circle.png";
import search from "../../public/social/search.png";
import facebook from "../../public/social/facebook.png";
import instagram from "../../public/social/instagram.png";
import linkedin from "../../public/social/linkedin.png";
import rectangle from "../../public/shapes/Rectangle.svg";
import arrow from "../../public/shapes/Arrow.svg";
import menu from "../../public/social/menu.svg";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [backImage, setBackImage] = useState(forestStay);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link> */}
      </Head>
      <main>
        <Image
          className="h-screen relative w-full"
          src={backImage}
          alt="background image"
        />
        <section className="z-0 w-full h-screen top-0 absolute flex justify-between text-white">
          {/* left section */}
          <div className="left flex flex-col justify-between bg-black bg-opacity-30 px-2 font-Poppins">
            <div className="flex flex-col items-center gap-8 pt-8">
              <Link href="/account">
                <Image
                  className="w-6/6 cursor-pointer"
                  src={account}
                  alt="account icon"
                />
              </Link>
              <Image className="w-2/6" src={search} alt="search icon" />
            </div>
            <h1 className="-rotate-90 text-xl tracking-widest">traveler</h1>
            <div className="flex flex-col items-center gap-8 pb-8">
              <Image className="w-1/6" src={facebook} alt="facebook icon" />
              <Image className="w-1/6" src={instagram} alt="instagram" />
              <Image className="w-1/6" src={linkedin} alt="linkedIn icon" />
            </div>
          </div>
          {/* middle section */}
          <div className="middle h-screen w-full flex flex-col justify-center items-start gap-8 pl-32">
            <div className="space-y-2 font-Poppins">
              <h1 className="text-6xl tracking-widest">Adventure</h1>
              <h1 className="text-6xl tracking-widest">awaits.</h1>
              <h1 className="text-6xl tracking-widest">{"Let's go!"}</h1>
            </div>
            <div>
              <div className=" relative ">
                <Image
                  className="w-10 h-10"
                  src={rectangle}
                  alt="rectangle shape"
                />
                <Image
                  className="w-5 h-5 absolute top-2.5 left-2.5"
                  src={arrow}
                  alt="down arrow icon"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-wider">
                Forest Stay
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-lg">
                <h1 className="tracking-wider">
                  Integration with social media
                </h1>
                <h1 className="tracking-wider">platforms for sharing travel</h1>
                <h1 className="tracking-wider">platforms for sharing travel</h1>
              </div>
              <div className="text-lg">
                <h1 className="tracking-wider">
                  Integration with social media
                </h1>
                <h1 className="tracking-wider">platforms for sharing</h1>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="rigt w-4/6 flex flex-col justify-end gap-10">
            <div className="flex justify-end">
              <Image
                className="w-2/6"
                src={menu}
                alt="menu icon for navigation"
              />
            </div>
            <div className="boxes grid grid-cols-2 text-lg">
              <div></div>
              <div
                className="bg-white bg-opacity-25 py-20 px-16 cursor-pointer hover:border-2 border-blue-500"
                onClick={() => setBackImage(forestStay)}
              >
                Forest stay
              </div>
              <div
                className="bg-white bg-opacity-25 py-20 px-16 cursor-pointer hover:border-2 border-blue-500"
                onClick={() => setBackImage(sunset)}
              >
                Sunset
              </div>
              <div
                className="py-20 px-16 cursor-pointer hover:border-2 border-blue-500"
                onClick={() => setBackImage(tree)}
              >
                Tree House
              </div>
              <div
                className="py-20 px-16 cursor-pointer hover:border-2 border-blue-500"
                onClick={() => setBackImage(forestTrack)}
              >
                Forest Track
              </div>
              <div
                className="bg-white bg-opacity-25 py-20 px-16 cursor-pointer hover:border-2 border-blue-500"
                onClick={() => setBackImage(tracking)}
              >
                Tracking
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
