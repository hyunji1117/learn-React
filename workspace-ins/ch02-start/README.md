# 2장 React 시작하기
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#02>

# 1. React란?
* Meta(구 Facebook)에서 개발한 오픈소스 자바스크립트 라이브러리
* 사용자 인터페이스(UI)를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리
* 컴포넌트 기반의 프론트엔드 라이브러리

## 1.1 SPA 개발
* SPA의 단점을 보완하여 SPA 개발에 도움을 주는 다양한 기술을 도입

### 1.1.1 SPA의 단점
* 모든 기능을 한 페이지에서 처리하다 보니 상태 관리가 복잡함
* JavaScript에서 HTML을 생성해야 하므로 개발 생산성이 떨어짐
* 브라우저의 DOM을 빈번히 갱신하면 성능 저하가 발생

### 1.1.2 React의 장점 (SPA의 단점 보완)
* 컴포넌트별로 상태 관리가 용이하고, 전역 상태 관리를 지원하는 서드파티 라이브러리가 많음
* JSX를 통해 HTML 생성이 간편함
* 가상 DOM을 사용해 성능 저하를 최소화함

## 1.2 주요 특징
### 1.2.1 컴포넌트 기반 개발
* UI를 재사용 가능한 독립적인 컴포넌트로 분할
* 각 컴포넌트는 자체 상태와 로직을 가질 수 있음
* 컴포넌트의 조합으로 복잡한 UI 구현 가능
* 컴포넌트는 자바스크립트로 개발되며 코드 재사용성과 유지보수성 향상

### 1.2.2 상태 관리와 단방향 데이터 바인딩
* 각 컴포넌트는 내부에서 상태 관리 기능을 제공(useState())
* 전역 상태 관리를 위한 라이브러리(Context API, Redux, MobX, Recoil, Zustand 등)를 사용할 수 있음
* 상태 변경 시 뷰(UI, HTML)가 자동으로 렌더링됨
* 단방향 데이터 바인딩: State -> View, View -> Event Handler -> setState() -> State
  - View의 변경은 직접 State를 수정하지 않고 Event Handler를 통해서만 변경 가능하여 이는 상태 변경 과정을 예측하고 추적하기 용이하게 만듬

### 1.2.3 JSX (Javascript XML)
* HTML 마크업과 비슷한 문법을 사용해서 UI를 정의하면 Babel, ESBuild 같은 변환 도구에 의해 자바스크립트 코드로 변환됨
  ```html
  <div class="todolist">
    <ul>
      <li>두부</li>
      <li>계란</li>
      <li>라면</li>
    </ul>
  </div>
  ```
  ```js
  /*#__PURE__*/_jsx("div", {
    class: "todolist",
    children: /*#__PURE__*/_jsxs("ul", {
      children: [/*#__PURE__*/_jsx("li", {
        children: "\uB450\uBD80"
      }), /*#__PURE__*/_jsx("li", {
        children: "\uACC4\uB780"
      }), /*#__PURE__*/_jsx("li", {
        children: "\uB77C\uBA74"
      })]
    })
  });
  ```

### 1.2.4 가상 DOM (Virtual DOM)
* 브라우저 DOM과 유사한 트리 구조를 갖는 가벼운 복사본(자바스크립트 객체)

#### 리렌더링과 가상 DOM
* 상태 변경 시 뷰를 리렌더링할 때, 브라우저 DOM에 바로 적용하지 않고 가상 DOM을 먼저 수정
* 수정 전후의 가상 DOM을 비교하여(Diffing) 바뀐 부분만 실제 브라우저 DOM에 반영(Reconciliation)
* 불필요한 DOM 조작을 최소화하여 성능 최적화

#### DOM API를 이용한 화면 갱신
* 수정된 부분만 찾아서 갱신
  - 장점: 화면 렌더링을 최소화하여 성능이 좋음
  - 단점: 기존 데이터와 새로운 데이터를 비교하여 달라진 부분을 확인하고 해당 요소를 DOM에서 찾아 갱신해야 하므로 코드가 복잡해짐
