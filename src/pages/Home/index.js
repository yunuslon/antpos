import React from "react";
import { Logo } from "../../assets/img";

export default function Home() {
  return (
    <div className="bg-indigo-700 h-screen flex justify-center flex-col items-center">
      <img src={Logo} className="w-1/2 animate-spin" alt="logo" />
      <p className="text-3xl text-white font-mono">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="text-2xl mt-4 text-white underline font-mono"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
