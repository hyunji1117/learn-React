interface Right3Props {
  onIncrease: () => void;
}

// Right3.tsx
export default function Right3({ onIncrease }: Right3Props) {
  return (
    <div className="box">
      <b>Right3</b>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}
