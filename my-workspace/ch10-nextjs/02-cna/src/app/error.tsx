import Link from 'next/link';

export default function RootError({ error }: { error: Error }) {
  return (
    <>
      <div>일시적인 에러가 발생해습니다.</div>
      <Link href="/">홈으로</Link>
    </>
  );
}
