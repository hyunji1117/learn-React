interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to }: MyLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // 기본 링크 동작 방지

    // History API를 사용하여 페이지 이동
    history.pushState(null, '', to); // 페이지 이동을 위해 history.push 사용

    // url 변경되었음을 알리는 popstate 이벤트를 수동으로 발생
    // app 컴포넌트에서 이 이벤트를 감지해서 url에 맞는 화면을 리렌더링한다. (위에 있는 링크 기능은 부모를 리렌더링 할 수 없다.)
    // event를 수동으로 발생시킬 떄 사용 : dispatchEvent > App 컴포넌트에서 감지할 것이다.
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default MyLink;
