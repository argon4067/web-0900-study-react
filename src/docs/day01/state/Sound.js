import React, { useState } from 'react';

// 실습
// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 울음소리가 나오도록 구현하기

const Sound = () => {
    // const [변수명, setter메서드] = useState(초기값)
    const [string, setString] = useState("");
  
    const dogSound = () => {
      setString("멍멍")
    }
    const catSound = () => {
      setString("야옹")
    }
  return (
    <div>
      <button onClick={dogSound}>강아지 버튼🐶</button>
      <p>{string}</p>
      <button onClick={catSound}>고양이 버튼🐱</button>
      </div>
    
  );
};

export default Sound;