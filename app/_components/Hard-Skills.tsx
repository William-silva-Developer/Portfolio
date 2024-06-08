import React from "react";
import { CustomCardSkills } from "./Custom-Card-Skills";

function HardSkills() {
  const ArraySkills = [
    {
      id: "1",
      alt: "Logo do Javascript",
      url: require("@/public/ic_js.png"),
      title: "Javascript",
    },
    {
      id: "2",
      alt: "Logo do Typescript",
      url: require("@/public/typescript.png"),
      title: "Typescript",
    },
    {
      id: "3",
      alt: "Logo do Nodejs",
      url: require("@/public/nodejs.png"),
      title: "Nodejs",
    },
    {
      id: "4",
      alt: "Logo do React",
      url: require("@/public/ic_react.png"),
      title: "React",
    },
    {
      id: "5",
      alt: "Logo do React Native",
      url: require("@/public/ic_react.png"),
      title: "React Native",
    },
    {
      id: "6",
      alt: "Logo do Nextjs",
      url: require("@/public/nextjs2.png"),
      title: "Nextjs",
    },
    {
      id: "7",
      alt: "Logo do Redux",
      url: require("@/public/redux.png"),
      title: "Redux",
    },
    {
      id: "8",
      alt: "Logo do Tailwind css",
      url: require("@/public/tailwindcss.png"),
      title: "Tailwind css",
    },
    {
      id: "9",
      alt: "Logo do Git",
      url: require("@/public/git.png"),
      title: "Git",
    },
    {
      id: "10",
      alt: "Logo do HTML5",
      url: require("@/public/html5.png"),
      title: "HTML5",
    },
  ];

  return (
    <section className="mt-32 w-full  pt-4">
      <div className="fle-row flex items-center justify-center ">
        <h2 className="mb-3 font-serif text-5xl text-bluish-gray md:text-6xl">
          Habilidades
        </h2>
      </div>
      <div className="mt-12  grid place-items-center justify-center gap-4 sm:mx-1 sm:grid-cols-2 sm:justify-between  md:grid-cols-2 lg:mx-1.5 lg:grid-cols-3 xl:grid-cols-4">
        {ArraySkills.map((item) => (
          <CustomCardSkills
            alt={item.alt}
            title={item.title}
            url={item.url}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export { HardSkills };
