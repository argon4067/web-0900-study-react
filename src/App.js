import React from 'react';
// import HomeInput from './pages/home/HomeInput';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
// import ParentContainer from './docs/day04/context/nomal/ParentContainer';
import AnimalsContainer from './docs/day04/context/expert/AnimalsContainer';
// import D from './docs/day04/context/basic/D';
// import CharContainer from './docs/day04/context/basic/CharContainer';
// import ParentContainer from './docs/day04/context/basic/ParentContainer';
// import HomeIcon from './pages/home/HomeIcon';
// import PowButton from './pages/home/PowButton';
// import Home from './pages/home/Home';
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
        <AnimalsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
