// React 앱 부팅 스크립트

/* 
index.html의 <div id="root">에
→ App.tsx의 <App /> 컴포넌트를
→ React의 createRoot().render()로
→ StrictMode로 감싸서
→ React 앱의 트리를 시작한다. 

이 코드는 HTML에 있는 #root 요소를 찾아서,
App이라는 React 컴포넌트를 거기에 렌더링한다.
렌더링할 때는 StrictMode로 감싸서 코드의 안정성과 경고를 체크하고,
앱 전체에 index.css의 전역 스타일을 적용한다.
이 구문은 React 앱을 브라우저 화면에 띄우는 시작 지점이자 핵심 엔트리 포인트다.
*/

// { StrictMode } : 구조분해 import (named import) ES6 문법
// export된 정해진 이름을 그대로 import할 때 {중괄호} 사용
// 중괄호 {}는 "이 안에 있는 정확한 이름으로 가져올게"라는 의미
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// DOM에 React 컴포넌트 트리(App) 연결
createRoot(document.getElementById('root')!)
  // HTML의 #root 위치에 <App />을 그려줘라는 의미
  .render(
    // 개발 중 경고를 보여주는 감시자 (실제 기능엔 영향 없음)
    <StrictMode>
      <App />
    </StrictMode>
  );

// 결국 App 컴포넌트부터 React가 시작됨
