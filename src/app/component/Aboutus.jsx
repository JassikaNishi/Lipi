import React from "react";
import Image from "next/image";
// import img from "@/app/assets/img8.jpg";

const Whyus = () => {
  return (
    <div className="p-11">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#E48EDB] via-[#dcbad8] to-white inline-block text-transparent bg-clip-text">
          Why Us
        </h1>
      </div>
      <div className="flex">
        <div className=" p-4 px-40 text-left text-white text-xl">
          <p className="mt-4 pt-14">
            A shortage of educational material in regional languages is
            observed, limiting ease of educational understanding due to
            linguistic background. Come up with a model to drive down education
            in regional languages in order to preserve them while also making
            sure to promote english as a language for globalisation.
          </p>
          <br />
          <p>
            The initiative involves translating educational content for Indian
            high school students into lesser-spoken regional languages like
            Kashmiri, Dogri, Konkani, Nepali, Meitei, and Bodo. This effort aims
            to make learning materials accessible to students who speak these
            languages, ensuring that education is inclusive and available to
            all, regardless of linguistic background.
          </p>
          <br />
          <p>
            We also make sure to promote english with the help of an ai assisted
            english course to make sure the regional population can make use pf
            the education and be a part of globalisation as well.
          </p>
        </div>

        {/* <div className="w-1/3 relative h-[70vh] ">
          <Image
            src={img}
            alt="mother with child"
            layout="fill"
            //   objectFit="cover"
            className="absolute inset-0"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Whyus;
