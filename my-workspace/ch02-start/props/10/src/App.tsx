// 루트 컴포넌트

// 화면에 Header, Counter 2개를 렌더링
import Counter from '@components/Counter';
import Header from '@components/Header';

// App 컴포넌트(어플리케이션의 시작점)
function App() {
  console.log('App 호출됨');
  return (
    <div id="app">
      <Header />
      <Counter />
      {/* Counter가 2번 사용됨 → 독립된 상태 2개가 생김 */}
      {/* 중요한 개념: 컴포넌트는 함수처럼 여러 번 재사용할 수 있다 */}
      <Counter />
    </div>
  );
}
export default App;
