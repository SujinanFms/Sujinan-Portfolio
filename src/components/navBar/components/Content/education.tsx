import React from "react";
import { Timeline, Card, Typography } from "antd";
import { LaptopOutlined, ReadOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const { Title, Text } = Typography;

const Education = () => {
  const t = useTranslations("Education");

  const educationList = [
    {
      degree: t("bachelor.degree"),
      institution: t("bachelor.institution"),
      year: t("bachelor.year"),
      gpa: t("bachelor.gpa"),
      icon: <LaptopOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      degree: t("highschool.degree"),
      institution: t("highschool.institution"),
      year: t("highschool.year"),
      gpa: t("highschool.gpa"),
      icon: <ReadOutlined style={{ fontSize: 20, color: "#13c2c2" }} />,
    },
  ];
  return (
    <div id="education">
      {/* <Title level={2}>Education</Title> */}
      <div className="text-[#2b2b2b] font-['Inter'] text-[2rem] font-bold leading-[123.6%] capitalize">
        {t("title")}
      </div>

      <Timeline
        mode="left"
        style={{ marginTop: 16 }}
        items={educationList.map((edu) => ({
          dot: edu.icon,
          children: (
            <Card
              hoverable
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: 12,
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              }}
              styles={{
                body: {
                  padding: 16,
                },
              }}
            >
              <Title level={4} style={{ marginBottom: 4 }}>
                {edu.degree}
              </Title>
              <Text strong>{edu.institution}</Text>
              <br />
              <Text type="secondary">{edu.year}</Text>
              <br />
              <Text italic>{edu.gpa}</Text>
            </Card>
          ),
        }))}
      />
    </div>
  );
};

export default Education;
