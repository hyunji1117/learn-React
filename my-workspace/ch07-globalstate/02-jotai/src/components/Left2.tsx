import Left3 from '@/components/Left3';
import { countAtom } from '@/jotai/atoms';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left2() {
  useEffect(() => {
    console.log('### Left2 렌더링.');
  });
  // useAtom은 구독을 유발한다. useState처럼 getter, setter 모두 사용(구독)
  const count = useAtomValue(countAtom);
  return (
    <div>
      <h2>Left2</h2>
      <span>{count}</span>
      <Left3 />
    </div>
  );
}

export default Left2;
