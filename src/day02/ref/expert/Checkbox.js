import React, { useState } from 'react';

// 바벨 ES5로 바꿔주는 문법
// 실제 배포를 하기위해서 모던 자바스크립트 문법이 변경되어야 한다.
// 서버 배포시 ES6로 변경되기 때문에 ES5 문법을 리액트에서 권장한다.





// 불변성 유지
// 원시타입은 불변성 유지를 해줘야한다.
// 주소가 그대로면 상태가 바뀌였다고 판단하지 않음
// ES6 -> ES5 : 바벨작업
const Checkbox = () => {
  const [message, setMessage] = useState([]);

  const onClickTOCheckbox = (e) => {
    let value = e.target.value;
    if(e.target.Checked){
      // 바벨작업이 필요함
      // setMessage([...message, value])
      setMessage(message.concat(value))
    }else{
      setMessage(message.filter((m) => m !== value))
    }
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" onClick={onClickTOCheckbox} value="front-end" />
      </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" onClick={onClickTOCheckbox} value="back-end" />
      </div>
      <div>
        <span>ai</span>
        <input type="checkbox" onClick={onClickTOCheckbox} value="ai" />
      </div>

      <div>
        <h1>{message.map((m, i) => <p key={i}>{m}</p>)}</h1>
      </div>
    </div>
  );
};

export default Checkbox;