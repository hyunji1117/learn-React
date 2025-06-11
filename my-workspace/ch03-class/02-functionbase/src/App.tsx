import { Component } from 'react';
// import ChildComponent from '../src/FunctionBase'; // 사용자 정의 모듈
// import ChildComponent from './FunctionBase'; // 사용자 정의 모듈
import ChildComponent from 'FunctionBase'; // 노드 패키지

class App extends Component {
  render() {
    return <ChildComponent />;
  }
}

export default App;
