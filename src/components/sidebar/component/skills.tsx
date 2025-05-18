"use client";
import React from "react";
import { Divider, Space, Tag, Typography } from "antd";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations();

  const technicalSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Context API",
    "Redux",
    "Zustand",
    "Tailwind CSS",
    "Ant Design",
    "REST API",
    "Git",
    "Figma",
  ];

  const softSkills = [
    t("Skills.teamwork"),
    t("Skills.communication"),
    t("Skills.problemSolving"),
    t("Skills.fastLearning"),
  ];

  return (
    <div style={{ width: "100%" }}>
      <Typography.Title level={4}>{t("Section.skills")}</Typography.Title>

      <Typography.Text strong>{t("Skills.technical")}</Typography.Text>
      <Divider style={{ margin: "8px 0" }} />
      <Space wrap>
        {technicalSkills.map((skill) => (
          <Tag key={skill} color="blue">
            {skill}
          </Tag>
        ))}
      </Space>

      <div style={{ marginTop: 20 }}>
        <Typography.Text strong>{t("Skills.soft")}</Typography.Text>
        <Divider style={{ margin: "8px 0" }} />
        <Space wrap>
          {softSkills.map((skill) => (
            <Tag key={skill} color="green">
              {skill}
            </Tag>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Skills;
