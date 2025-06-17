import Home from '@pages/Home';
import Page1 from '@pages/Page1';
import Page2 from '@pages/Page2';
import { useEffect, useState } from 'react';

function App() {
  // 현재 url을 상태로 관리한다.
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // 컴포넌트가 마운트되면 이벤트 핸들러를 등록
  useEffect(() => {
    const handleLocationChange = () => {
      console.log(location.pathname, '으로 주소 변경됨.');
      // APP이 리엔더링 되어야한다.
      setCurrentPath(location.pathname);
    };

    // popstate 이벤트가 발생하면 handlelocationonChange 함수를 호출하여 현재 URL에 맞는 컴포넌트를 렌더링한다.
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // url에 맞는 컴포넌트를 변환 (만들기 나름)
  const renderComponent = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <Home />;
      case '/page1':
        return <Page1 />;
      case '/page2':
        return <Page2 />;
      default:
        return <p>404에러</p>;
    }
  };
  // 컴포넌트가 언마운트되면 이벤트 핸들러를 등록
  return (
    <>
      {/* 바뀐 화면이 여기에 들어간다.  */}
      {renderComponent()}
    </>
  );
}

export default App;
