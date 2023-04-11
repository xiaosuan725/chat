import { ContentCard } from '@/components/ContentCard';
import { SlateEditor } from '@/components/SlateEditor';
import { Button, Card, Col, Row } from 'antd';
import React from 'react';

const data = [
  {
    id: 1,
    avatarUrl: 'https://joesch.moe/api/v1/random',
    username: 'asd',
    createAt: '2022-04-10',
    description: 'asfdafshbqiuwethrowqiehrgwqu8gtfhowqahwfoiahsfoi',
  },
  {
    id: 2,
    avatarUrl: 'https://joesch.moe/api/v1/random',
    username: 'asd',
    createAt: '2022-04-10',
    description: 'asfdafshbqiuwethrowqiehrgwqu8gtfhowqahwfoiahsfoi',
  },
  {
    id: 3,
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
        {/* <ContentInput />  */}
        <Card style={{ marginBottom: 8 }} bodyStyle={{ padding: '12px 24px' }}>
          <SlateEditor
            submitRender={(editor) => (
              <Button
                style={{ marginTop: 8 }}
                onClick={() => console.log(editor.children)}
              >
                小记
              </Button>
            )}
          />
        </Card>
        {data.map((item) => (
          <ContentCard key={item.id} {...item} />
        ))}
      </Col>
      <Col xs={0} sm={0} md={6} lg={6} xl={6}>
        15446
      </Col>
    </Row>
  );
};
