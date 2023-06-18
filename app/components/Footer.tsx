import React from "react";
import { Envelope, Facebook, Twitter, Instagram } from "../icons";

type FooterProps = {
  followUsLinks: string[];
};

export default function Footer({ followUsLinks }: FooterProps) {
  return (
    <footer className="flex flex-col sm:flex-row w-full mt-10 py-2 border-t-2 border-slate-600 bg-black shadow-md justify-around fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <h6 className="text-center font-semibold">Follow Us:</h6>
        <a href={followUsLinks[0]} target="_blank" aria-label="E-mail">
          <Envelope className="icons_followUs" />
        </a>
        <a href={followUsLinks[1]} target="_blank" aria-label="Twitter">
          <Twitter className="icons_followUs" />
        </a>
        <a href={followUsLinks[2]} target="_blank" aria-label="Facebook">
          <Facebook className="icons_followUs" />
        </a>
        <a href={followUsLinks[3]} target="_blank" aria-label="Instagram">
          <Instagram className="icons_followUs" />
        </a>
      </div>
      <div className="flex justify-center sm:py-4 px-2">
        <p className="text-sm">
          © 2023 | The Foodie's Delight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