* 관련 영역 전체를 갱신
  - 장점: 기존 요소를 지우고 새로운 데이터로 전체를 교체하면 되므로, 기존 데이터와 비교하거나 수정된 부분을 찾아서 갱신할 필요가 없어 코드가 간결해짐
  - 단점: 필요한 부분만 수정할 수 있는데도 관련 영역 전체를 다시 렌더링하므로 성능 이슈가 발생할 수 있음

#### 가상 DOM 이용
* 새로운 데이터를 기반으로 생성된 가상 DOM과 기존 DOM을 비교하여 바뀐 부분만 찾아서 브라우저 DOM을 갱신하므로 성능에 유리함
* 리렌더링 작업은 React가 담당하므로 코드가 간결해짐

# 2. React 개발 환경 구축
## 2.1 프론트엔드 빌드 도구
* 프론트엔드 개발에 필요한 환경을 자동으로 구축해주는 도구
  - 보일러플레이트(Boilerplate) 코드 제공
    + 반복적으로 자주 사용되는 프로젝트의 기본 구조 제공
    + 프로젝트 설정 파일 자동 구성
    + 필요한 라이브러리 설치
  - HMR(Hot Module Replacement): 개발 중 소스 코드를 수정하면 컴포넌트가 자동으로 리로딩되어 브라우저를 새로고침하지 않고도 바로 화면에 적용됨
  - 프로덕션 배포를 위한 번들링 기능 제공
    + 번들링: 여러 자바스크립트 파일을 하나 또는 몇개의 파일로 묶는 작업(Webpack, Rollup, Parcel, Esbuild 등)

### 2.1.1 Vite
* 프랑스어로 "빠르다"는 뜻
* Webpack을 번들러로 사용하는 CRA(create-react-app) 대비 ESBuild(개발용)와 Rollup(프로덕션 빌드)을 번들러로 사용하면서 10~100배 빠른 속도로 개발 서버 구동
* Vanilla JS 뿐만 아니라 React, Svelte, Solid 등의 다양한 SPA 개발 환경을 지원
* workspace/ch02-start 폴더로 이동 후 다음 명령 실행
  ```sh
  npm init vite@latest
  # 또는
  npm init vite@6
  ```
  - 프로젝트 명: 09
  - 개발환경 선택: React
  - 개발언어 선택: TypeScript

  ```sh
  # 생성한 프로젝트 폴더로 이동
  cd 09
  # 필요 패키지 설치
  npm i
  # 개발 서버 실행
  npm run dev
  ```

* npm init vite에서 vite는 initializer이며 create- 접두사로 시작하는 Node.js 모듈을 이용해 프로젝트의 초기 구성을 해줌
  - npm init vite
    + npx create-vite 실행
  - npm create vite
    + create는 init의 별칭
  - npm init vite == npm create vite == npx create-vite

#### vite.config.js
*  Vite 설정파일
  - 참고: <https://ko.vitejs.dev/config>
* import에서 사용할 alias 추가
  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@", replacement: "/src" },
        { find: "@components", replacement: "/src/components" },
        { find: "@pages", replacement: "/src/pages" },
      ],
    },
  })
  ```

#### VSCode에서 alias 인식
* 프로젝트 루트의 tsconfig.app.json 파일에 추가
  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"],
        "@components/*": ["src/components/*"],
        "@pages/*": ["src/pages/*"],
      },
    }
  }
  ```

#### VSCode에서 alias를 기준 import 자동 완성 설정
* VSCode > File > Preferences > Settings > Import Module Specifier 검색
  - JavaScript › Preferences: Import Module Specifier 항목의 Preferred path style for auto imports. 값을 non-relative 로 지정
  - TypeScript › Preferences: Import Module Specifier 항목의 Preferred path style for auto imports. 값을 non-relative 로 지정

# 3. React 애플리케이션 배포
## 3.1 프로젝트 빌드
* 프로덕션 배포용 파일 생성
  ```sh
  npm run build
  ```
