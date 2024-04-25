"use client";
import React, { useEffect, useRef, useState } from "react";
import background from "../../../public/backgrounds/man.jpg";
import Image from "next/image";
import Button from "../components/Button";
import InputFields from "../components/InputFields";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import handleRequests from "../utils/apiRoutes";

function SignIn() {
  const formInputs = useRef();
  const [data, setData] = useState();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(()=>{
    handleRequests(data);
    console.log(data);
  },[data])

  const handleForm = (e) => {
    e.preventDefault();
    const name = formInputs.current.username.value;
    const email = formInputs.current.email.value;
    const password = formInputs.current.password.value;
    setData({ name, email, password });
  };

  return (
    <div className="h-screen ">
      <Image
        className="h-full w-full blur-sm relative"
        src={background}
        alt="account"
      />
      <div className="grid grid-cols-2 absolute top-52 mx-28 shadow-slate-900 shadow-2xl rounded-md ">
        <div className="relative">
          <Image className="" src={background} alt="account" />
          <div className="absolute flex flex-col top-40 text-white text-5xl font-semibold px-14 gap-3">
            <h1 className="">ENJOY THE</h1>
            <h1 className="">WORLD</h1>
          </div>
          <div className="absolute flex left-40 top-96 px-14 pt-4">
            <Button text="Sign In" />
          </div>
        </div>
        <div className="flex flex-col items-center h-full w-full justify-between bg-green-950 opacity-85 py-5 text-white ">
          <h1 className="font-bold text-4xl">Create An Account</h1>
          <form
            ref={formInputs}
            onSubmit={handleForm}
            action=""
            className="flex flex-col gap-5 items-center justify-center"
          >
            <InputFields
              type="text"
              placeholder="Enter your username"
              id="username"
              label="UserName"
              name="username"
            />
            <InputFields
              type="email"
              placeholder="Enter your email"
              id="email"
              label="Email"
              name="email"
            />
            <InputFields
              type={!showPassword ? "password" : "text"}
              placeholder="Enter your password"
              id="password"
              label="Password"
              name="password"
              icon={showPassword ? <FaEye /> : <GoEyeClosed />}
              clicked={() => setShowPassword(!showPassword)}
            />
            <Button text="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
