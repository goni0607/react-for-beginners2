import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  /**
   * 다음시간에 배울 내용 useEffect()
   * 기본적으로 state가 변경될 경우 App 내의 모든 컴포넌트가 re-rendering 된다.
   * 그러나 렌더링될 때마다 실행되지 않아야 할 코드가 있을 경우(초기화 및 API 호출 등)
   * 한 번만 코드가 살행되도록 (또는 조건을 줄 수 있음) 하는 부분은 위한 코드 예제
   * */
  console.log("rendered");
  return (
    <div>
      <h1 className={styles.title}>{value}</h1>
      <Button text="Continue" onClick={onClick} />
    </div>
  );
}

export default App;
