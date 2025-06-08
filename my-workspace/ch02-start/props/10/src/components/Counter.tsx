// 상태 관리 + 이벤트 처리 핵심

// useState로 count라는 상태 선언
import { useState } from 'react';
import Button from './Button';

// Counter 컴포넌트
function Counter() {
  console.log('\tCounter 호출됨');

  // setCount(...) 호출 시 컴포넌트 자동 리렌더링
  const [count, setCount] = useState(0);

  /**
   * 3가지 핸들러 정의:
    - handleUp: +1
    - handleDown: -1
    - handleReset: 0으로 초기화
   */

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
      {/* 
      각 버튼에 onClick 이벤트 핸들러 전달
      props로 Button 컴포넌트에 내려줌
      */}
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
