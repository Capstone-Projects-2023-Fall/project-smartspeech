"use client";
import React from "react";
import {signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      
      <button className="bg-gray-300 p-2 rounded hover:shadow-xl" onClick={() => signIn()}>Sign In</button>
      <br /> Not Signed In Yet. <br />
    </div>
  )  
}
