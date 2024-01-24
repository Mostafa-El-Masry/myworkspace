"use client";
import Image from "next/image";
import Link from "next/link";
import Clock from "./clock";
import LOG from "./LOG";

export default function Home() {
  return (
    <main className="">
      
      <div className="flex justify-center h-screen items-center">
        <div className="text-sky-600 mr-20 px-4 text-3xl h-8 -mt-70">
          <Clock />
        </div>
        <div className="text-sky-600 ml-20 text-3xl h-8 -mt-70">
          My perosnal Dashboard
        </div>
      </div>
      <div className="text-gray-600 flex flex-col items-end">
        <Link href="./users">Users</Link>
        <LOG />
      </div>
    </main>
  );
}
