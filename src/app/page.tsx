import About from "@/components/About";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Whyus from "@/components/Whyus";
import Clients from "@/components/clients";
import Pagea from "@/components/Pagea";
import Page from "@/components/Page";
import React from "react";


const Home = () => {
  return (
    <>
      <Page />
      <Pagea/>
      <About />
      
      <Whyus />
      {/* <Clients /> */}
      <Icon />
    </>
  );
};

export default Home;
