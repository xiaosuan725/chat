import React from 'react';

export const Leaf: React.FC<any> = ({ attributes, children, leaf }) => {
  let result;
  if (leaf.bold) {
    result = <strong>{children}</strong>;
  }

  if (leaf.code) {
    result = <code>{children}</code>;
  }

  if (leaf.italic) {
    result = <em>{children}</em>;
  }

  if (leaf.underline) {
    result = <u>{children}</u>;
  }

  return <span {...attributes}>{result}</span>;
};
