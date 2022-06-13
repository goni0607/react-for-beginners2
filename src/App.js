import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChangeKeyword = (event) => setKeyword(event.target.value);
  /**
   * useEffect() 예제
   * 두 번째 매개변수를 빈 배열로 제공할 경우 useEffect에 제공한 첫 번째 callback 함수가 처음 한 번만 실행된다.
   * */
  /* 항상 실행 */
  console.log("I run all the time.");

  /* 한 번만 실행 */
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  /* keyword 상태가 변경될 경우만 실행 */
  useEffect(() => {
    console.log("I run when 'keyword' changed.:", keyword);
  }, [keyword]);

  /* counter 상태가 변경될 경우만 실행 */
  useEffect(() => {
    console.log("I run when 'counter' changed.:", counter);
  }, [counter]);

  /* keyword 또는 counter 상태가 변경될 경우만 실행 */
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changed.:", keyword, counter);
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <input
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="Search here..."
      />
      <Button text="Continue" onClick={onClick} />
    </div>
  );
}

export default App;
