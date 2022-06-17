import React from 'react';


export class Son extends React.Component {
    static myFields = 'foo...';

    constructor(props) {
        super(props);
        this.state = { 'childName': 'child' };
        this.name = "I am a child name";
    };

    componentDidMount() {

    }

    childSay = () => {
        return "ref children say"
    }

    render() {
        return (<div>I am child</div>);
    }
}


class Father extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.divRef = React.createRef();
        this.state = {name:'jojo'};
    }

    componentDidMount() {

    };

    componentDidUpdate() {

    };

    showChildRefs = () => {
        console.log(this.myRef.current.name);
        console.log(this.myRef.current.state);
        console.log(this.myRef.current.childSay());
        console.log(this.divRef.current);
        console.log(Son.myFields);
    }

    render() {
        return (
            <>
                <Son ref={this.myRef} />
                <div ref={this.divRef}>I am Parent and my name is <h1>{this.state.name}</h1></div>
                <button onClick={this.showChildRefs}>click...</button>
            </>
        )
    }

}

export default Father;