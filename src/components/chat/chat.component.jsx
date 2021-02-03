import React, {useEffect, useState} from 'react'
import '../chat/chat.styles.scss'
import Message from '../message/message.component'
    
const Chat = (props) => {
    const [chat, setChat] = useState(0)
    console.log('chatComponent', props);
    useEffect(() => {
        console.log('useEffect chatComponent', props.myChat)
    }, chat)
    
    return (
        <div>
            CHAT DE SALA: {props.myRoomID}
            <div className='container-chat'>
            <div className='body-chat'>
                {
                   props.myChat.map(mensaje =>(
                    <Message 
                        key={mensaje.ChatID} 
                        myMensaje={mensaje} >
                    </Message>    
                   ))
                }
            </div>
            <div className='body-message'>
                Aqui van los inputs
            </div>
            </div>
        </div>
    )
}

export default Chat;


