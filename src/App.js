import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.action)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>now chatLog is {this.props.chatLog}</p>
        <button onClick={this.props.action}>click to add</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    chatLog: state.chatLog
  }),
  dispatch => ({
    action: ()=>{
      dispatch({
        type:'ADD_CHAT',
        payload:{
          promise:new Promise((reslove,reject)=>{
            setTimeout(()=>reslove('i am the server info!'),3000)
          }),
          data:'fuck!'
        }
      })
    }
  })
)(App)