* 프로젝트 빌드
  - dist 폴더에 프로덕션 배포용 파일 생성
  - JSX 문법을 Javascript 코드로 변환
  - 트랜스파일링: ES6+ 문법을 지원하지 않는 구 버전의 브라우저를 위해 ES5 수준의 코드로 변환
  - 압축: 주석 제거, 변수명 축약, 화이트 스페이스 제거
  - 번들링: 여러 자바스크립트 파일을 하나 또는 몇개의 파일로 묶는 작업 (Webpack, Rollup, Parcel, Esbuild 등)
  - 트리 쉐이킹: 번들링 과정에서 불필요한 코드(사용하지 않는 함수나 모듈)를 식별하고 제거
  - css 파일도 번들링, 압축됨

## 3.2 빌드된 파일로 서버 실행
* Vite
  ```sh
  npm run preview
  ```

# 4. JSX

## 4.1 JSX란?
* JSX(JavaScript XML)는 자바스크립트 파일 내에 HTML과 유사한 마크업을 작성할 수 있게 해주는 자바스크립트 확장 구문
* React에서 사용할 목적으로 개발되기는 했지만 JSX가 React에 포함된 기술은 아니기 때문에 React에서 JSX 사용이 필수는 아님
  - `React.createElement()` 직접 사용

## 4.2 JSX 규칙
1 단일 루트 요소를 반환해야 한다.
* JSX는 자바스크립트 객체로 변환되는데 함수가 여러 객체를 반환 할 수 없으므로 단일 객체를 반환하도록 해야함
* 만약 단일 요소를 반환하지 않을 경우 `Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?` 에러 발생
  
  ```jsx
  return (
    <h1>Todo List</h1>
    <div>...</div>
  );
  ```

* 루트 요소를 추가
  ```jsx
  return (
    <div>
      <h1>Todo List</h1>
      <div>...</div>
    </div>
  );
  ```

* Fragment 사용
  - 렌더링 결과에는 영향을 미치지 않음

  ```jsx
  return (
    <Fragment>
      <h1>Todo List</h1>
      <div>...</div>
    </Fragment>
  );
  ```

* Fragment의 약어 사용
  ```jsx
  return (
    <>
      <h1>Todo List</h1>
      <div>...</div>
    </>
  );
  ```

2 모든 태그는 닫는다.
* HTML에서는 닫는 태그를 생략 할 수 있지만 JSX는 XML과 유사한 문법이므로 닫는 태그를 항상 작성해야 함
  - HTML 예시
    ```html
    <img src="./logo.png">
    <br>
    <ul>
      <li>두부
      <li>계란
      <li>라면
    </ul>
    ```

  - JSX 예시
    ```html
    <img src="./logo.png" />
    <br />
    <ul>
      <li>두부</li>
      <li>계란</li>
      <li>라면</li>
    </ul>
    ```

3 요소의 속성명은 카멜 표기법(camel case)을 준수해야 한다.
* 속성명은 HTML 표준 속성명이 아닌 DOM API 스펙에 기반을 둠
  - `stroke-width` -> `strokeWidth`
  - `onclick` -> `onClick`
  - `onkeyup` -> `onKeyUp`

* HTML에서 `class` 속성 추가
  ```html
  <div id="todolist" class="todo"></div>
  ```

* 자바스크립트에서 `class` 속성 추가
  ```js
  document.querySelector('#todolist').className = 'todo';
  ```

* JSX에서 `class` 속성 추가
  ```html
  <div id="todolist" className="todo"></div>
  ```

* JSX에서 `class` 속성을 동적으로 추가
  ```jsx
  const todoClass = 'todo';
  <div id="todolist" className={ todoClass }></div>
  ```

* 자바스크립트 예약어라 충돌을 피하기 위해 속성명 자체가 바뀐 경우
  - `class` -> `className`
  - `for` -> `htmlFor`

4 보간법{ }을 사용할 때에는 표현식을 사용해야 함
* { } 안에는 변수값, 메서드 리턴값 등 값만 사용 가능
* `if` 문, `for` 문 등은 사용할 수 없음
  - `if` 문 대신 삼항 연산자 사용
    ```jsx
    { item.done ? <s>두부</s> : '두부' }
    ```
  - `for` 문 대신 `forEach()`, `map()` 등 사용
    ```jsx
    {
      for(let i=0; i<itemList.length; i++){
        return item.title;
      }
    }
    ```
    ```jsx
    { itemList.map(item => item.title) }
    ```

