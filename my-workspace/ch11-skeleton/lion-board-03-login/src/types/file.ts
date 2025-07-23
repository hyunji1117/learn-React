// 서버로부터 파일 업로드한 결과를 타입으로 지정

export interface FileUpload {
  originalname: string; // 원본 파일 이름
  name: string; // 변경된 파일 이름
  path: string; // 파일 경로 (주로 이거를 쓰면 된다)
}
