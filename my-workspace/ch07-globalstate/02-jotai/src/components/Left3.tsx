import { countAtom } from '@/jotai/atoms';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left3() {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });

  const count = useAtomValue(countAtom);

  // setter만 제공해주는 Atom이다. (쓰기 전용))
  // const countDown = useAtomValue(countAtom);
  // console.log(countDown);

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
