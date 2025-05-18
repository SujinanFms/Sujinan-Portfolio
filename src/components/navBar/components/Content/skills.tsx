"use client";

import React from "react";
import { Card, Tag, Progress, Divider } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useTranslations } from "next-intl";

type SkillLevel = "Basic" | "Intermediate" | "Advanced";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillGroup = {
  groupKey: string;
  skills: Skill[];
};

const levelColorMap: Record<SkillLevel, string> = {
  Basic: "default",
  Intermediate: "orange",
  Advanced: "green",
};

const levelPercentMap: Record<SkillLevel, number> = {
  Basic: 40,
  Intermediate: 70,
  Advanced: 100,
};

const skillGroups: SkillGroup[] = [
  {
    groupKey: "technical", // key ที่ตรงกับ i18n
    skills: [
      { name: "React", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    groupKey: "soft",
    skills: [
      { name: "teamwork", level: "Advanced" },
      { name: "communication", level: "Intermediate" },
      { name: "problemSolving", level: "Intermediate" },
      { name: "fastLearning", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  const t = useTranslations();
  const tSkill = useTranslations("Skills");
  const tLang = useTranslations("Language");

  return (
    <div id="skills">
      <div className="text-[#2b2b2b] font-['Inter'] text-[2rem] font-bold leading-[123.6%] capitalize">
        {t("Section.skills")}
      </div>

      {skillGroups.map((group) => (
        <div key={group.groupKey} style={{ marginBottom: 32 }}>
          <Divider orientation="left">{tSkill(group.groupKey)}</Divider>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {group.skills.map((skill) => (
              <Card
                key={skill.name}
                hoverable
                style={{ width: 220, transition: "transform 0.2s" }}
                styles={{ body: { padding: 12 } }}
              >
                <div style={{ marginBottom: 8 }}>
                  <Tag
                    icon={<CheckCircleTwoTone />}
                    color={levelColorMap[skill.level]}
                  >
                    {[
                      "teamwork",
                      "communication",
                      "problemSolving",
                      "fastLearning",
                    ].includes(skill.name)
                      ? tSkill(skill.name)
                      : skill.name}
                  </Tag>
                </div>
                <Progress
                  percent={levelPercentMap[skill.level]}
                  size="small"
                  status="active"
                  strokeColor={
                    skill.level === "Advanced"
                      ? "#52c41a"
                      : skill.level === "Intermediate"
                      ? "#faad14"
                      : "#d9d9d9"
                  }
                  showInfo={false}
                />
                <div style={{ fontSize: 12, color: "#888" }}>
                  {skill.level === "Advanced"
                    ? tLang("advanced")
                    : skill.level === "Intermediate"
                    ? tLang("intermediate")
                    : "Basic"}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
