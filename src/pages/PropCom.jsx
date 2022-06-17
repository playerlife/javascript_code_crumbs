import React from 'react';

/**
 * 属性中传组件
 */

function Pane(props) {
    return <>
        {props.left}
        {props.right}
        {props.children}
    </>
}

function Chat(props) {
    return <div>chat....</div>
}

function Contact(props) {
    return <div>Contact....</div>
}

export default function Sprite(props) {
    return (
        <Pane left={<Chat />} right={<Contact />} >
            <Chat></Chat>
            <Contact></Contact>
        </Pane>

    );
}