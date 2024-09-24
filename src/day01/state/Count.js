import React, { useState } from 'react';
//  대빵뺴고는 {}(객체)쳐서 가져오기
// hook 함수 = use어쩌구
//             useState

const Count = () => {
  // const [변수명, setter메서드] = useState(초기값)
  const [number, setNumber] = useState(0)

  const decrease = () => {
    setNumber(number -1)
  }
  const increase = () => {
    setNumber(number +1)
  }
  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      <p>{number}</p>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Count;