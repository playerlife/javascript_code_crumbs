import React from 'react';
import Greeting from './Hello'
/**
 *  父组件通过props传递参数给children
 *  父类调用子类的办法 在子类上添加onRef属性 传递函数给子组件 
 *  子组件在回调方法中把this传给parent component
 *
 */

class Node1 extends React.Component {
    componentDidMount() {
        console.log('Node1 componentDidMount');
    }

    render() {
        return (
            <>
                <div>node1</div>
                <Node2 />
            </>
        )
    }
}

class Node2 extends React.Component {

    componentDidMount() {
        console.log('Node2 componentDidMount');
    }

    render() {
        return (
            <>
                <div>node2</div>
                <Node3 />
            </>
        )
    }
}

class Node3 extends React.Component {

    componentDidMount() {
        console.log('Node3 componentDidMount');
    }

    render() {
        return <div>node3</div>
    }
}

export class Son extends React.Component {
    // class variable
    static childStaticVar = 'sssss';

    constructor(props) {
        super(props);

        this.state = { 'childName': 'zzzzz' };
        // instance variable
        this.name = 123;
        // init callback function in constructor
        if (this.props.onRef) {
            this.props.onRef(this);
        }
    };

    componentDidMount() {
        console.log('Son componentDidMount');
        if (this.props.onRef) {
            this.props.onRef(this);
        }
    }

    run = () => {
        console.log('child run~~~~~')
    }

    render() {
        return (
            <>
                <Node1 />
                <div>I am child</div>
            </>
        );
    }
}

class Father extends React.Component {
    static staticVar = 123;
    user = "Eric";

    instanceFunction = () => {
        console.log(this.user); // Eric
        console.log(this.count);   // 232
        console.log(this.state);    // { 'name': "jojo" };
        console.log(this.staticVar); // undefined
    }


    static staticFunction = () => {
        console.log(this) // stick to Father class 
        console.log(this.user); // undefined;
        console.log(this.staticVar); // 123;
        console.log(this.state); // undefined;
    }

    constructor(props) {
        super(props);
        this.state = { 'name': "jojo" };
        this.count = 232;
    }

    componentDidMount() {
    };

    componentDidUpdate() {

    };

    execChildHandler = () => {
        console.log(this.childRef);  //  ref children
        this.childRef.run();        //  call run method in children
        console.log(this.childRef.state);   // call state in children
        console.log(Son.childStaticVar);
        this.instanceFunction();
        Father.staticFunction();
    }

    render() {
        return (
            <>
                <Son onRef={self => { this.childRef = self }} />
                <div>I am Parent and my name is {this.state.name}</div>
                <button onClick={this.execChildHandler}>click...</button>
            </>
        )
    }
}

export default Father;