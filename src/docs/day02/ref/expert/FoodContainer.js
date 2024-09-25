// POWPOW 장바구니 알고리즘(CRUD)


import React, { useRef, useState } from 'react';

// react에서는 새로운 배열아니면 상태가 안바뀌니까 push()말고 concat()을 쓰자.


// 50분
const FoodContainer = () => {

  // input에 입력한 값을 추가 버튼을 눌렀을 때 foods로 추가!
  // input은 2개 -> useRef()
  const [foods, setFoods] = useState([]);
  const inputRef = useRef([]);
  
  const onClickToAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value
      })
    )
    // 추가 될때도 checked 생성
    setChecked(checked.concat(false))
  }

  // foods랑 check의 방 수를 맞춰서 index로 비교하기
  const [checked, setChecked] = useState([]);

  const onChangeCheckbox = (i) => {
    // splice i번째 부터 1개, 새로운 배열 수정
    checked.splice(i, 1, !checked[i]);
    setChecked(checked.concat())
  }

  // 삭제
  const onClickToRemoveFood = () => {
    // 필터로 false인것만 남기기 (true 삭제)
    setFoods( foods.filter((food, i) => !checked[i]))
    // foods의 길이만큼 false로 채우기
    setChecked( new Array(foods.length).fill(false));
  }

  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input 
        type="checkbox" 
        onChange={() => { onChangeCheckbox(i) }} 
        checked={checked[i]}
      />
      {kor} ({eng})
    </li>
  ));

  return (
    <div>
      <div>
        <input type="text" ref={(el) => inputRef.current[0] = el} placeholder='한국 음식이름' />
        <input type="text" ref={(el) => inputRef.current[1] = el} placeholder='영어 음식이름' />
      </div>
      <div>
        <button onClick={onClickToAddFood}>추가</button>
        <button onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default FoodContainer;