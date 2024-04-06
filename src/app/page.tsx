import Image from "next/image";

export default function Home() {
  return (
    <main>
        <img className="h-screen relative w-full" src= "../../forest-stay.png" alt="" />
        <section className="z-0 top-0 absolute text-white">
          <div className="left h-screen flex flex-col justify-between bg-black bg-opacity-30 px-2">
            <div className="flex flex-col items-center gap-8 pt-8">
              <img className="w-3/6" src="../../social/account_circle.png" alt="" />
              <img className="w-3/6" src="../../social/search.png" alt="" />
            </div>
            <h1 className="-rotate-90 text-xl font-thin">traveler</h1>
            <div className="flex flex-col items-center gap-8 pb-8">
              <img className="w-2/6" src="../../social/facebook.png" alt="" />
              <img className="w-2/6" src="../../social/instagram.png" alt="" />
              <img className="w-2/6" src="../../social/linkedin.png" alt="" />
            </div>
          </div>
        </section>
    </main>
  );
}
