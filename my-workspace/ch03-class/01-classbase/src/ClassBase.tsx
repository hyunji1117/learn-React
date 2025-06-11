import { Component } from 'react';

interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={10} />
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  // stste/setState는 부모에 정의되어 있는 이름이다.
  // 상태는 state 변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  // 함수형에서는 state 변수를 여러개 지정 가능하지만(when using useState hook)
  state = { count: 0 };

  constructor(props: ClickMeProps) {
    // 부모 클래스의 생성자를 통해서 this를 생성하고 초기화 하므로
    // super()를 호출해야 자식 클래스에서 this를 사용할 수 있다.
    // super(props)를 호출해야 자식 클래스에서 this.props를 사용할 수 있다.
    super(props);
    this.state = { count: props.level || 1 };
  }

  increase = () => {
    // setState를 호출하면 컴포넌트가 리렌더링 된다.
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };

  render() {
    return (
      <div>
        <h2>자식 컴포넌트</h2>
        <p>
          클릭 횟수 X {this.props.level || 1} : {this.state.count}
        </p>
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }
}

export default Parent;
