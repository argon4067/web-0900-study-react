import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {

  console.log("부모(product) 랜더링🤴")

  const containerStyle = {
    width : "500px",
    height : "300px",
    margin : "20px auto"
}

const productStyle = {
    border : "1px solid ligthgray",
    padding : "30px",
    lineHeight : "1.3"
}

const divStyle = {
    border : "1px solid blue",
    height : "60px",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center",
    marginTop : "20px",
    padding : "20px"
}

const pStyle = {
    lineHeight : "0"
}

const buttonStyle = {
    width : "40px",
    height : "40px",
}

  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState(0);

  // 메모리에 캐시값을 올림
  // 연산 분리(사이드 이펙트 제거)
  // 결론 : 좋다고 다 때려박지 말라
   const amountMemo = useMemo(() =>{
    console.log("amount 연산!"); return amount
  }, [amount])

  const couponMemo = useMemo(() =>{
    console.log("coupon 연산!"); return coupon
  }, [coupon])

  const props= {amount : amountMemo, coupon : couponMemo}
  
  // useCallback()사용
  // 함수라서 
  // 어떤 의존성 배열의 값이 바뀌였을 때만 이 함수안의 로직이 메모리에 할당
  const onClickToAddAmount = useCallback(() => {
    setAmount(amount + 1)
  }, [amount])
 
  const onClickToSubtractAmount = useCallback (() => {
    setAmount(amount - 1)
  }, [amount])

  const onClickToAddCoupon = useCallback (() => {
    setCoupon(coupon + 1)
  }, [coupon])

  const onClickToSubtractCoupon = useCallback (() => {
    setCoupon(coupon - 1)
  }, [coupon])

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 해리포터와 불사조의 치킨 기사단</p>
        <button onClick={() => {setLike(like + 1) }}>좋아요👍 {like}</button>
        <Amount
          props={props}
          divStyle={divStyle}
          pStyle={pStyle}
          buttonStyle={buttonStyle}
          onClickToAddAmount={onClickToAddAmount}
          onClickToAddCoupon={onClickToAddCoupon}
          onClickToSubtractAmount={onClickToSubtractAmount}
          onClickToSubtractCoupon={onClickToSubtractCoupon}
        
        />
      </div>
    </div>
  );
};

export default ProductContainer;