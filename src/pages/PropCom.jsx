import React from 'react';

/**
 *  passing component in properties
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