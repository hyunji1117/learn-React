// 게시물 한건에 대한 타입
export interface BoardInfoType {
  _id: number;
  title: string;
  content: string;
  replies: ReplyType[];
}

export interface BoardInfoType {
  ok: boolean;
  item: BoardInfoType;
}

// 댓글 한건에 대한 타입
export interface ReplyType {
  _id: number;
  content: string;
}

// 댓글 목록 조회에 대한 API 서버의 응답 데이터 타입
export interface ReplyLIstResType {
  ok: boolean;
  items: BoardInfoType;
}
