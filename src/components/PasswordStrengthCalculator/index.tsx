import { configResponsive, useResponsive } from 'ahooks';
import { Input, InputProps, Popover, PopoverProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Content } from './Content';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

export type Validator = {
  validate: (value: any) => boolean;
  message: string;
  optional?: boolean;
};

type ComponentProps = {
  rules: Validator[];
  popoverProps?: PopoverProps;
  inputProps?: InputProps;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export const PasswordStrengthCalculator: React.FC<ComponentProps> = ({
  rules,
  popoverProps,
  inputProps,
  value,
  onChange,
}) => {
  const responsive = useResponsive();
  const [fieldError, setFieldError] = useState<string[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  useEffect(() => {
    if (!value) return;
    setIsValidating(true);
    const result = rules
      .map((rule) => {
        if (!rule.validate(value)) {
          return rule.message;
        }
        return '';
      })
      .filter((_) => !!_);
    setIsValidating(false);
    setFieldError(result);
  }, [value]);

  return (
    <Popover
      trigger="focus"
      placement={responsive.large ? 'right' : 'top'}
      {...popoverProps}
      content={
        <Content
          isTouched={isTouched}
          value={value}
          isValidating={isValidating}
          rules={rules}
          fieldError={fieldError}
        />
      }
    >
      <Input.Password
        {...inputProps}
        value={value}
        onChange={(e) => {
          if (!isTouched) setIsTouched(true);
          onChange?.(e);
        }}
      />
    </Popover>
  );
};
