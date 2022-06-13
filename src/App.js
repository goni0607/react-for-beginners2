import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

/**
 * Cleaning function 사용 예제
 * Cleaning function이란 컴포넌트가 destroy 될 때 실행되는 function 이다.
 */

function Hello() {
  /* arrow function 사용 예제 */
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  /* 기본 function 사용 예제 */
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello!!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
