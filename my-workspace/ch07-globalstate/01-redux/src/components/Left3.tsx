import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/RTK/store'; // RTK store의 RootState 타입 가져오기

function Left3() {
  useEffect(() => {
    console.log('#### Left3 렌더링.');
  });
  // Redux store에서 count 값 가져오기 목표
  // const count = useSelector((state: { count: number }) => state.count);

  // RTK store에서 count 값 가져오기 목표
  const count = useSelector((state: RootState) => state.counterStore.count);

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
