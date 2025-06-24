import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useState } from "react";

function CommentNew() {

  // 댓글 내용 저장
  const [content, setContent] = useState('');

  // axios instance
  const axios = useAxiosInstance();

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try{
      const response = await axios.post('/posts/1/replies', formData);
    }catch(err){
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.');
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    requestAddComment(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment }>
        <textarea 
          name="content" 
          rows={3} cols={30} 
          placeholder="댓글 내용" 
          value={ content } 
          onChange={ e => setContent(e.target.value) } 
        /><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;