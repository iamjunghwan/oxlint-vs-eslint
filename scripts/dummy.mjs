import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/dummy");
fs.mkdirSync(dir, { recursive: true });

for (let i = 1; i <= 500; i++) {
  fs.writeFileSync(
    path.join(dir, `Dummy${i}.tsx`),
    `
import React from 'react';

type Props = {
  title: string;
  count: number;
};

export const Dummy${i} = ({ title, count }: Props) => {
  const unusedValue = 'test';

  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
};
`
  );
}

console.log("dummy files created");
