"use client";
import React from "react";
import { motion } from "framer-motion";

// components
import Container from "./Container";

// motions
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    className="px-6 sm:px-16 relative"
    variants={navVariants}
    initial="show"
    whileInView="animate"
    viewport={{once: true}}
  >
    <div className="absolute inset-0 w-[50%] gradient-01" />
    <div className="pt-8 flex justify-between items-center">
      <img src="/search.svg" alt="search" />
      <h1 className="text-white font-extrabold leading-7 text-3xl">METAVERSUS</h1>
      <img src="/LogoVector.svg" alt="..." />
    </div>
  </motion.nav>
);

export default Navbar;
