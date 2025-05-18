// src/components/navBar/components/navMenu.tsx
import { Anchor } from "antd";
import React, { useEffect, useState } from "react";

const NavMenu = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // หาตัว scroll container ที่เป็น Content
    const contentContainer = document.querySelector(".ant-layout-content");
    setContainer(contentContainer as HTMLElement);
  }, []);

  return (
    <Anchor
      direction="horizontal"
      affix={false}
      getContainer={() => container || window}
      style={{ display: "flex", gap: "16px" }}
      offsetTop={64} // ความสูงของ header
      items={[
        { key: "home", href: "#home", title: "Home" },
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
