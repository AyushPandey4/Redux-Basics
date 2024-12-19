import { useState } from "react";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>React Redux Counter App</h1>
        <Counter />
        <Posts />
      </div>
    </>
  );
}

export default App;
