import React from "react";
import Navbar from "./component/Navbar";
import Aboutus from "./component/Aboutus";
// import Services from "./component/Services";
import Contact from "./component/Contact";
// import { motion } from "framer-motion";
import HeroSectiion from "./component/HeroSection";
// import Whyus from "./component/Whyus";

const Page = () => {
  return (
    <div className="bg-black flex flex-col">
      <Navbar />
        <HeroSectiion />
        <Aboutus />
        <Contact />

      <section className="text-center" id="home p-8">
      </section>
      {/* <section className="text-left p-10" id="about">
      </section>
      <section id="features">
        <Services />
      </section>
      <section id="whyus">
        <Whyus />
      </section>
      <section id="contact">
      </section> */}
    </div>
  );
};
export default Page;
