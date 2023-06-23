"use client";
import Image from "next/image";
import Carousel from "./components/Carousel";
import { images } from "./data/data";
import Menu from "./menu/page";
import { useEffect } from "react";
import { metadata } from "./layout";

export default function Home() {

  useEffect(() => {
    document.title = `${metadata.title}`
  }, [])

  return (
    <div className="mainPage mb-100">
      <div className="flex flex-col sm:flex-row justify-center text-xl sm:text-2xl p-4 mt-4">
        <h1 className="text-center font-bold">The Foodie's Delight: </h1>
        <h1 className="text-center ml-2 font-bold">Where Food is Art!</h1>
      </div>
      <div className="imageContainer">
        <div className="lg:w-3/4 mx-auto my-2">
          <Carousel loop>
            {images.map((src, i) => {
              return (
                // 👇 style each individual slide.
                // relative - needed since we use the fill prop from next/image component
                // h-64 - arbitrary height
                // flex[0_0_100%]
                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                <div className="relative h-96 flex-[0_0_100%]" key={i}>
                  {/* use object-cover + fill since we don't know the height and width of the parent */}
                  <Image src={src} fill className="object-cover" alt="alt" />
                </div>
              );
            })}
          </Carousel>
          <Menu />
        </div>
      </div>
    </div>
  );
}
