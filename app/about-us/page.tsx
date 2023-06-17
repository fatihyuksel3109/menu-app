import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-1200 mx-auto items-center text-center p-4 mt-4 mb-20">
      <div className="max-w-1100 px-10">
        <h1 className="text-xl sm:text-2xl uppercase mb-6 font-bold">
          About Us
        </h1>
        <p className="mb-4">
          The Foodies Delight is a restaurant that celebrates the worlds
          culinary diversity. We offer a wide variety of dishes from different
          cultures, all made with fresh, high-quality ingredients. Whether
          you are in the mood for Italian pasta, Mexican tacos, or Chinese
          dumplings, we have something for everyone.
        </p>
        <p className="mb-4">
          We believe that food is more than just sustenance. Its a way to
          connect with others, to share cultures, and to experience new things.
          Thats why we take great care in preparing our food, and we are always
          looking for new and exciting ways to bring the world to your table.
          Come join us for a culinary adventure at The Foodies Delight. We
          promise you wont be disappointed. This is just a starting point, of
          course. You can customize the motto and about us page content to fit
          your own restaurants personality and style. But I hope this gives you
          some ideas to get started.
        </p>
      </div>
      <div className="bg-slate-900 mt-4 shadow-md mx-auto shadow-slate-500 p-4 w-max-1100">
        <h2 className="text-center mb-4 text-xl font-semibold">Contact Info</h2>
        <div className="flex flex-col sm:flex-row">
          <p className="text-start pl-6 mb-2">* Phone: (123) 456-7890</p>{" "}
          <p className="text-start pl-6 mb-2">
            * Email: info@thefoodiedelight.com{" "}
          </p>
          <p className="text-start pl-6 mb-2">
            * Website: www.thefoodiedelight.com
          </p>
        </div>
      </div>
      <div className="bg-slate-900 mt-4 shadow-md shadow-slate-500 p-4 w-max-1100">
        <h2 className="text-center mb-4 text-xl font-semibold">Address:</h2>
        <div className="flex flex-col sm:flex-row">
          <p className="text-start pl-6 mb-2">* 123 Main Street </p>
          <p className="text-start pl-6 mb-2">* Anytown, CA 12345</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
