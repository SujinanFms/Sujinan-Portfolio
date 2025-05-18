// src/components/navBar/components/Content/home.tsx
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Home = () => {
  const t = useTranslations(); // เรียกใช้งาน i18n
  const tProfile = useTranslations("Profile");

  console.log("t()", t("Profile.name"));

  return (
    <div id="home">
      <h2 className="text-[#0084d1] text-5xl font-bold">{tProfile("name")}</h2>{" "}
      <Row>
        <Col sm={24} md={14}>
          <div className="text-5xl font-bold">I’m {t("Profile.name")}</div>
          <div className="text-[#0084d1] text-5xl font-bold">
            {t("Profile.position")}
          </div>

          {/* <div className="mt-4 text-base text-gray-700 leading-relaxed">
            {t("Profile.introduction")}
          </div> */}
        </Col>
        <Col sm={24} md={10}>
          <Image
            src="/images/suji.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
            fill
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