5 보간된 HTML 문자열은 인코딩됨
* { } 내부의 값이 HTML 코드가 포함된 문자열인 경우 HTML 태그를 인코딩해서 처리하므로 브라우저에는 태그가 그대로 보여짐
  - XSS (Cross Site Scripting) 같은 공격에 대비하기 위한 규칙

* 예시
  ```jsx
  const App(){
    const msg = '<i>World</i>';
    return <span>Hello { msg }</span>
  }
  // 만들어지는 문자열: <span>Hello &lt;i&gt;World&lt;/i&gt;</span>
  ```
* 실행 결과
  - <span>Hello &lt;i&gt;World&lt;/i&gt;</span>
* 해결 방법
  1. dangerouslySetInnerHTML 속성을 사용하면 HTML 태그를 인코딩하지 않음
    ```jsx
    const App(){
      // { msg }를 <span dangerouslySetInnerHTML={{ __html: msg }}></span>로 변경
      const msg = '<i>World</i>';
      return <span>Hello <span dangerouslySetInnerHTML={{ __html: msg }}></span></span>
    }
    ```
  2. JSX는 XSS 공격에 안전하므로 JSX를 사용
    ```jsx
    const App(){
      // const msg = '<i>World</i>';
      const msg = <i>World</i>;
      return <span>Hello { msg }</span>
    }
    ```

# 5. 속성 (Props)
* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용
  ```jsx
  // ch02-start/todo/08.html
  function App(){
    const list = [
      { _id: 1, title: 'React 공부', done: false},
      { _id: 2, title: 'Javascript 프로젝트', done: true},
      { _id: 3, title: 'Javascript 공부', done: true},
    ];

    return (
      <div id="app">
        <div>
          <Title title="08 Simple Todo List - React Props" />
          <TodoList list={ list } />
        </div>
      </div>
    );
  }
  
  function Title({ title = 'Todo List' }){
    return (
      <div>
        <h1>{ title }</h1>
        <hr />
      </div>
    );
  }

  function TodoList({ list }){
    const itemList = list.map(item => {
      return (
        <li key={ item._id }>{ item.title } - { item.done ? '완료' : '진행중' }</li>
      );
    });

    return (
      <ul className="todolist">
        { itemList }
      </ul>
    )
  }
  ```
* 함수에 데이터를 전달할 때 인수를 사용하듯이 컴포넌트에 데이터를 전달할 때 Props를 사용
  - JSX에서 자식 컴포넌트를 HTML 태그처럼 사용할 때 HTML 태그의 속성을 지정하는 것처럼 사용
  ```jsx
  <TodoList list={ list } />
  ```
* 부모 컴포넌트가 전달한 여러 속성이 자식 컴포넌트에는 하나의 Props 객체로 전달되므로 주로 구조 분해 할당을 이용해서 필요한 속성을 바로 꺼내서 사용
```jsx
function TodoList({ list }){
  ....
}
```
* 기본값 매개변수를 사용하면 Props가 전달되지 않거나 undefined가 명시적으로 전달될 때 적용됨
  - null, 0 값은 기본값으로 대체되지 않음
* 자신이 전달받은 Props 전체를 자식 컴포넌트에 전달하고 싶을 때는 전개 연산자를 사용
  ```jsx
  function Profile(props) {
    return (
      <div>
        <Avatar { ...props } />
      </div>
    );
  }
  ```
* Props로 객체를 전달 받을 때 자식 컴포넌트가 그 값을 직접 변경하는 것은 권장하지 않음
  - React의 데이터는 부모 컴포넌트에서 자식 컴포넌트로 전달되는데 자식 컴포넌트에서 부모 컴포넌트의 데이터를 직접 수정하면 데이터의 흐름을 예측하기 어려워서 디버깅하기 어려운 오류를 만들 수 있음

# 6. 상태 (State)
* React에서는 시간이 지남에 따라 변하는 데이터를 상태라고 함
* 상태가 변경되면 해당 컴포넌트와 자식 컴포넌트가 리렌더링 됨

