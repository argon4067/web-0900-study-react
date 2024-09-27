import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import useInput from '../../../../hooks/useInput';
import { big } from '../../../../modules/font';

const FontButtonComponent = () => {
  // 1번 실습

  // const font = useSelector((state) => state.font);
  const fontSize = useSelector((state) => state.font.fontSize);

  const dispatch = useDispatch();

  

  return (
    <div>
      <h1 style={{fontSize}}>재미있는 redux!😎</h1>
      <button onClick={() => {dispatch( big() ) }}>커지는 버튼</button>
    </div>
  );
};

export default FontButtonComponent;