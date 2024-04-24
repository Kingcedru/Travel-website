import React from "react";
import background from "../../../public/backgrounds/man.jpg";
import Image from "next/image";
import Button from "../components/Button";
import InputFields from "../components/InputFields";

function SignIn() {
  return (
    <div className="h-screen ">
      <Image
        className="h-full w-full blur-sm relative"
        src={background}
        alt="account"
      />
      <div className="grid grid-cols-2 absolute top-52 mx-28 shadow-slate-900 shadow-2xl rounded-md ">
        <div className="">
          <Image className="" src={background} alt="account" />
          <h1 className="absolute top-40 text-white">ENJOY THE WORLD</h1>
        </div>
        <div className="flex flex-col items-center h-full w-full justify-between bg-green-950 opacity-85 py-5 text-white ">
          <h1 className="font-bold text-4xl">Create An Account</h1>
          <form
            action=""
            className="flex flex-col gap-5 items-center justify-center"
          >
            <InputFields
              type="text"
              placeholder="Enter your username"
              id="username"
              label="UserName"
            />
            <InputFields
              type="email"
              placeholder="Enter your email"
              id="email"
              label="Email"
            />
            <InputFields
              type="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
            />
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
