
import React from 'react';

type Props = {
  title: string;
  count: number;
};

export const Dummy104 = ({ title, count }: Props) => {
  const unusedValue = 'test';

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
};
