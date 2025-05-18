// components/navBar/components/content.tsx
import { Flex } from "antd";
import React from "react";
import Home from "./Content/home";
import Skills from "./Content/skills";
import Services from "./Content/services";
import Education from "./Content/education";
import Work from "./Content/work";
import Portfolio from "./Content/portfolio";
import Recommendations from "./Content/recommendations";
import Contact from "./Content/contact";

const ContentPage = () => {
  return (
    <Flex vertical gap={12}>
      <Home />
      <Skills />
      <Services />
      <Education />
      <Work />
      <Portfolio />
      <Recommendations />
      <Contact />
    </Flex>
  );
};

export default ContentPage;
