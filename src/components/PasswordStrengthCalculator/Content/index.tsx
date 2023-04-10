import { Progress, Space } from 'antd';
import { Validator } from '..';
import styles from './style.less';
import { Icon } from '@umijs/max';

type ValidateStatus = 'success' | 'error' | 'wait';

const colors = { RED: '#ff4d4f', YELLOW: '#faad14', GREEN: '#52c41a' };

const Circle = () => (
  <div className={styles['circle-container']}>
    <div className={styles.circle} />
  </div>
);

const statusIconMap = {
  error: (
    <Icon icon="ant-design:close-circle-filled" style={{ color: colors.RED }} />
  ),
  success: (
    <Icon
      icon="ant-design:check-circle-filled"
      style={{ color: colors.GREEN }}
    />
  ),
  wait: <Circle />,
};

export const Content: React.FC<{
  rules: Validator[];
  fieldError: string[];
  isValidating: boolean;
  value: any;
  isTouched: boolean;
}> = ({ rules, fieldError, isValidating, value, isTouched }) => {
  const isRequireFail = rules
    .filter((rule) => fieldError.includes(rule.message))
    .some((rule) => !rule.optional);
  const percent = Math.max(
    0,
    Math.min(100, ((rules.length - fieldError.length) / rules.length) * 100),
  );

  let strokeColor = '';
  if (isRequireFail) {
    strokeColor = colors.RED;
  } else {
    strokeColor = !fieldError.length
      ? (strokeColor = colors.GREEN)
      : colors.YELLOW;
  }

  return (
    <div style={{ padding: '6px 8px 12px 8px' }}>
      <Progress
        percent={value ? percent : 0}
        strokeColor={strokeColor}
        showInfo={false}
        size="small"
      />
      <ul
        style={{
          margin: 0,
          marginBlockStart: '10px',
          listStyle: 'none',
          padding: '0',
        }}
      >
        {rules?.map((rule, idx) => {
          const isOptional = !!rule.optional;
          const isError = fieldError.includes(rule.message);
          let status: ValidateStatus = 'wait';
          if (isError) {
            status = isOptional ? 'wait' : 'error';
          } else {
            status = 'success';
          }
          if (!value) {
            status = 'error';
          }
          if (!isTouched) {
            status = 'wait';
          }
          return (
            <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
              <Space>
                {isValidating ? (
                  <Icon icon="ant-design:loading-outlined" />
                ) : (
                  statusIconMap[status]
                )}
                <span
                  style={{ color: 'rgba(0,0,0,0.65)', whiteSpace: 'nowrap' }}
                >
                  {rule.message}
                </span>
              </Space>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
