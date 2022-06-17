import React, { useState, useEffect, useRef } from 'react'

function GrandSon() {
    const [name, setName] = useState("");

    const onInputChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {});

    return (<div style={{ border: '1px solid blue' }}>
        {console.log('render GrandSon')}
        <b>GrandSon</b>
        <input type="text" onChange={onInputChange} />
    </div>)
}


function Son() {
    const [count, setCount] = useState(0);
    const fooRef = useRef(null);
    const buttonRef = useRef(null)

    useEffect(() => {
    }, [count])

    return (
        <div style={{ border: '2px solid green' }}>
            <GrandSon />
            <p ref={fooRef}>You clicked {count} times</p>
            <button ref={buttonRef} onClick={() => setCount(count + 1)}>
                Click me <b>Son</b>
            </button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;

    return <h1>Now: {count}, before: {prevCount}</h1>;
}


const LoginFunction = React.memo((props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onUserChange = (e) => {
        setUserName(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        document.title = userName;
    }, [userName, password])

    return (
        <div style={{
            border: '1px solid #ccc',
            width: 400, height: 500, margin: 'auto'
        }}>
            <Counter />
            <Son />
            <form action="boooo.com" onSubmit={onSubmitHandler}>
                户名: <input value={userName} onChange={onUserChange}
                    type="text" placeholder="pls input username" />
                <br /><br />
                密码: <input type="password" onChange={onPasswordChange} value={password} />
                <br /><br />
                <input type="submit" value="登录" />
            </form>
        </div>);
});


export default LoginFunction;