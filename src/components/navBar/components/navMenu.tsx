// src/components/navBar/components/navMenu.tsx
import { Anchor } from "antd";
import React from "react";

const NavMenu = () => {
  return (
    <Anchor
      direction="horizontal"
      affix={false}
      style={{ display: "flex", gap: "16px" }}
      offsetTop={64} // ความสูงของ header
      items={[
        { key: "home", href: "#home", title: "Home" },
        { key: "intro", href: "#intro", title: "แนะนำตัว" },
        { key: "skills", href: "#skills", title: "Skills" },
        { key: "services", href: "#services", title: "Services" },
        { key: "education", href: "#education", title: "Education" },
        { key: "work", href: "#work", title: "Work" },
        { key: "portfolio", href: "#portfolio", title: "Portfolio" },
        {
          key: "recommendations",
          href: "#recommendations",
          title: "Recommendations",
        },
        { key: "contact", href: "#contact", title: "Contact" },
      ]}
    />
  );
};

export default NavMenu;
