import React, { useState } from 'react';
import './App.css';

function App() {
  console.log('App rendered');
  const [position, setPosition] = useState({ x: 50, y: 150 });
  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        className="container"
        onPointerMove={(event) => {
          console.log(event.pageX, event.pageY);

          // 객체 데이터의 주소가 바뀌지 않아서 객체의 속성만 수정할 경우 리렌더딩이 되지 않음.
          // position.x = event.pageX;
          // position.y = event.pageY;

          // 리렌더링 됨(새로운 객체로 생성)
          const newPosition = {
            x: event.pageX,
            y: event.pageY,
          };
          setPosition(newPosition);
        }}
      ></div>
      <div
        className="circle"
        style={{
          pointerEvents: 'none',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  );
}

export default App;
