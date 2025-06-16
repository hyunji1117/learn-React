import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface FetchParams {
  url: string;
}

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

interface ErrorRes {
  ok: 0;
  error: Error;
}

type ResData = TodoListRes | ErrorRes;

function useAxios(fetchParams: FetchParams) {
  const [data, setData] = useState<Todo[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<ResData>(
          'https://fesp-api.koyeb.app/todo' + fetchParams.url
        );

        if ('ok' in res.data && res.data.ok === 1) {
          setData(res.data.items);
        } else if ('error' in res.data) {
          setError(res.data.error.message);
        }
      } catch (err: any) {
        setError(err.message || '알 수 없는 에러');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [fetchParams.url]);

  return { data, isLoading, error };
}

export default useAxios;
