import { ProCard } from '@ant-design/pro-components';
import { Tabs, TabsProps } from 'antd';
import React from 'react';

// const A = () => {
//   const data = Array.from({ length: 23 }).map((_, i) => ({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: `https://joesch.moe/api/v1/random?key=${i}`,
//     description:
//       '2022-1-1',
//     content:
//       '今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,今天是个好天气,',
//   }));

//   const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
//     <Space>
//       {React.createElement(icon)}
//       {text}
//     </Space>
//   );
//   return <List
//     itemLayout="vertical"
//     size="large"
//     pagination={{
//       onChange: (page) => {
//         console.log(page);
//       },
//       pageSize: 3,
//     }}
//     dataSource={data}

//     renderItem={(item) => (
//       <List.Item
//         key={item.title}
//         actions={[
//           <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
//           <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
//           <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
//         ]}
//         // extra={<a>按钮</a>}
//         style={{ padding: '16px 0' }}
//       >
//         <List.Item.Meta
//           avatar={<Avatar src={item.avatar} />}
//           title={<Space>
//             <a href={item.href} style={{ color: '#000000' }}>{item.title}</a>
//             <span style={{ fontSize: 12, color: '#939393', fontWeight: 'normal' }}>@1323</span>
//             <span style={{ fontSize: 12, color: '#939393', fontWeight: 'normal' }}>2022-1-1</span>
//           </Space>}
//           style={{ marginBottom: 0 }}
//         />
//         <div style={{ paddingLeft: 48 }}>
//           <div style={{ marginBottom: 16 }}>
//             {item.content}
//           </div>
//           <img
//             style={{ maxWidth: '100%' }}
//             alt="logo"
//             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
//           />
//         </div>
//       </List.Item>
//     )}
//   />
// }

const HomePage: React.FC = () => {
  // const Query = useQuery(['message', 'list'], () => getStatus({}))

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '我关注的',
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: '我发布的',
    },
  ];
  return (
    <ProCard split="vertical" style={{ minHeight: '100vh' }}>
      <ProCard colSpan="100%">
        <Tabs size="large" defaultActiveKey="2" items={items} />
      </ProCard>
    </ProCard>
  );
};

export default HomePage;
