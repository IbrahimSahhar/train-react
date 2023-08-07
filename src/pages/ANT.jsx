import React from "react";
import { Button, Space, DatePicker, version, Dropdown } from "antd";

const ANT = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <div>
      <div style={{ padding: "0 24px" }}>
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
      </div>
      <br />

      <>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown
          menu={{
            items,
          }}
          placement="topLeft"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="top"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>top</Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="topRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button>topRight</Button>
        </Dropdown>
      </>
    </div>
  );
};

export default ANT;
