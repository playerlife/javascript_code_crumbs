import React, { Component } from 'react'


export default class LoginDemo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { bigTitle: "bigTitle", smallTitle: "smallTitle", username: "", password: '' };
    this.formRef = React.createRef();
    this.LoginFormRef = React.createRef();
  }

  // getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
  // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
  static getDerivedStateFromProps(props, state) {
    console.log(props, state, 'getDerivedStateFromProps');
    return true;
  }

  // getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。
  // 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
  // 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, 'getSnapshotBeforeUpdate');
    return null;
  }
  componentDidCatch() {

  }

  componentDidMount() {


    setTimeout(() => {
      this.setState((state, props) => {
        console.log(state, props, 'setState');
        return { bigTitle: "new ", smallTitle: "creat new title" }
      })
      this.forceUpdate();
    }, 1000)


    let that = this;
    setTimeout(function () {
    }, 1000)

  }

  componentDidUpdate() {

  }
  componentWillUnmount() {

  }

  shouldComponentUpdate() {
    return true;
  }

  submitHandler = () => {
    console.log(this.LoginFormRef.current.state, '-------')
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }


  onUserChange = (username) => {
    this.setState({ username: username });
  }

  onPassChange = (password) => {
    this.setState({ password: password });
  }


  render() {
    return (
      <form method="post" ref={this.formRef} >
        <div style={{ width: 500, height: 300, border: '1px solid #ccc', margin: 'auto' }}>
          <Header bigTitle={this.state.bigTitle} smallTitle={this.state.smallTitle} />
          <LoginForm ref={this.LoginFormRef} onUserChange={this.onUserChange} onPassChange={this.onPassChange} />
          <LoginButton onLoginClick={this.submitHandler} />
        </div>
      </form>);

  }
}


class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <h1>{this.props.bigTitle}</h1>
        <h3>{this.props.smallTitle}</h3>
      </>

    );
  }
}

class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.inputRef2 = React.createRef();
    this.state = { username: "", password: "" };

  }

  componentDidMount() {
    console.log('=====>', this.inputRef);
    console.log('====>2', this.inputRef2);

    // this.inputRef.current.focus();

  }

  setUserName = (username) => {
    this.setState({ username: username })
  }

  setPassword = (password) => {
    this.setState({ password: password })
  }

  render() {
    return (
      <>
        <UserInput setUserName={this.setUserName} onUserChange={this.props.onUserChange} username={this.state.username} type={'text'} ref={this.inputRef} />
        <UserInput setPassword={this.foo2} onPassChange={this.props.onPassChange} password={this.state.password} type={'password'} ref={this.inputRef2} />
      </>
    );
  }
}


class UserInput extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  onInputChange = (e) => {
    console.log(e.target);

    if (e.target.type === 'text') {
      this.props.onUserChange(e.target.value)
      this.props.setUserName(e.target.value)
      // this.props.username = e.target.value;
    } else {
      this.props.onPassChange(e.target.value);
      this.props.setPassword(e.target.value)
      // this.props.password = e.target.value;
    }



    this.setState({ inputValue: e.target.value });
    this.setState((state, props) => {
      return { inputValue: e.target.value };
    })



  }

  componentDidMount() {
    console.log(this.inputRef.current, '=====>~~~~~');
    // this.inputRef.current.value="alibaba";
    this.inputRef.current.focus();
  }

  render() {
    return <input
      ref={this.inputRef}
      style={{ display: 'block', margin: '5px auto' }}

      className="abc"
      onChange={this.onInputChange}
      type={this.props.type}

    />
  }
}



class LoginButton extends React.Component {

  constructor(props) {
    super(props)
    this.onTestClick = this.onTestClick.bind(this);
  }

  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // bind方法传参最后一个参数才是event对像 this是默认传递进来的
  // onButtonClick2 = (arg, arg2, arg3, e) => {
  //   console.log(arg);
  //   console.log('-------');
  //   console.log(arg2);
  //   console.log('-------');
  //   console.log(arg3);
  //   console.log('-------');
  //   console.log(e.target);
  //   console.log('-------');
  //   console.log(this);
  // }

  onButtonClick = (e, arg) => {
    // console.log(e, '------', arg, '<><><><>', '==== test', this);

    // 调用父组件传递过来的方法

    if (this.props.onLoginClick) {
      this.props.onLoginClick();
    }

  }


  // 如果你没有使用 class fields 语法，你也可以在回调中使用箭头函数：
  onTestClick(e) {
    // console.log(e, '==== test', this)
  }
  render() {
    return (
      <>
        <input type="button" value='登录' onClick={(e) => { this.onButtonClick(e, 100); }} />
        {/* <input type="button" value="登录2" onClick={this.onButtonClick2.bind(this, 333, 111, 999)} /> */}
      </>
    );
  }
}


