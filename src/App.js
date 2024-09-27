import React from 'react';
// import HomeInput from './pages/home/HomeInput';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import Counter from './docs/day05/zustand/Counter';
import Form from './docs/day05/form/Form';


// 모든 태그는 함수로 선언
// DOM은 하나로 선언
// export default로 외부로 
// 이게 하나의 component 

// 컴포넌트 규칙 : 앞글자가 대문자

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <ParentContainer /> */}
        {/* <CharContainer /> */}
        {/* <ParentContainer /> */}
        {/* <AnimalsContainer /> */}
      
        {/* <Counter /> */}
        {/* <FontContainer /> */}
        {/* <Counter /> */}
        <Form />
        
      </ThemeProvider>
    </>
  );
}

export default App;
