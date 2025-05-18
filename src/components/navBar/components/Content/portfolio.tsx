"use client";

import React from "react";
import { Row, Col, Card } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const { Meta } = Card;

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  const projects = [
    {
      title: t("projects.corpWebsite.title"),
      description: t("projects.corpWebsite.description"),
      image: null, // ยังไม่มีภาพ
    },
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      image: null,
    },
    {
      title: t("projects.qcTool.title"),
      description: t("projects.qcTool.description"),
      image: null,
    },
    {
      title: t("projects.business.title"),
      description: t("projects.business.description"),
      image: null,
    },
  ];

  return (
    <div id="portfolio" style={{ marginTop: 48 }}>
      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              hoverable
              className="rounded-lg shadow-md"
              cover={
                project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f5f5f5",
                    }}
                  >
                    <PictureOutlined
                      style={{ fontSize: 48, color: "#d9d9d9" }}
                    />
                  </div>
                )
              }
            >
              <Meta
                title={
                  <span className="font-medium text-base text-[#2B2B2B]">
                    {project.title}
                  </span>
                }
                description={
                  <span className="text-sm text-[#767676] leading-6">
                    {project.description}
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
