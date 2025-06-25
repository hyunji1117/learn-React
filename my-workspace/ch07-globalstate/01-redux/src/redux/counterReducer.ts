// reduser 함수 :
// 상태와 액션을 전달받아서 새로운 상태를 반환하는 리듀서 함수
// 순수 함수 만들고, 상태는 불변성으로 유지한다.

import { COUNTER_ACTION } from '@redux/counterActionCreator';

// 초기 상태 {객체}
const initialState = {
  count: 5,
};

interface CounterAction {
  type: string;
  payload: { step: number };
}

// 상태와 액션을 전달 받아서 작업을 수행한 후 변경된 상태를 반환하는 순수함수
// 상태가 복합 객체일 경우 immer 같은 라이브러리 사용해서 불변성 유지
const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case COUNTER_ACTION.UP:
      // state.count += action.payload.step; 불변성 X (잃기 때문에)
      return {
        ...state,
        count: state.count + action.payload.step,
      };
    case COUNTER_ACTION.DOWN:
      return {
        ...state,
        count: state.count - action.payload.step,
      };
    case COUNTER_ACTION.RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
