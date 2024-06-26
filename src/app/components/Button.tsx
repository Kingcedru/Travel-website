'use client'
import React from "react";

interface ButtonProps{
  text: string;
}

function Button(prop:ButtonProps) {
  return (
    <div>
      <button
        type="submit"
        className="rounded-md text-white border-white border px-7 py-2 w-72"
      >
        {prop.text}
      </button>
    </div>
  );
}

export default Button;
