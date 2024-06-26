"use client";

import React, { ReactHTML, ReactHTMLElement, ReactNode } from "react";

interface InputData{
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
  icon?: React.ReactNode;
  clicked?: React.MouseEventHandler<HTMLDivElement>;
}

function InputFields(prop:InputData) {
  return (
    <div className="grid gap-2">
      <label htmlFor={prop.id} className="text-white">
        {prop.label}
      </label>
      <div className="flex items-center relative">
        <input
          type={prop.type}
          placeholder={prop.placeholder}
          id={prop.id}
          name={prop.name}
          className="px-4 py-3 w-72 border-0 bg-transparent border-b outline-none active:bg-transparent"
        />
        <div className="absolute right-5 cursor-pointer" onClick={prop.clicked}>
          {prop.icon}
        </div>
      </div>
    </div>
  );
}

export default InputFields;
