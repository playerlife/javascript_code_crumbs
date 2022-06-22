
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './App.css';

import Father from './pages/Parent2Child';
import UseHook from './pages/UseHook';
import Hello from './pages/Hello'
import Clock from './pages/Clock'
import LoginDemo from './pages/LoginClass';
import LoginFunction from './pages/LoginFunction';
import ClassRef from './pages/ClassRef'
import StateRise from './pages/StateDemo'
import PropCom from './pages/PropCom'
import UniqueObjects from './pages/UniqueObjects'
import LimitNumbers from './pages/LimitNumbers'
import LoopRemoteFileStatus from './pages/LoopRemoteFileStatus'

function App() {
  return (
    <div className="App">
      <Router>
        <ul style={{ margin: 10, padding: 10, float: "left", width: "20%", height: 500, overflow: "scroll" }}>
          <li><Link to="/"> 父子组件之间通信 </Link></li>
          <li><Link to="/usehook"> Hoos使用 </Link></li>
          <li><Link to="/clock"> React Clock </Link></li>
          <li><Link to="/hello/greeting"> Greeting </Link></li>
          <li><Link to="/loginDemo"> loginDemo类组件 </Link></li>
          <li><Link to="/loginFunction"> loginDemo函数组件</Link></li>
          <li><Link to="/hooks/classRef">Class Ref </Link></li>
          <li><Link to="/hooks/stateRise">State Rise </Link></li>
          <li><Link to="/hooks/sendProps">Send component by props </Link></li>
          <li><Link to="/uniqueObjects">Object-Array unique </Link></li>
          <li><Link to="/regLimitNumber">限制输入数字 </Link></li>
          <li><Link to="/loopRemoteStatus">轮询服务器文件状态 </Link></li>
        </ul>

        <div style={{ margin: 10, padding: 10, border: "1px solid gray", float: "right", width: "70%" }}>
          <Route exact path="/" component={Father} />
          <Route path="/usehook" component={UseHook} />
          <Route path="/clock" component={Clock} />
          <Route path="/hello/greeting" component={Hello} />
          <Route path="/loginDemo" component={LoginDemo} />
          <Route path="/loginFunction" component={LoginFunction} />
          <Route path="/hooks/classRef" component={ClassRef} />
          <Route path="/hooks/stateRise" component={StateRise} />
          <Route path="/hooks/sendProps" component={PropCom} />
          <Route path="/uniqueObjects" component={UniqueObjects} />
          <Route path="/regLimitNumber" component={LimitNumbers} />
          <Route path="/loopRemoteStatus" component={LoopRemoteFileStatus} />
        </div>
      </Router>
    </div>

  );
}

export default App;
