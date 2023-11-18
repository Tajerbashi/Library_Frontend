import './Dashboard.css'
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  // SettingOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        خانه
      </a>
    ),
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: (
      <a href="/Admin" rel="noopener noreferrer">
        داشبورد ادمین
      </a>
    ),
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: (
      <a href="/Products" rel="noopener noreferrer">
        محصولات
      </a>
    ),
    key: "alipay",
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <a href="/Signin" rel="noopener noreferrer">
        ورود
      </a>
    ),
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: (
      <a href="/Signup" rel="noopener noreferrer">
        ثبت نام
      </a>
    ),
    key: "mail",
    icon: <MailOutlined />,
  },
];

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          ></Menu>
        </Header>
      </Layout>
      <Layout>
        <Content className="main-layout">
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            <Breadcrumb.Item>صفحه اصلی</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >
          </div>
        </Content>
      </Layout>
      <Layout>
        <Footer
          style={{
            textAlign: "center",
            position: "sticky",
            bottom: "0",
          }}
        >
          این وبسایت برای تست طراحی میشود
        </Footer>
      </Layout>
    </div>
  );
};
export default Dashboard;
