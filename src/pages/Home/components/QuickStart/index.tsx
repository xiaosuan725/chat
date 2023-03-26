import { Button } from 'antd';
import React from 'react';
import style from './style.less';

type Props = {
  icon: React.ReactNode;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
};
export const QuickStart: React.FC<Props> = (props) => {
  const icon = props.icon;
  const title = props.title;
  const subTitle = props.subTitle;
  return (
    <Button className={style.card}>
      <div className={style.icon}>{icon}</div>
      <div>
        <p>{title}</p>
        {subTitle && <p>{subTitle}</p>}
      </div>
    </Button>
  );
};
