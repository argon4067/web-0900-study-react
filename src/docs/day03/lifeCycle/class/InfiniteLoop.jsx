import React, { Component } from 'react';
// 요청하고 비동기화된 데이터가 들어와서 다시 리랜더링하고 요청하고~ 무한

//https://jsonplaceholder.typicode.com/users
class InfiniteLoop extends Component {

  state = {
    users : []
  }


  componentDidMount = () => {

    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json()
      console.log("리랜더링")
      return datas;

    }
     getDatas().then((datas) => this.setState({users : datas}));

  }

  render() {

    const {users} = this.state;

    // const getDatas = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const datas = await response.json()
    //   console.log("리랜더링")
    //   return datas;
    // }

    return (
      <div>
        {users.map((user, i) => <li key={i}>{user.name}</li>)}
      </div>
    );
  }
}

export default InfiniteLoop;