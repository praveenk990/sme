import About from "@/components/About";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Whyus from "@/components/Whyus";
import Clients from "@/components/clients";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Whyus />
      {/* <Clients /> */}
      <Icon />
    </>
  );
};

export default Home;
