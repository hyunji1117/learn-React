interface Right1Props {
  onIncrease: () => void;
}

// Right1.tsx
import Right2 from './Right2';

export default function Right1({ onIncrease }: Right1Props) {
  return (
    <div className="box">
      <b>Right1</b>
      <Right2 onIncrease={onIncrease} />
    </div>
  );
}
