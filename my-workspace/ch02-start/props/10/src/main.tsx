// React 앱 부팅 스크립트

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// DOM에 React 컴포넌트 트리(App) 연결
createRoot(document.getElementById('root')!).render(
  // 개발 중 경고를 보여주는 감시자 (실제 기능엔 영향 없음)
  <StrictMode>
    <App />
  </StrictMode>
);

// 결국 App 컴포넌트부터 React가 시작됨
