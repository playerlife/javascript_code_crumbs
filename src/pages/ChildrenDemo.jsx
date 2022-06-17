import React, { useEffect } from 'react';




class Demo1 extends React.Component {

    componentDidMount() {
        // console.log(this.props.children);
        // React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法
       const s =  React.Children.map(this.props.children,  (child) =>{
            return <li>{child}</li>;
        })

        console.log(s,'========>>>>')
        
    }

    render() {
        // 每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容
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
        //   console.log(props.children );
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