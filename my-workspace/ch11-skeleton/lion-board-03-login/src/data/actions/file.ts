// 파일 업로드 관련 서버 액션 (클라이언트 사이드 액션)
// 이 파일은 클라이언트 사이드에서 실행되는 액션으로, 서버와의 통신을 담당합니다.
// 파일 업로드를 위한 API 호출을 포함하고 있습니다.
// 이 파일은 Next.js의 서버 액션 기능을 사용하여 작성되었습니다.

import {
  type ApiResPromise,
  type FileUpload,
} from '@/types';

// process.env: OS에서 설정한 환경변수 값을 꺼내쓰는 부분
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 파일 업로드 함수
 * @param formData - 업로드할 파일이 담긴 FormData 객체
 * @returns 파일 업로드 결과를 반환하는 Promise
 * @description
 * 파일을 서버에 업로드하고, 업로드된 파일 정보를 반환합니다.
 * API 참고: https://fesp-api.koyeb.app/market/apidocs/#/%ED%8C%8C%EC%9D%BC/post_files_
 */
export async function uploadFile(
  formData: FormData
): ApiResPromise<FileUpload[]> {
  // 새로운 FormData 객체 생성 후 파일 추가
  const fileForm = new FormData();
  fileForm.append('attach', formData.get('attach') as File);

  // API 서버에 파일 업로드 요청
  const res = await fetch(`${API_URL}/files`, {
    method: 'POST',
    headers: {
      'Client-Id': CLIENT_ID,
    },
    body: fileForm,
  });
  // 서버에서 반환된 JSON 결과 반환
  return res.json();
}
