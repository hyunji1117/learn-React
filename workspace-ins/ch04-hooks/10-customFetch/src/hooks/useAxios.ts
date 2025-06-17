import axios from "axios";
import { useEffect, useState } from "react";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 5000;

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number;      // Todo 아이템의 고유 식별자
  title: string;    // Todo 제목
  done: boolean;    // 완료 여부
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
export interface TodoListRes {
  ok: 1;  // 성공 여부 (1: 성공)
  items: Todo[];  // Todo 아이템 배열
  pagination: {   // 페이지네이션 정보
    page: number;      // 현재 페이지
    limit: number;     // 페이지당 아이템 수
    total: number;     // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

interface TodoItemRes {
  ok: 1;
  item: Todo;
}

// 에러 응답 데이터 타입 정의
interface ErrorRes {
  ok: 0;  // 성공 여부 (0: 실패)
  error: Error; // 에러 객체
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | TodoItemRes | ErrorRes;


function useAxios(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<ResData | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log('axios로 요청', params);
    try{
      // 로딩 상태를 true로 설정
      setIsLoading(true);
      
      // axios를 사용하여 서버에 GET 요청
      const res = await axios.get<ResData>(params.url);
      console.log('파싱된 데이터:', res.data);

      setData(res.data);
    }catch(err){
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as  Error);
      setData(null);
    }finally{
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  return { isLoading, error, data };
}

export default useAxios;