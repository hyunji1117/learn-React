import { atom } from 'jotai';

// Read-write atom
// export const countAtom = atom(6); // 상태 하나를 정의 (초기값 지정)

// Read-only atom
export const countAtom = atom(6); // 상태 하나를 정의 (초기값 지정)

export const getCountAtom = atom(
  (get) => {
    // get 함수를 사용하여 countAtom의 값을 읽는다.
    return get(countAtom);
  } // read 함수
);

// Write-only atom (함수 전용으로 정의)
export const countDownAtom = atom(
  null, // read 함수 - null일 경우 "읽기 불가능"을 의미
  (get, set, step: number) => {
    const count = get(countAtom); // 현재 countAtom의 값을 가져온다.
    set(countAtom, count - step);
  } // write 함수 const countDown = useSetAtom(countDownAtom);
);
