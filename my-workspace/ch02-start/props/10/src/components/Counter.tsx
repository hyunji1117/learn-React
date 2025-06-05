import { useState } from 'react';
import Button from './Button';

// Counter 컴포넌트
function Counter() {
  console.log('\tCounter 호출됨');

  const [count, setCount] = useState(0);

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return (
    <div id="counter">
      <Button textColor="#333" color="red" onClick={handleDown}>
        -
      </Button>
      <Button onClick={(event) => handleReset(event)}>0</Button>
      <Button textColor="#333" color="blue" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
