//컴포넌트를 만들어서
//여러분의 이름과 나이, 만나이(나이-1)를 화면 출력하기!
import React from "react";

export default function Jsx03() {
  const name="최도윤";
  const age="28";


  //<React.Fragment>
  // </React.Fragment>
  // 는
  // <>
  // </>
  // 와 같다.
  return (
    <React.Fragment>
      <h1>저의 이름은 {name}이고 나이는 {age}이며 만 나이는 {age-2}살입니다. </h1>
      </React.Fragment>
  )
}
