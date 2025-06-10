import { useForm } from "react-hook-form";

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  fontWeight: 'bold',
};

interface User {
  name: string;
  email: string;
  cellphone: string;
}

// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 휴대폰 검증 정규식
const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  // 검증 완료시 실행할 코드
  const onSubmitHandler = (user: User) => {
    console.log('서버에 전송...', user);
  };

  return (
    <>
      <h1>16 회원가입 입력값 검증 (feat. react-hook-form)</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">*이름</label>
        <input id="name"
          { ...register('name', {
            required: ''
          }) }
        /><br />
        <div style={errorStyle}>{ errors.name?.message }</div>

        <label htmlFor="email">*이메일</label>
        <input id="email"
          { ...register('email', {}) }
        /><br />
        <div style={errorStyle}>{ errors.email?.message }</div>

        <label htmlFor="cellphone">*휴대폰</label>
        <input id="cellphone"
          { ...register('email', {}) }
        /><br />
        <div style={errorStyle}>{ errors.cellphone?.message }</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: {user.name}<br />
        이메일: {user.email}<br />
        휴대폰: {user.cellphone}<br />
      </p>
    </>
  );  
}

export default App
