import Button from '@components/Button';
import { useEffect, useState } from 'react';

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = '1' }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(initCount);

  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가
  // setTimeout(() => {
  //   handleUp();
  // }, 1000);
  // console.log('무한 렌더링');

  // 마운트 된 후에 한번만 실행
  /* useEffect(() => {
    setTimeout(() => {
      handleUp();
    }, 1000);
    console.log('dependencies에 빈배열을 지정하면 마운트된 후에 한번만 호출됨');
  }, []); */

  // TODO 2. 증감치가 수정되면 증감치 만큼 1회 자동 증가 (handleUp() 호출)
  /* useEffect(() => {
    setTimeout(() => {
      handleUp();
    }, 1000);
    console.log('dependencies에 빈배열을 지정하면 마운트된 후에 한번만 호출됨');
  }, [step]); */

  // TODO 3. 컴포넌트가 마운트 된 후에 1초마다 현재 시간을 콘솔에 출력
  useEffect(() => {
    // setup
    console.log('setup 함수 호출');
    const timer = setInterval(() => {
      console.log(new Date());
    }, 1000);

    // cleanup
    // setup 함수에서 생성한 자원을 해제하는 코드 작성
    // 1. 컴포넌트가 언마운트될 때 호출
    // 2. setup 함수가 재실행 되기 전에 이전 setup 함수가 리턴한 cleanup 호출

    return () => {
      // cleanup 함수 (컴포넌트 언마운트 시 호출, setup 함수에서 생성한 자원을 해제하는 코드 작성)
      console.log('cleanup 함수 호출');
      clearInterval(timer); // 실제로는 setInterval의 ID를 전달해야 하지만, 여기서는 예시로 null을 사용
    };
  });

  // 마운트 된 후와 업데이트 후에 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies를 지정하지 않으면 마운트된 후와 업데이트된 후에 호출됨');
  // });

  // 카운터 감소
  const handleDown = () => {
    setCount(count - step);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + step);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />
      <Button color="red" onClick={handleDown}>
        -_-
      </Button>
      <Button type="reset" onClick={handleReset}>
        0_0
      </Button>
      <Button type="submit" color="blue" onClick={handleUp}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
