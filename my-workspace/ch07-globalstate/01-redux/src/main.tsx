import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store from '@redux/store.ts';

// Redux 스토어
// import { Provider } from 'react-redux';

// Redux toolkit 스토어
import store from '@RTK/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
