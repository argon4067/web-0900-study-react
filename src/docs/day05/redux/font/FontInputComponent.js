import React from 'react';
import useInput from '../../../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../../../modules/font';

const FontInputComponent = () => {
  // 2번 실습
  
  const fontSize = useSelector((state) => state.font.inputFontSize);
  const [value, onChageValue] = useInput("");

  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{fontSize}}>재미있는 리덕스2 😁</h1>
      <input type="text" value={value} onChange={onChageValue}/>
      <button onClick={() => { dispatch(increase(value)) }}>입력한 값으로 커져라!</button>
    </div>
  );
};

export default FontInputComponent;