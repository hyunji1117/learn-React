import useAxios from './hooks/useAxios';

interface Todo {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoListRes {
  ok: 1;
  items: Todo[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

function App() {
  const { data, isLoading, error } = useAxios<TodoListRes>({ url: '/list' });

  return (
    <>
      <h1>09 Custom Hook - 커스텀 훅 + axios 사용</h1>
      <h2>할일 목록</h2>

      {isLoading && <p>로딩중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>{data?.items.map((todo) => <li key={todo._id}>{todo.title}</li>)}</ul>
    </>
  );
}

export default App;
