import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  /**
   * useEffect() 예제
   * 두 번째 매개변수를 빈 배열로 제공할 경우 useEffect에 제공한 첫 번째 callback 함수가 처음 한 번만 실행된다.
   * */
  console.log("I run all the time.");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{value}</h1>
      <Button text="Continue" onClick={onClick} />
    </div>
  );
}

export default App;
