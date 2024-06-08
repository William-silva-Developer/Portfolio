"use client";
import React from "react";

import { About } from "./_components/About";
import { HardSkills } from "./_components/Hard-Skills";

import { Hero } from "./_components/Hero";
import Projects from "./_components/Projects";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/header";

function Home() {
  return (
    <>
      <div className="mb-24">
        <Header />
      </div>
      <Hero />
      <About />
      <HardSkills />
    </>
  );
}

export default Home;
