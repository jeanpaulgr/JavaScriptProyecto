import React from 'react'
import '../message/message.styles.scss'

class Message extends React.Component  {
    constructor(props){
    super();
   this.state={
        myMensaje: props.myMensaje,
        UsuarioEnvia: props.myMensaje.UsuarioEnvia,
        Mensaje:  props.myMensaje.Mensaje
    }
    
}
    render(){
      return (
        <div>
            <div className='user'>{this.state.UsuarioEnvia}</div>
            <div className='message'>{this.state.Mensaje}</div>
        </div>
        )  
    }
     
}

export default Message;
