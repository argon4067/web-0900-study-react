import React from 'react';
import { FontSizeConsumer } from './FontContext';

const ContextComponent = () => {
  return (
    <div>
      <FontSizeConsumer>
        {
          (context)=> {
            
            console.log(context)
            return (
              <>
              {/* context에 들어가 있는 value 메서드로 글자크기 0.3rem으로 변경 */}
              {/* context에 들어가 있는 value값으로 p태그의 글자 크기 변경 */}
              <p style={{fontSize : context.state.fontSize}}>안녕하세요 컨테스트 컴포넌트입니다.😀</p>
              <button onClick={() => {context.action.setFontSize("0.3rem")}}>글자 크기 변경 버튼</button>
              </>
            )
          }}
      </FontSizeConsumer>
    </div>
  );
};

export default ContextComponent;