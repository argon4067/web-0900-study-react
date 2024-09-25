import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  constructor(props){
    super(props);
    console.log("constructor", props);
  }

  // static은 컴파일러가 올려줌
  //
  static getDerivedStateFromProps(nextprops, prevState) {
    console.log("getDerivedStateFromProps", nextprops, prevState);
    if(nextprops.color !== prevState.color){
      return {color : nextprops.color}
    }
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount")
  }



  shouldComponentUpdate(nextprops, nextState){
    console.log("shouldComponentUpdate", nextprops, nextState)
    return nextState.number % 5 !== 0;
  }

  colorRef =null;

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    if(prevProps.color !== this.props.color){
      return this.colorRef.style.backgroundColor;
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    if(prevState){console.log(`업데이트 직전 state: ${prevState}`)}
    if(snapShot){console.log(`업데이트 직전 snapshot: ${snapShot}`)}
  }

  render() {
    return (
      <div>
        <div
        ref={(el) => this.colorRef =el}
        style ={{
          width : "100px",
          height : "100px",
          backgroundColor : this.state.color,
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          color : "#fff"
        }}
        >
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>+1 증가</button>
      </div>
    );
  }
}

export default LifeCycleComponent;