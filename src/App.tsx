import { useState } from "react";

function App() {
  /* usestate => hook
  useState는 가장 기본적인 hook이며 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다 */
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickname} onChange={onChangeNickname} />

      <div>
        <p>이름: {name}</p>
        <p>별명: {nickname}</p>
      </div>
    </div>
  )
}

export default App;