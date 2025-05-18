// components/navBar/components/content.tsx
import { Flex, theme } from "antd";
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
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const contentStyle = {
    padding: 24,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  return (
    <Flex vertical gap={12}>
      <div style={contentStyle}>
        <Home />
      </div>

      <div style={contentStyle}>
        <Skills />
      </div>

      <div style={contentStyle}>
        <Services />
      </div>

      <div style={contentStyle}>
        <Education />
      </div>

      <div style={contentStyle}>
        <Work />
      </div>

      <div style={contentStyle}>
        <Portfolio />
      </div>

      <div style={contentStyle}>
        <Recommendations />
      </div>

      <div style={contentStyle}>
        <Contact />
      </div>
    </Flex>
  );
};

export default ContentPage;
