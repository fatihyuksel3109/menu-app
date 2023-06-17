import React from "react";
import { Envelope, Facebook, Twitter, Instagram } from "../icons";

type FooterProps = {
  followUsLinks: string[];
};

export default function Footer({ followUsLinks }: FooterProps) {
  return (
    <footer className="w-full mt-20 border-2 bg-black shadow-sm fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <h4 className="text-center font-semibold">Contact Us : </h4>
        <a href={followUsLinks[0]} target="_blank" aria-label="E-mail">
          <Envelope className="icons_followUs" />
        </a>
        <a href={followUsLinks[1]} target="_blank" aria-label="Twitter">
          <Twitter className="icons_followUs" />
        </a>
        <a href={followUsLinks[2]} target="_blank" aria-label="GitHub">
          <Facebook className="icons_followUs" />
        </a>
        <a href={followUsLinks[3]} target="_blank" aria-label="LinkedIn">
          <Instagram className="icons_followUs" />
        </a>
      </div>
    </footer>
  );
}
