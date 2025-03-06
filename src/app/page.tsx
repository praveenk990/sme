import About from "@/components/About";
import Icon from "@/components/Icon";
import Whyus from "@/components/Whyus";
import Clients from "@/components/clients";
import Pagea from "@/components/Pagea";
import Page from "@/components/Page";
import React from "react";
import Project from "@/components/Project";
import Stats from "@/components/Stats";
import { WavyBackgroundDemo } from "@/components/wave";
import { AnimatedTestimonialsDemo } from "@/components/emp";

const Home = () => {
  return (
    <>
      <WavyBackgroundDemo />
      <Pagea />
      <About />

      <Project />
      <Stats />
      <AnimatedTestimonialsDemo />
      <Whyus />
      {/* <Clients /> */}
      <Icon />
    </>
  );
};

export default Home;
