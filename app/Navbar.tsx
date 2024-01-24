import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-white text-bold text-2xl bg-cyan-700 w-full h-20 p-5">
      <nav>
        <ul>
          <li>
            <Link href="https://note-book-nine.vercel.app/">NOTEBOOK</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
