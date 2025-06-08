// 재사용 가능한 UI 컴포넌트

// props를 받아 스타일과 동작을 자율적으로 조절 가능
interface ButtonProps {
  // children → <Button>+</Button>처럼 태그 사이의 문자열 받기
  children: string;
  // color, textColor → style 속성으로 적용
  color?: 'red' | 'blue' | 'green';
  textColor?: string;
  // onClick → 부모로부터 받은 이벤트 핸들러 연결
  onClick: (event: React.MouseEvent) => void;
}

function Button({
  children,
  color,
  textColor,
  onClick: handleClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: color, color: textColor }}
      className="rounded-button"
    >
      {children}
    </button>
  );
}

export default Button;
