// 1.초기 값 생성

import { createContext, useState } from "react";

// createContext({})
export const FontSizeContext = createContext({
  state : {
    fontSize : "",
    color : "",
    width : "",
    height : ""
  },
  // 초기값
  // 상태를 바꿔야 리랜더링됨
  action : {
    setFontSize : () => {},
    setColor : () => {},
    setWidth : () => {},
    setHeight : () => {},
  }
})

// 2.Provider 제공
// 컴포넌트 방식으로 만든다. (props.children) 같은거 ({children})
const FontSizeProvider = ({children}) => {


  const [fontSize, setFontSize] = useState("1rem");
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const value = {
    state : {
      fontSize,
      color,
      width,
      height,
    },
    action : {
      setFontSize,
      setColor,
      setWidth,
      setHeight,
    }
  }

  return (
    <FontSizeContext.Provider value={value}>
    {children}
    </FontSizeContext.Provider>
  )
}

export default FontSizeProvider;