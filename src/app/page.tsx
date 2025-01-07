import About from "@/components/About";
import Icon from "@/components/Icon";
import Whyus from "@/components/Whyus";
import Clients from "@/components/clients";
import Pagea from "@/components/Pagea";
import Page from "@/components/Page";
import React from "react";
import Project from "@/components/Project";
import Stats from "@/components/Stats";




const Home = () => {
  return (
    <>
      <Page />
      <Pagea/>
      <About />
      
     <Project />
     <Stats/>
      <Whyus />
      {/* <Clients /> */}
      <Icon />
    </>
  );
};

export default Home;
