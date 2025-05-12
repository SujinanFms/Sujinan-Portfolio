// /components/AppLayout.tsx

import React, { ReactNode } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, theme } from "antd";
import AppFooter from "./AppFooter";

import "../styles/globals.css";
import Resume from "./sidebar/resume";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#ffffff",
          },
          Button: {
            colorPrimary: "var(--color-primary)",
            colorPrimaryHover: "var(--color-hover)",
          },
        },
      }}
    >
      <Layout style={{ height: "100dvh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width={268}
        >
          <Resume />
          {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        /> */}
        </Sider>
        <Layout>
          {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
          <Header style={{ padding: 0, background: colorBgContainer }}>
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
