import CommentNew from '@/pages/board/CommentNew';
import type { ReplyType } from '@/types/BoardType';
import { Content } from 'openai/resources/containers/files.mjs';
import { useEffect, useState } from 'react';

function CommentList() {
  // 서버의 데이터를 저장할 상태
  // ReplyType[] : 배열로 해주어야 받아온 데이터로 map() 메소드를 돌도록 해준 것이다.
  const [data, setData] = useState<ReplyType[] | null>(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다.
  const requestCommentList = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await fetch(
        // limit=5 : 한 번에 5개씩 가져오고
        // page=1 : 1페이지부터 시작하고
        'https://fesp-api.koyeb.app/market/posts/1/replies?limit=5&page=1&delay=1000',
        {
          headers: {
            'Client-Id': 'openmarket',
          },
        }
      );
      console.log('response', response);
      const jsonData = await response.json();
      console.log('jsonData', jsonData);
      if (jsonData.ok) {
        // 응답이 성공일 경우
        // 게시물 상세 정보 출력
        setData(jsonData.item);
        setError(null);
      } else {
        // 응답이 실패일 경우
        // 에러 메세지 출력
        throw new Error(jsonData.message);
      }
    } catch (err) {
      setError(err as Error);
      setData(null);
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.');
      console.error(err);
    } finally {
      // 성공, 실패와 상관 없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCommentList();
  }, []); // 마운트 후에 한번만 실행

  // data로부터 값을 꺼내 올 것이다.
  const replyList = data?.map((reply) => (
    <li key={reply._id}>{reply.content}</li>
  ));

  return (
    <>
      <h3>댓글 목록</h3>

      {isLoading && <p>댓글 로딩중...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <ul>{replyList}</ul>
          {/* 새로운 댓글 등록하기 위한 */}
          <CommentNew />
        </>
      )}
    </>
  );
}

export default CommentList;
