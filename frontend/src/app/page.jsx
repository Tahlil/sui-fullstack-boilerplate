"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.svg" alt="" fill/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            THE <span className="text-sky-500">SUI</span> Fullstack boilerplate  
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          The <span className="text-sky-500">SUI</span> move boilerplate coded using  Next.js, Tailwind CSS, and SUI TypeScript SDK serves as a robust foundation for building full-stack decentralized applications (DApps) on the SUI blockchain. It streamlines the development process, allowing developers to focus on implementing the unique features of their DApp.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
        
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
