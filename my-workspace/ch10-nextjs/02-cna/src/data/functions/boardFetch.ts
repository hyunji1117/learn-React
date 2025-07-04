'use server'; // 서버함수

import { Post } from '@/types/board';

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 api서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      'Client-Id': 'openmarket',
    },

    next: {
      tags: ['list', '3'],
    },
    // cache: "no-cache", // next15 기본값
    cache: 'force-cache', // next14 기본값
  });

  const data = await res.json();
  console.log('boardFetch', data.item.length);
  return data.item;
}
