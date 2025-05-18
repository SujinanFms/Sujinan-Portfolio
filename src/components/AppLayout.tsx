// /src/components/AppLayout.tsx

import React, { ReactNode } from "react";
import { ConfigProvider, Layout, Space, theme } from "antd";
import AppFooter from "./AppFooter";

import "../styles/globals.css";
import Resume from "./sidebar/resume";
import SwitchLanguage from "./navBar/components/switchLanguage";
import NavMenu from "./navBar/components/navMenu";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  height: "100dvh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
};

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log("AppLayout children:", children);

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
          Switch: {
            colorPrimary: "var(--color-primary)",
            colorPrimaryHover: "var(--color-second)",
          },
          Divider: {
            marginLG: 14,
          },
        },
      }}
    >
      <Layout hasSider>
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
          style={siderStyle}
        >
          <Resume />
        </Sider>

        <Layout style={{ minHeight: "100vh", overflow: "auto" }}>
          <Header
            style={{
              padding: "0 24px",
              background: colorBgContainer,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Space>
              {/* Menu */}
              <NavMenu />
              {/* เปลี่ยนภาษา */}
              <SwitchLanguage />
            </Space>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                // minHeight: 360,
                // background: colorBgContainer,
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
