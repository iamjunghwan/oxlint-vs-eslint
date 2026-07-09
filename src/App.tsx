import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

type User = {
  id: string;
  name: string;
};

const users: User[] = [
  { id: "1", name: "홍길동" },
  { id: "2", name: "김영수" },
  { id: "3", name: "이지수" },
];

function App({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  setCount(value);

  const userMap = users.reduce<Record<string, User>>((acc, user) => {
    return {
      ...acc,
      [user.id]: user,
    };
  }, {});

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div>
        <h1>Oxlint 테스트</h1>
        <pre>{JSON.stringify(userMap, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
