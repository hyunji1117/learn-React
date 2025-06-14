import type { TodoItem } from './TodoItem';

type TodoAction =
  | { type: 'ADD'; value: TodoItem }
  | { type: 'TOGGLE' | 'DELETE'; value: { _id: number } };

function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;
  //  TODO 1. 상태 관리 로직 작성

  return newState;
}

export default todoReducer;
