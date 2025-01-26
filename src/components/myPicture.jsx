import React from "react";

const MyPicture = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-full overflow-hidden w-48 h-48 shadow-lg border-4 border-gray-300">
        <img
          src="/path-to-your-image.jpg" 
          alt="Nesrine BOUZID"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MyPicture;