## 6.1 React.useState()
* 상태값(컴포넌트에서 관리하는 데이터)을 추가하기 위한 훅(Hook)

### 6.1.1 API
  ```jsx
  const [state, setState] = useState(initialState);
  ```

#### 매개변수
* initialState: 상태값의 초기값(초기 렌더링에 사용되고 리렌더링때는 무시됨)

#### 리턴값
* state: 저장된 상태값
* setState: 상태값을 변경하는 setter 함수. setter를 통해 상태가 변경되면 해당 컴포넌트는 다시 렌더링됨

### 6.1.2 useState() 특징
* 컴포넌트가 렌더링 되는 동안에만 사용할 수 있는 특별한 함수(훅, Hooks)
* 컴포넌트의 최상위 수준이나 커스텀 훅 내부에서만 사용 가능(조건문, 반복문, 일반 함수 같은 블럭{ } 내부에서는 사용 불가)
* useState가 호출되는 순서대로 React가 관리하는 배열에 저장되므로 그 값을 제대로 찾기 위해서는 리렌더링 될때에도 순서가 정확히 지켜져야 함
  - 잘못된 사용 예시
    ```jsx
    const [firstName, setFirstName] = useState('Dragon');
    if(firstName === 'Dragon'){
      const [lastName, setLastName] = useState('Gil');
    }  
    const [age, setAge] = useState(36);
    ```
* state로 만든 변수는 컴포넌트가 여러번 사용 될때에도 각각의 값을 따로 관리
  - 컴포넌트 외부에 선언한 변수는 컴포넌트가 리렌더링 되어도 값이 유지되지만 해당 컴포넌트를 여러곳에서 사용할 경우 모든 컴포넌트가 공유하는 값이 되므로 컴포넌트 내부의 상태관리에 적합하지 않음

## 6.2 상태 사용시 유의사항
* state가 변경되는 즉시 리렌더링이 되지 않고 이벤트 큐에 리렌더링 작업이 등록되므로 이벤트 핸들러의 모든 코드가 실행될 때까지 기다리게 됨
  - 이벤트 핸들러와 그 안의 코드가 완료될 때까지 UI가 업데이트되지 않는다는 의미
  - 이벤트 핸들러 내에서 상태값을 여러번 바꾼 후 읽어오면 바로 반영되지 않음
* 상태를 객체나 배열로 지정한 경우 상태를 변경하기 위해서 객체나 배열의 내부 속성을 직접 변경해도 참조 주소는 바뀌지 않으므로 React가 상태의 변경을 인지하지 못함(Object.is()를 통한 얕은 비교). 대신 새로운 객체나 배열을 생성해서 교체해야 리렌더링이 발생
  - 객체일때 같은 메모리 주소를 가지고 있으면 true
  - 두 값이 모두 undefined 이거나 null 이면 true
  - 두 값이 모두 true 이거나 false 이면 true
  - String 이라면 두 값의 글자수, 순서, 모든 글자가 같으면 true
  - Number 라면 같은 값을 가지고 있거나 둘다 NaN이면 true

## 6.3 상태의 불변성 (immutability)
* 한번 정의한 상태는 그 값이 바뀌지 않도록 한다.
  - 새로운 상태로 바꿀 때 기존 상태값을 수정하지 말고 새로운 상태값으로 교체
  - 기본 데이터타입은 불변성을 가짐
  - 참조형 데이터타입은 불변성을 가지도록 객체나 배열을 복사해서 구현
* 중첩 객체일 경우에는 불변성을 위해 수정될 속성을 포함한 객체와 그 객체를 포함하는 객체를 루트 객체까지 거슬러 올라가면서 전부 교체해야할 수 있음 
  ```json
  {
    "_id": 4,
    "email": "u1@market.com",
    "name": "불변핑",
    "phone": "01044445555",
    "address": "서울시 강남구 논현동 222",
    "type": "user",
    "createdAt": "2025.05.25 21:08:14",
    "updatedAt": "2025.06.04 09:38:14",
    "extra": {
      "birthday": "11-30",
      "addressBook": [
        {
          "id": 1,
          "name": "회사",
          "value": "서울시 강동구 천호동 123"
        },
        {
          "id": 2,
          "name": "집",
          "value": "서울시 강동구 성내동 234"
        }
      ]
    }
  }
  ```
