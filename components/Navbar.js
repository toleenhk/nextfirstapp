import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="text-orange-800 font-bold hover:underline font-orbitrontext"
          >
            Indie Gamer
          </Link>
        </li>
        <li className=" ml-auto">
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            prefetch={false}
            className="text-orange-800 hover:underline"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
