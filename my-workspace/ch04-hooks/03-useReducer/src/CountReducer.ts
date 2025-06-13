interface CounterAction {
  type: 'UP' | 'DOWN' | 'RESET';
  value?: number; // 선택적 속성, UP과 DOWN에서만 사용
}

// TODO 리듀서 작성
// 현재 상태와 action 객체를 받아서 새로운 state상태를 반환하는 순수 함수(꼭!)
// 로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
// state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
function counterReducer(state: number, action: CounterAction): number {
  let newState = state;

  // console.log(`${state} ${action.type} ${action.value} => ${newState}`);

  switch (action.type) {
    case 'UP':
      newState = state + action.value;
      break;
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'RESET':
      newState = action.value; // 초기값으로 리셋
      break;
  }
  return newState;
}

console.log(counterReducer(6, { type: 'DOWN', value: 1 }));
console.log(counterReducer(8, { type: 'UP', value: 2 }));
console.log(counterReducer(5, { type: 'RESET', value: 5 }));

export default counterReducer;