* 배열의 불변성을 위해 피해야 할 메서드(기존 배열을 수정하는 메서드)와 추천하는 메서드(새로운 배열을 반환하는 메서드)
  - 추가: push(), unshift() 대신 concat(), [ ...arr ]
  - 삭제: pop(), shift() 대신 filter(), slice()
  - 수정: splice(), arr[i] 대신 map()
  - 정렬: reverse(), sort()를 바로 사용하지 말고 배열 복사 후 사용

* 상태의 불변성을 구현할 경우 추후 성능 최적화를 위해 메모이제이션 작업을 수행할 때 Props의 변경 여부를 얕은 비교만으로 확인 할수 있어서 렌더링 최적화에 도움 
* immer 라이브러리
  - 객체를 불변성으로 만들어주는 라이브러리
  - https://immerjs.github.io/immer 참고
  - 설치
    ```sh
    npm i immer
    ```

  - 상태의 불변성을 유지하기 위해 직접 작성한 코드 예시
    ```js
    const newAddressBook = user.extra.addressBook.map(address => {
      if(address.id === Number(e.target.name)){
        return { ...address, value: e.target.value };
      }else{
        return address;
      }
    });

    const newState = {
      ...user,
      extra: {
        ...user.extra,
        addressBook: newAddressBook
      }
    };

    setUser(newState);
    ```

  - immer 사용 예시
    ```js
    import { produce } from 'immer';
    ...
    const newState = produce(user, draft => {
      const address = draft.extra.addressBook.find(address => address.id === Number(e.target.name));
      address.value = e.target.value;
    });

    setUser(newState);
    ```

# 7. 유효성 검증
## 7.1 prop-types
* 컴포넌트에 전달된 Props의 유효성을 검증하는 기능
* 바닐라 자바스크립트 환경에서 필요하며 타입스크립트에서는 인터페이스나 타입 별칭을 사용하므로 필요 없음
* 설치
  ```sh
  npm i prop-types
  ```

* 사용 사례
  ```jsx
  import PropTypes from 'prop-types';
  import TodoItem from "./TodoItem";
  function TodoList(props){
    const list = props.itemList.map(item => <TodoItem key={ item.no } item={ item } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } />);
    return (
      <ul className="todolist">
        { list }
      </ul>
    );
  }

  TodoList.propTypes = {
    itemList: PropTypes.array.isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  export default TodoList;
  ```

  ```jsx
  import PropTypes from 'prop-types';
  function TodoItem(props){
    return (
      <li>
        <span>{ props.item.no }</span>
        <span onClick={ () => props.toggleDone(props.item.no) } >{ props.item.done ? <s>{ props.item.title }</s> : props.item.title }</span>
        <button type="button" onClick={ () => props.deleteItem(props.item.no) } >삭제</button>
      </li>
    );
  }

  TodoItem.propTypes = {
    // item: PropTypes.object.isRequired,
    item: PropTypes.shape({
      no: PropTypes.number,
      title: PropTypes.any.isRequired,
      done: PropTypes.bool
    }).isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  };

  export default TodoItem;
  ```

