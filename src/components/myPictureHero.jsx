import React from "react";
import meImage from "../assets/company/me.jpg";

const MyPictureHero = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[400px] h-[450px] overflow-hidden shadow-lg border-4 border-gray-300">
        <img
          src={meImage}
          alt="Nesrine BOUZID"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MyPictureHero;
