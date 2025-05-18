"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Card, Divider, Row, Col, ConfigProvider } from "antd";
import {
  CodeOutlined,
  SketchOutlined,
  TabletOutlined,
  ApiOutlined,
} from "@ant-design/icons";

const serviceList = [
  {
    key: "webDev",
    icon: (
      <CodeOutlined style={{ fontSize: 32, color: "var(--color-second)" }} />
    ),
  },
  {
    key: "uiuxDesign",
    icon: (
      <SketchOutlined style={{ fontSize: 32, color: "var(--color-second)" }} />
    ),
  },
  {
    key: "responsiveDesign",
    icon: (
      <TabletOutlined style={{ fontSize: 32, color: "var(--color-second)" }} />
    ),
  },
  {
    key: "apiIntegration",
    icon: (
      <ApiOutlined style={{ fontSize: 32, color: "var(--color-second)" }} />
    ),
  },
];

const Services = () => {
  const t = useTranslations("Services");

  return (
    <div id="services">
      <div className="text-[#2b2b2b] font-['Inter'] text-[2rem] font-bold leading-[123.6%] capitalize">
        {t("title")}
      </div>

      <Divider orientation="left">{t("subtitle")}</Divider>

      <Row gutter={[16, 16]}>
        {serviceList.map((service) => (
          <Col key={service.key} xs={24} sm={12} md={8} lg={6}>
            <ConfigProvider
              theme={{
                token: {
                  boxShadowTertiary: "0 4px 20px rgba(24, 144, 255, 0.6)", // กำหนดเงาสีน้ำเงินแบบที่ต้องการ
                },
              }}
            >
              <Card
                className="custom-card"
                hoverable
                style={{ height: "100%" }}
                styles={{
                  body: {
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div style={{ marginBottom: 16, textAlign: "center" }}>
                  {service.icon}
                </div>
                <h3 style={{ marginBottom: 8, textAlign: "center" }}>
                  {t(`${service.key}.title`)}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#666",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  {t(`${service.key}.description`)}
                </p>
              </Card>
            </ConfigProvider>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
