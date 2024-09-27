import { createAction, handleActions } from 'redux-actions';

// 덕스 패턴

// type 생성 (바뀌지않기 때문에 상수)
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action 생성 (밖에서 쓸꺼니까 export)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기값 생성 
const initialState = {
  number : 0
}

//  reducer 제작 (훅 함수의 경우)
// const reducer = (state, action) => {
//   switch(action){
//     case INCREASE :
//       action.setNumber(state.number + 1)
//     case DECREASE :
//       action.setNumber(state.number - 1)
//   }
// }


// reducer
const count = handleActions({
  // 안에서 분기처리
  [INCREASE] : (state,action) => ({number : parseInt(state.number) + parseInt(action.payload) }),
  [DECREASE] : (state,action) => ({number : parseInt(state.number) - parseInt(action.payload) }),
}, initialState)

export default count;
