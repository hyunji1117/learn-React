interface Left3Props {
  count: number;
}

export default function Left3({ count }: Left3Props) {
  return (
    <div className="box">
      <b>Left3</b>
      <p>{count}</p>
    </div>
  );
}
