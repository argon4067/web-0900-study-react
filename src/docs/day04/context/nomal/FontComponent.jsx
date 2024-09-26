import React, { useContext } from 'react';
import { FontSizeContext } from './FontContext';

const FontComponent = () => {



  // p태그의 폰트크기는 fontSize의 초기값을 사용.
  // seContext를 사용하여 색상 변경 버튼,폰트사 사이즈 변경버튼 완성

  // useContext(FontSizeContext);
  console.log(useContext(FontSizeContext));

  // 선언
  const {state, action} = useContext(FontSizeContext)

  return (
    <div>
      <p style={ state }>최하위 컴포넌트🥰</p>
      <button onClick={() => action.setColor("pink")}>색상 변경 버튼</button>
      <button onClick={() => action.setFontSize("0.3rem")}>폰트사이즈 변경 버튼-</button>
      <button onClick={() => action.setFontSize("1rem")}>폰트사이즈 변경 버튼+</button>
      <button onClick={() => {action.setWidth("100px"); action.setHeight("100px")}}>사이즈 변경 버튼+</button>
      <button onClick={() => {action.setWidth("40px"); action.setHeight("40px")}}>사이즈 변경 버튼-</button>

    </div>
  );
};

export default FontComponent;