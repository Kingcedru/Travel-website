import React from "react";
import background from "../../../../public/backgrounds/man.jpg";
import Image from "next/image";

function Account() {
  return (
    <div className="h-screen ">
      <Image
        className="h-full w-full blur-sm relative"
        src={background}
        alt="account"
      />
      <div className="grid grid-cols-2 absolute top-52 mx-52 shadow-slate-800 shadow-2xl rounded-md bg-blue-950">
        <div className="">
          <Image className="rounded-e-md" src={background} alt="account" />
        </div>
        <div className="flex justify-center">
          <h1>Create An Account</h1>
        </div>
      </div>
    </div>
  );
}

export default Account;
