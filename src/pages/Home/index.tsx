import { ContentCard } from '@/components/ContentCard';
import { ContentInput } from '@/components/ContentInput';
import { Col, Row } from 'antd';
import React from 'react';

const data = [
  {
    avatarUrl: 'https://joesch.moe/api/v1/random',
    username: 'asd',
    createAt: '2022-04-10',
    description: 'asfdafshbqiuwethrowqiehrgwqu8gtfhowqahwfoiahsfoi',
  },
  {
    avatarUrl: 'https://joesch.moe/api/v1/random',
    username: 'asd',
    createAt: '2022-04-10',
    description: 'asfdafshbqiuwethrowqiehrgwqu8gtfhowqahwfoiahsfoi',
  },
  {
    avatarUrl: 'https://joesch.moe/api/v1/random',
    username: 'asd',
    createAt: '2022-04-10',
    description: 'asfdafshbqiuwethrowqiehrgwqu8gtfhowqahwfoiahsfoi',
  },
];

export default () => {
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
        <ContentInput />
        {data.map((item) => (
          <ContentCard key={item.description} {...item} />
        ))}
      </Col>
      <Col xs={0} sm={0} md={6} lg={6} xl={6}>
        15446
      </Col>
    </Row>
  );
};
