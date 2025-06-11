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
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={5} />
      </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  // 1-1 단계 (mounting) : 최초로 컴포넌트가 렌더링되고 DOM에 삽입될 때 호출되는 메서드 constructor()
  constructor(props: ClickMeProps) {
    console.log('1-1 constructor 호출됨.');
    super(props);
    this.state = { count: props.level || 1 };
  }

  // 1-2 / 2-1
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log('1-2 getDerivedStateFromProps 호출됨.');
    console.log('\tprops:', props);
    console.log('\tstate:', state);

    if (state.count / (props.level || 1) > 10) {
      return { count: (props.level || 1) * 10 };
    }
    return null; // 상태 변경이 필요 없을 때는 null 반환
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };

  // 1-3(mounting의 3번째 단계) / 2-3(updating의 3번째 단계)
  // 렌더가 가지고 있는 값이 30을 초과하면 30으로 고정되도록 하는 로직이 있다.
  render() {
    /* console.log('1-3 render 호출됨.');
    console.log(document.querySelector('button')?.textContent); // 권장하는 방식은 아니다. */

    return (
      <div>
        클릭 횟수 X {this.props.level || 1} : {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }

  // 1-4 (여기서 구현하는 조건)
  componentDidMount() {
    // 함수형 컴포넌트 에서는 useEffect(() 훅이 이 역할을 한다.
    console.log('1-4 componentDidMount 호출됨.');
    console.log(document.querySelector('button')?.textContent); // 권장하는 방식은 아니다.
  }

  // 2-2
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    console.log();
  }
}

export default Parent;
