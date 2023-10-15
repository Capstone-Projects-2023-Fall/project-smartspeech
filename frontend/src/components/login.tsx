"use client";
import React from "react";
import {signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      Not Signed In. <br />
      <button onClick={() => signIn()} type="button" className="btn btn-primary">
      Sign In</button>
    </>
  )  
}
