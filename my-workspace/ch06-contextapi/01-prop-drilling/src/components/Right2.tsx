import Right3 from './Right3';

interface Right2Props {
  onIncrease: () => void;
}

export default function Right2({ onIncrease }: Right2Props) {
  return (
    <div className="box">
      <b>Right2</b>
      <Right3 onIncrease={onIncrease} />
    </div>
  );
}
