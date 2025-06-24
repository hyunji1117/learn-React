import { useState } from 'react';

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState(''); // 제어 컴포넌트 3총사

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try {
      // FormData를 일반 Object로 변환
      const jsonBody = Object.fromEntries(formData.entries());
      await fetch(
        'https://fesp-api.koyeb.app/market/posts/1/replies?delay=1000',
        {
          headers: {
            'Client-Id': 'openmarket',
            // 요청 바디의 데이터 타입을 서버에 json이라고 알림
            // json이라고 명시를 해주면 json이면 객체형태로 파싱하고 문자열 형태로 파싱해야 되네.
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(jsonBody), // 객체를 JSON 문자열로 변환
        }
      );
    } catch (err) {
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.');
      console.error(err);
    }
  };

  // form에 붙어 있는 이벤트 핸들러 이다.
  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // formData.append('content', content);
    requestAddComment(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea
          value={content} // 제어 컴포넌트 3총사 (마지막 입력값 상태로 저장된걸 value로 세팅된다.)
          name="content"
          onChange={(e) => setContent(e.target.value)} // 제어 컴포넌트 3총사
          rows={3}
          cols={30}
          placeholder="댓글 내용"
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;
