import React from 'react';
import BasicButton from '../../components/button/BasicButton';

const PowButton = () => {
  return (
    <div>
      <p>powpow 컴포넌트 테스트 버튼</p>
      <BasicButton variant={"primary"} shape={"large"} size={"large"} border={"gray300"} color={"white"} font={"h7"}>구매하기</BasicButton>
      <BasicButton variant={"sub"}>구매하기</BasicButton>
    </div>
  );
};

export default PowButton;