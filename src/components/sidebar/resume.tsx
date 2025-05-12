import { App, Button, Col, Divider, Flex, message, Row, Tag } from "antd";
import Image from "next/image";
import React from "react";
import { FacebookFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import Language from "./component/languages";
import Skills from "./component/skills";

const Resume = () => {
  const fbUrl = "https://www.facebook.com/SujiOnnie/"; // เปลี่ยน URL ไปที่ Facebook
  const phoneNumber = "080-737-6088";
  const email = "angun.sujinan@gmail.com";
  const t = useTranslations(); // เรียกใช้งาน i18n

  const handleCopy = (value: string, type: "phone" | "email") => {
    try {
      // คัดลอกข้อมูล
      navigator.clipboard.writeText(value);

      // แสดงข้อความตามประเภท
      if (type === "phone") {
        message.success(t("Contact.phone"));
      } else if (type === "email") {
        message.success(t("Contact.email"));
      }
    } catch (err) {
      console.log("err", err);
      message.error(t("Contact.err"));
    }
  };

  return (
    <App>
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ margin: "10px" }}
        gap={12}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/images/suji.jpg"
            alt="profile"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>

        <div className="text-[#2b2b2b] text-lg font-medium leading-[123.6%] capitalize">
          {t("Profile.name")}
        </div>

        <div className="font-end_developer text-[#767676] text-[.9375rem] leading-6 capitalize">
          {t("Profile.position")}
        </div>

        <Flex gap="small" wrap>
          <Button
            type="primary"
            shape="circle"
            icon={<FacebookFilled />}
            onClick={() => window.open(fbUrl, "_blank")}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<PhoneFilled />}
            onClick={() => handleCopy(phoneNumber, "phone")}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<MailFilled />}
            onClick={() => handleCopy(email, "email")}
          />
        </Flex>

        <Divider />

        <Row gutter={[8, 4]}>
          {/* //? อายุ */}
          <Col span={6}>
            <Tag color="#55acee">{t("TagProfile.age")} :</Tag>
          </Col>
          <Col span={18} style={{ textAlign: "right" }}>
            27
          </Col>

          <Col span={6}>
            <Tag color="#55acee">{t("TagProfile.residence")} :</Tag>
          </Col>
          <Col span={18} style={{ textAlign: "right" }}>
            {t("TagProfile.province")}
          </Col>

          <Col span={6}>
            <Tag color="#55acee">{t("TagProfile.freelance")} :</Tag>
          </Col>
          <Col span={18} style={{ textAlign: "right", color: "#7EB942" }}>
            Available
          </Col>

          <Col span={6}>
            <Tag color="#55acee">{t("TagProfile.address")} :</Tag>
          </Col>
          <Col span={18} style={{ textAlign: "right" }}>
            {t("TagProfile.dorm")}
          </Col>
        </Row>

        <Divider />
        <Language />

        <Divider />
        <Skills />
      </Flex>
    </App>
  );
};

export default Resume;
