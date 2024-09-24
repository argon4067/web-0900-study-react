// 


import React, { useState, useRef } from 'react';

const Color = () => {
      // const [변수명, setter메서드] = useState(초기값)
      const [color, setColor] = useState("");
      const [result, setResult] = useState("");
      
      const inputRef = useRef();
      const textReset =() => {
        inputRef.current.value="";
      }
      

      const Change = (e) => {
        if(e.target.value === "핑크색"){ setColor("") };
        setResult(e.target.value)
      }
      
      const setBlue = () => {
        setColor("blue")
      }
      const setRed = () => {
        setColor("red")
      }


  return (
    <div>
      <p style ={{color}}>{result}</p>
      <input ref={inputRef} type="text" placeholder="색깔을 입력하세요" onChange={Change} />
      <button onClick={setRed}>빨간색</button>
      <button onClick={setBlue}>파란색</button>      
      <button onClick={textReset}>값 초기화</button>
    </div>
  );
};

export default Color;