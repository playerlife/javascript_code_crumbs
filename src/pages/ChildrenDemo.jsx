import React, { useEffect } from 'react';




class Demo1 extends React.Component {

    componentDidMount() {
        // React.Children 
       const s =  React.Children.map(this.props.children,  (child) =>{
            return <li>{child}</li>;
        })

        console.log(s,'========>>>>')
        
    }

    render() {
        // each component can get props.children,
        //  it contains the content between start tag and end tag
        return (
            <div style={{ border: '2px solid blue', padding: 10 }}>
                this is demo1
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

function Demo2(props) {

    useEffect(() => {
    })

    return (
        <>
            <p style={{ border: '1px solid red' }}>{props.children}</p>
        </>)
}


export default class ChildDemo extends React.Component {

    render() {
        return (
            <>
                <Demo1>
                    <Demo2>children传组件</Demo2>
                    <Demo2>children传组件</Demo2>
                    <Demo2>children传组件</Demo2>
                </Demo1>
                <Demo2>children 传文本</Demo2>
                <Demo2><b style={{ color: "red" }}>children 传dom</b></Demo2>
            </>
        );
    }
}