* 사용 방법
  ```jsx
  import PropTypes from 'prop-types';

  MyComponent.propTypes = {
    // 특정 JS 타입임을 선언(해당 속성이 전달 된다면 지정한 타입이어야 함)
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // 모든 종류의 자식 요소(React 엘리먼트, 문자, 숫자, 배열, 불린, null, undefined 등)
    optionalNode: PropTypes.node,

    // React 엘리먼트(JSX, React.createElement()로 생성된 엘리먼트)
    optionalElement: PropTypes.element,

    // React 컴포넌트(클래스 컴포넌트, 함수 컴포넌트, HTML 태그명)
    optionalElementType: PropTypes.elementType,

    // 특정 클래스의 인스턴스
    // 이 경우 JavaScript의 instanceof 연산자를 사용
    optionalMessage: PropTypes.instanceOf(Message),

    // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있음
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // 여러 종류중 하나
    optionalUnion: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Message)
    ]),

    // 특정 타입의 배열
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 특정 타입의 프로퍼티 값들을 갖는 객체
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // 지정된 타입의 속성을 가지고 있는 객체(다른 속성이 있어도 됨)
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // 지정된 타입의 속성만 가지고 있는 객체(다른 속성이 있으면 안됨)
    optionalObjectWithStrictShape: PropTypes.exact({
      name: PropTypes.string,
      quantity: PropTypes.number
    }),

    // 위에 있는 모든 구문에 'isRequired'를 연결하면 해당 속성이 필수임을 나타냄
    requiredFunc: PropTypes.func.isRequired,

    // 타입은 상관없고 필수임을 나타낼때
    requiredAny: PropTypes.any.isRequired,

    // 사용자 정의 유효성 검사기를 지정
    // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error(
          `'${componentName}' 컴포넌트의 prop '${propName}' 값 검증 실패.`
        );
      }
    },

    // 'arrayOf' 와 'objectOf'에 사용자 정의 유효성 검사기 지정
    // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
    // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출됨

    // propValue: 현재 검사 중인 prop의 값(배열이나 객체)
    // key: 현재 검사 중인 prop의 키
    // componentName: 현재 검사 중인 컴포넌트의 이름
    // location: prop이 전달된 위치 ("props" 또는 "context" 중 하나)
    // propFullName: prop의 이름
    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
      if (!/matchme/.test(propValue[key])) {
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    })
  };
  ```

## 7.2 Form의 유효성 검증
* Form 태그의 사용자의 입력 데이터를 검증
* https://www.react-hook-form.com 참고
* react-hook-form 설치
  ```sh
  npm i react-hook-form
  ```

# 8. 컴포넌트 구분

## 8.1 컨테이너 컴포넌트와 표현 컴포넌트
* 상태와 비즈니스 로직을 처리하는 컨테이너와 UI를 담당하는 컨테이너를 분리해서 설계
* 각 컴포넌트의 역할이 명확해지고 코드의 유지보수성이 향상
* 표현 컴포넌트에서는 상태 관련 로직이 제거되므로 상태 관리와 UI 로직을 분리할 수 있으며, 결과적으로 상태 추적과 디버깅이 쉬워짐

### 8.1.1 컨테이너 컴포넌트 (Container Components)
#### 정의
* 애플리케이션의 데이터와 비즈니스 로직을 처리하는 컴포넌트

#### 특징
* 상태(state) 관리
* API 호출
* 데이터 가공
* 이벤트 핸들러 정의
* 자식 컴포넌트로의 데이터 및 콜백 함수 전달
* 하위에 표현 컴포넌트를 포함하여, 이 컴포넌트들이 UI를 렌더링할 때 필요한 데이터와 동작을 제공

```jsx
// TodoContainer.jsx
function TodoContainer() {
  const [itemList, setItemList] = useState([]);
  
  const addItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };
  
  const deleteItem = (num) => {
    setItemList(itemList.filter(item => item.num !== num));
  };
  
  return (
    <TodoList 
      itemList={ itemList }
      addItem={ addItem }
      deleteItem={ deleteItem }
    />
  );
}
```

### 8.1.2 표현 컴포넌트 (Presentational Components)
#### 정의
* UI 렌더링에만 집중하는 컴포넌트

#### 특징
* props를 통해 데이터 수신
* 자체적인 상태 관리 최소화 (UI 상태만 관리)
* 스타일링에 집중
* 부모 컴포넌트로부터 전달받은 Props를 기반으로 UI만 렌더링하는 기능에만 집중하므로 구현이 단순해지고, 재사용성이 높아짐

```jsx
function TodoList({ itemList, addItem, deleteItem }) {
  const list = itemList.map(item => <TodoItem key={ item.num } item={ item } deleteItem={ deleteItem } />);
  return (
    <div className="todo-list">
      { list }
    </div>
  );
}
```