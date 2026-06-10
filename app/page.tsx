"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Differentials } from "@/components/differentials";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";

import { Footer } from "@/components/footer";
import { Container } from "./_components/Container";
import { Navbar } from "./_components/NavBar";

function Home() {
  return (
    <>
      <Container>
        {/* <div className="relative min-h-screen overflow-x-hidden"> */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Differentials />
          <Contact />
        </main>
        <Footer />
      </Container>
      {/* </div> */}
    </>
  );
}

export default Home;
