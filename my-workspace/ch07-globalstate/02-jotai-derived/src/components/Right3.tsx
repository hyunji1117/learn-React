import { countAtom, countDownAtom } from '@/jotai/atoms';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(() => {
    console.log('#### Right3 렌더링.');
  });

  // useAtom은 구독을 유발한다. useState처럼 getter, setter 모두 사용(구독)
  // const [count, setCount] = useAtom(countAtom);
  // const countUp = (step: number) => {
  //   setCount(count + step);
  // };

  // setter만 사용(구독하지 않음)
  //
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    // atom count를 직접 변경하는 것이 아니라, setter 함수를 사용하여 상태를 업데이트한다.
    setCount((count) => count + step);
  };

  const countDown = useSetAtom(countDownAtom);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
      <button onClick={() => countDown(1)}>-1</button>
    </div>
  );
}

export default Right3;
