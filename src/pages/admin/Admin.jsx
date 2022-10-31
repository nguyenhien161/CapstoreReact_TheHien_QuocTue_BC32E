import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Component, Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Routers from "../../routers/Routers";

const { Header, Sider, Content } = Layout;
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Component, ...restProps } = props;
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div classname="logo">
          <div>
            <img
              className="w-[100px] justify-center"
              src="./img/logo.png"
              alt=""
            />
          </div>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Films",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Showtime",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: "white",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger ml-6 ",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          flim
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
