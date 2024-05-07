"use client";
import { motion } from "framer-motion";

import { useRef } from "react";


const AssetPage = () => {
  const containerRef = useRef();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
       {/* CONTAINER */}
       <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
         <div className="w-screen h-[calc(100vh-49rem)] flex items-center justify-center text-8xl text-center">
          My Assets
        </div>
      </div>

    </motion.div>
  );
};

export default AssetPage;
