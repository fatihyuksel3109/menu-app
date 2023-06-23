"use client"
import React, { useEffect } from "react";
import { metadata } from "../layout";

const AboutUs = () => {
  useEffect(() => {
    document.title = `About Us | ${metadata.title}`;
  }, []);
  return (
    <div className="w-11/12 sm:w-1/2 md:w-2/5 bg-slate-300 shadow-lg shadow-slate-500 rounded-sm items-center mx-auto text-center p-4 my-10">
      <div className="max-w-1100 text-black px-10">
        <h1 className="text-xl sm:text-2xl uppercase mb-6 font-bold">
          About Us
        </h1>
        <p className="mb-4">
          The Foodie's Delight is a restaurant that celebrates the world's
          culinary diversity. We offer a wide variety of dishes from different
          cultures, all made with fresh, high-quality ingredients. Whether
          you're in the mood for Italian pasta, Mexican tacos, or Chinese
          dumplings, we have something for everyone.
        </p>
        <p className="mb-4">
          We believe that food is more than just sustenance. It's a way to
          connect with others, to share cultures, and to experience new things.
          That's why we take great care in preparing our food, and we're always
          looking for new and exciting ways to bring the world to your table.
          Come join us for a culinary adventure at The Foodie's Delight. We
          promise you won't be disappointed. This is just a starting point, of
          course. You can customize the motto and about us page content to fit
          your own restaurant's personality and style. But I hope this gives you
          some ideas to get started.
        </p>
      </div>
      <div className="bg-slate-900 mt-4 shadow-md mx-auto shadow-slate-500 p-4">
        <h2 className="text-center mb-4 text-xl font-semibold">Contact Info</h2>
        <div className="flex flex-col">
          <p className="text-start pl-6 mb-2">* Phone: (123) 456-7890</p>
          <p className="text-start pl-6 mb-2">
            * Email: info@thefoodiedelight.com
          </p>
          <p className="text-start pl-6 mb-2">
            * Website: www.thefoodiedelight.com
          </p>
        </div>
      </div>
      <div className="bg-slate-900 mt-4 shadow-md shadow-slate-500 p-4 w-max-1100">
        <h2 className="text-center mb-4 text-xl font-semibold">Address:</h2>
        <div className="flex flex-col ">
          <p className="text-start pl-6 mb-2">* 123 Main Street </p>
          <p className="text-start pl-6 mb-2">* Anytown, CA 12345</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
