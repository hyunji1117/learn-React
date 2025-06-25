import Left2 from './Left2';

interface Left1Props {
  count: number;
}

export default function Left1({ count }: Left1Props) {
  return (
    <div className="box">
      <b>Left1</b>
      <Left2 count={count} />
    </div>
  );
}
