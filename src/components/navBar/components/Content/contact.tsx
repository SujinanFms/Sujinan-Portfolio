// /Sujinan-Portfolio/src/components/navBar/components/Content/contact.tsx

import React, { useState } from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { useNotification } from "components/oyher/openNotificationWithIcon";

const { Title } = Typography;

const Contact = () => {
  const openNotification = useNotification();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    name: string;
    company: string;
    email: string;
    phone?: string;
    address?: string;
  }) => {
    console.log("values", values);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      // message.success(data.message || "ส่งข้อมูลสำเร็จ");
      openNotification("success", "ส่งข้อมูลสำเร็จ", data.message);
    } catch (err) {
      console.error("err", err);
      // message.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      style={{ maxWidth: 600, margin: "auto", padding: "2rem" }}
    >
      <Card>
        <Title level={3} style={{ textAlign: "center" }}>
          ติดต่อฉันเพื่อสัมภาษณ์งาน
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="ชื่อ"
            name="name"
            rules={[{ required: true, message: "กรุณากรอกชื่อของคุณ" }]}
          >
            <Input placeholder="ชื่อของคุณ" />
          </Form.Item>

          <Form.Item
            label="ชื่อบริษัท"
            name="company"
            rules={[{ required: true, message: "กรุณากรอกชื่อบริษัทของคุณ" }]}
          >
            <Input placeholder="ชื่อบริษัท" />
          </Form.Item>

          <Form.Item
            label="อีเมล"
            name="email"
            rules={[
              { required: true, message: "กรุณากรอกอีเมลของคุณ" },
              { type: "email", message: "รูปแบบอีเมลไม่ถูกต้อง" },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label="เบอร์โทร"
            name="phone"
            rules={[
              {
                pattern: /^[0-9+\-() ]*$/,
                message:
                  "กรุณากรอกเบอร์โทรที่ถูกต้อง (ตัวเลขและสัญลักษณ์ + - ( ) เท่านั้น)",
              },
            ]}
          >
            <Input placeholder="เบอร์โทร เช่น 0812345678" />
          </Form.Item>

          <Form.Item label="ที่อยู่" name="address">
            <Input.TextArea placeholder="ที่อยู่ (ถ้ามี)" rows={3} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              ส่งข้อความ
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
