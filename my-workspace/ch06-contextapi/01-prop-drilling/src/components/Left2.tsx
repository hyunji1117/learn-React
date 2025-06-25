import Left3 from './Left3';

interface Left2Props {
  count: number;
}

export default function Left2({ count }: Left2Props) {
  return (
    <div className="box">
      <b>Left2</b>
      <Left3 count={count} />
    </div>
  );
}
