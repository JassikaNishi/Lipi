import React from "react";
import Image from "next/image";
import img from "@/app/assets/img1.jpg";

const HeroSection = () => {
  return (
    //    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('src/app/assets/img1.jpg')" }}>
    //      {/* Content of the Hero Section */}
    //    </div>
    
    <div className="w-screen h-screen ">
      <Image
        src={img} // Replace with your image path
        alt="Background Image"
        // layout="fill"
        // objectFit="cover"
      />
      {/* Your content here */}
    </div>
  );
};

export default HeroSection;
