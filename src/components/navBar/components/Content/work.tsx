"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Card, Timeline, Typography, Tag } from "antd";
import { CodeOutlined, ToolOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"; //Todo: รอปรับ design uninstall ออกด้วยหากไม่ใช้

const { Title, Paragraph } = Typography;

const Work = () => {
  const t = useTranslations("Work");

  const workExperiences = [
    {
      icon: <CodeOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
      title: t("frontend.title"),
      company: t("frontend.company"),
      duration: t("frontend.duration"),
      tags: ["React", "Next.js", "TypeScript", "Ant Design", "Tailwind CSS"],
      description: [
        t("frontend.desc1"),
        t("frontend.desc2"),
        t("frontend.desc3"),
        t("frontend.desc4"),
        t("frontend.desc5"),
      ],
    },
    {
      icon: <ToolOutlined style={{ fontSize: 20, color: "#13c2c2" }} />,
      title: t("intern.title"),
      company: t("intern.company"),
      duration: t("intern.duration"),
      tags: ["PHP", "MySQL", "IT Support"],
      description: [t("intern.desc1"), t("intern.desc2")],
    },
  ];

  return (
    <div id="work">
      {/* <Title level={2}>{t("title")}</Title> */}
      <div className="text-[#2b2b2b] font-['Inter'] text-[2rem] font-bold leading-[123.6%] capitalize">
        {t("title")}
      </div>

      <Timeline
        mode="left"
        style={{ marginTop: 32 }}
        items={workExperiences.map((job, index) => ({
          dot: job.icon,
          children: (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                hoverable
                style={{ borderRadius: 12 }}
                styles={{
                  body: {
                    padding: 20,
                  },
                }}
              >
                <Title level={4} style={{ marginBottom: 4 }}>
                  {job.title}
                </Title>
                <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                  {job.company} &middot; {job.duration}
                </Paragraph>
                <div style={{ marginTop: 8 }}>
                  {job.tags.map((tag) => (
                    <Tag key={tag} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {job.description.map((item, i) => (
                    <li key={i}>
                      <Paragraph style={{ marginBottom: 4 }}>{item}</Paragraph>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ),
        }))}
      />
    </div>
  );
};

export default Work;
