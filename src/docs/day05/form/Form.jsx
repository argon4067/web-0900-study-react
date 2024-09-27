import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

  // console.log(useForm());

  // register : 값을 전달해주는 함수
  // formState : form의 현태 상태값 받는 함수
  // errors : form에서 생기는 error를 갖는 함수
  // isSubmitted : 한번이라도 클릭했다면 true 함수
  // isSubmitting : 값이 제출중일 때 버튼을 활성화 시키는 함수
  //  getValues : form 태그내에서 가져오기
  // ex) <button disabled={isSubmitting}>전송</button>
  const { register, handleSubmit, getValues, formState : {isSubmitting, isSubmitted, errors }} = useForm({mode:"onChange"});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //                         숫자포함,       소문자포함             8글자이상
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;


  //                              data -> 사용자가 제출한 데이터 중 검증된 데이터
  return (
    <form onSubmit={handleSubmit(async (data) => {
      // console.log(data)
      // REST API
      
      // CRUD(Read), get 요청
      // await fetch("http://localhost:4000/user")
      // .then((response) => response.json())
      // .then(console.log)
      // .catch(console.error)

      // CRUD(Create), post 요청
      // fetch("경로", {옵션})
      await fetch("http://localhost:4000/user" , {
        method : 'POST',
        headers : {
          'Content-Type' : "applcation/json"
        },
        body : JSON.stringify({
          id : 2,
          email : data.email,
          password : data.password
        })
      })
      .then((response) => response.json())
      .then(console.log)
      .catch(console.error)





}) }>
      <label>
        <p>이메일</p>
        <input type='text' id='email' placeholder ='아이디를 입력하세요.'
          {...register("email", {
            required : true,
            pattern : {
              value :emailRegex,
            }
          })}
        />
        
        {/* 있을떄만 접근 */}
        {errors && errors?.email?.type === "required" && (
          <p>이메일을 입력하세요</p>
        )}
                {errors && errors?.email?.type === "pattern" && (
          <p>이메일 양식에 맞게 입력해라.</p>
        )}
      </label>

      {/* 비밀번호 로직 만들기 */}
      <label>
        <p>비밀번호</p>
        <input type='password' id='password' placeholder='비밀번호를 입력하세요.' autoComplete="off" 
        {...register("password", {
          required :true,
          pattern : {
            value : passwordRegex,
          }
        })}
      />
        {/* 있을떄만 접근 */}
        {errors && errors?.password?.type === "required" && (
          <p>비밀번호를 입력하세요</p>
        )}
        {errors && errors?.password?.type === "pattern" && (
          <p>비밀번호 양식에 맞게 입력해라.</p>
        )}



      </label>

        {/* 비밀번호 로직 만들기 */}
        <label>
        <p>비밀번호 확인</p>
        <input type='password' id='passwordConfirm' placeholder='비밀번호를 입력하세요.' autoComplete="off" 
        {...register("passwordConfirm", {
          required :true,
          validate : {
            matchPassword : (passwordConfirm) => {
              const { password } = getValues();
              console.log(password, passwordConfirm, password === passwordConfirm );
              return password === passwordConfirm;
            }
          }
        })}
      />
        {/* 있을떄만 접근 */}
        {errors && errors?.passwordConfirm && (
          <p>비밀번호 불일치</p>
        )}



      </label>

      {/* 체크박스 */}

      <div>
        <p>취미</p>
        
        <label>
          <span>축구</span><input name="hobby" type='checkbox' value="축구" {...register("hobbies")}/>
        </label>
        <label>
          <span>야구</span><input name="hobby" type='checkbox' value="야구" {...register("hobbies")}/>
        </label>
        <label>
          <span>농구</span><input name="hobby" type='checkbox' value="농구" {...register("hobbies")}/>
        </label>
        <label>
          <span>배구</span><input name="hobby" type='checkbox' value="배구" {...register("hobbies")}/>
        </label>
        
        </div>



      <button disabled={isSubmitting}>회원가입</button>
    </form>
  );
};

export default Form;