import Button from '@components/Button';
import { useReducer, useState } from 'react';
import counterReducer from '../CountReducer';

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = '0' }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  // const [count, setCount] = useState(initCount);
  // useReducer를 사용하여 상태 관리
  const [count, countDispatch] = useReducer(counterReducer, initCount);
  const [step, setStep] = useState(1);

  /* // 카운터 감소
  function handleDown() {
    // setCount(count - step);
    // const newCount = counterReducer(count, { type: 'DOWN', value: step });
    // setCount(newCount);
    countDispatch({ type: 'DOWN', value: step });
  }

  // 카운터 증가
  function handleUp() {
    // setCount(count + step);
    // const newCount = counterReducer(count, { type: 'UP', value: step });
    // setCount(newCount);
    countDispatch({ type: 'UP', value: step });
  }
  // 카운터 초기화
  function handleReset() {
    // setCount(initCount);
    // const newCount = counterReducer(count, { type: 'RESET', value: initCount });
    // setCount(newCount);
    countDispatch({ type: 'RESET', value: initCount });
  } */

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* 제어 컴포넌트 value, onChange 사용 */}
      <input id="step" type="number" value={step} onChange={handleStepChange} />
      <Button
        color="red"
        onClick={() => countDispatch({ type: 'DOWN', value: step })}
      >
        -_-
      </Button>
      <Button
        type="reset"
        onClick={() => countDispatch({ type: 'RESET', value: initCount })}
      >
        0_0
      </Button>
      <Button
        type="submit"
        color="blue"
        onClick={() => countDispatch({ type: 'UP', value: step })}
      >
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
