import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        خانه
      </a>
    ),
    key: "mail",
    icon: <HomeOutlined />,
  },
  getItem("بازگشت به خانه", "10", <HomeOutlined />),
  getItem("پنل مدیریت", "1", <PieChartOutlined />),
  getItem("محصولات", "2", <PieChartOutlined />),
  getItem("کتابخانه", "3", <DesktopOutlined />),
  getItem("نویسندگان", "sub1", <UserOutlined />, [
    getItem("نویسنده", "3"),
    getItem("مترجمان", "4"),
    getItem("آثار", "5"),
  ]),
  getItem("دسته بندی", "sub2", <TeamOutlined />, [
    getItem("محصولات", "6"),
    getItem("آثار", "8"),
  ]),
  getItem("فایل ها", "9", <FileOutlined />),
];
const AdminPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminPanel;
