// import React from 'react';
import { createAction, handleActions } from 'redux-actions';

// 타입 생성
const INCREASE = "font/INCREASE";
const BIG = "font/BIG";

// 액션 생성
export const increase = createAction(INCREASE);
export const big = createAction(BIG);

// 초기값 생성
const initialState = {
  fontSize : "1rem",
  inputFontSize : "1rem",
}
// 리듀서 생성
const font = handleActions({
  [BIG] : (state, action) => ({...state, fontSize : "3rem"}),
  [INCREASE] : (state, action) => ({...state, inputFontSize :action.payload}),
}, initialState)



export default font;



