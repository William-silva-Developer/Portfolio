"use client";
import React from "react";

import { About } from "./_components/About";
import { HardSkills } from "./_components/Hard-Skills";

import { Hero } from "./_components/Hero";
import Projects from "./_components/Projects";
import { Footer } from "./_components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <HardSkills />
      <Projects />
    </>
  );
}

export default Home;
