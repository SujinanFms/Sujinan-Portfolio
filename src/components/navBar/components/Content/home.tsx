// src/components/navBar/components/Content/home.tsx
import { Button, Col, Flex, Row } from "antd";
import { useLocale } from "context/LocaleContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

const Home = () => {
  const t = useTranslations();
  const { locale } = useLocale();

  return (
    <div id="home">
      <Row gutter={[24, 24]} align="top">
        <Col xs={24} md={14}>
          <div>
            <Flex vertical gap={18}>
              <Flex vertical gap={10}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {locale === "en" && "I’m"} {t("Profile.name")}
                </div>
                <div className="text-[#0084d1] text-2xl sm:text-4xl md:text-5xl font-bold">
                  {t("Profile.position")}
                </div>
              </Flex>

              <div className="text-base text-[#767676]">
                {locale === "en" && "I’m"} {t("Profile.introduction")}
              </div>

              <div>
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  size="large"
                >
                  {t("Profile.hiring")}
                </Button>
              </div>
            </Flex>
          </div>
        </Col>

        <Col xs={24} md={10}>
          <Flex align="center" justify="center" style={{ height: "80%" }}>
            <Image
              src="/images/sujinan.jpeg"
              alt="Profile"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
            {/* <div
              style={{
                width: "1000px",
                height: "300px", // ✅ อัตราส่วนเท่ากัน
                overflow: "hidden", // ป้องกันล้น
                borderRadius: "8%", // วงกลม
              }}
            >
              <Image
                src="/images/sujinan.jpeg"
                alt="Profile"
                width={300}
                height={300}
                style={{
                  objectFit: "cover",
                  objectPosition: "top", // ✅ โฟกัสที่ใบหน้า
                  width: "100%",
                  height: "100%",
                }}
              />
            </div> */}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
