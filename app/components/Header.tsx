import Link from "next/link";
import { pages } from "../data/data";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="logo sm:ml-20">
          <Image
            src="/images/nav-logo.png"
            width={150}
            height={80}
            alt="Restaurant logo"
          />
        </Link>
        <nav className="nav items-center justify-center">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.link}
              className="nav-link p-1 sm:p-2 border-2 rounded-xl text-md mx-1 sm:text-xl sm:mx-6"
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
