import React, { useEffect, useState } from 'react';
// https://jsonplaceholder.typicode.com/users
// fetch로 요청 후 Side-Effect를 해결 후
// 화면에 user의 name만 li태그로 출력하기

const SideEffectMount = () => {


  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json();
    return datas;
  }


  useEffect(() => {
  getUsers().then(setUsers)
  }, [])




  return (
    
    <div>
      {users.map(({name}, i) => <li key={i}>{name}</li>)}
    </div>
  );
};

export default SideEffectMount;
