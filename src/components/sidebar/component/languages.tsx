"use client";
import React from "react";
import { Progress, Typography, Space } from "antd";
import { useTranslations } from "next-intl";

const Language = () => {
  const t = useTranslations();

  return (
    <div style={{ width: "100%" }}>
      <Typography.Title level={4}>{t("Section.languages")}</Typography.Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{t("Language.thai")}</span>
            <span>{t("Language.advanced")}</span>
          </div>
          <Progress
            percent={100}
            showInfo={false}
            size="small"
            strokeColor="var(--color-primary)"
          />
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{t("Language.english")}</span>
            <span>{t("Language.intermediate")}</span>
          </div>
          <Progress
            percent={70}
            size="small"
            showInfo={false}
            strokeColor="var(--color-primary)"
          />
        </div>
      </Space>
    </div>
  );
};

export default Language;
