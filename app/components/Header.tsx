import Link from "next/link";
import { pages } from "../data/data";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="logo ml-2 sm:ml-20">
          <Image
            src="/images/logo.png"
            width={120}
            height={120}
            alt="Restaurant logo"
          />
        </Link>
        <nav className="nav">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.link}
              className="nav-link p-1 sm:p-2 border-2 rounded-lg text-md mx-1 sm:text-xl sm:mx-6"
            >
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
