"use client";
import React from "react";
import {signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')} type="button" className="btn btn-primary">
      Sign In</button>
    </>
  )  
}
