import React from 'react'
import '../room/room.styles.scss'

const Rooms = (props) => {
    const {SalaID} = props.myRoom
    const GoChat =() =>{
        localStorage.setItem('SalaID', SalaID);
        props.getChat(SalaID);
    }
    return (
        <div>
          <div className='room-item'>
                <h3>{props.myRoom.Nombre}</h3>
                <div className='button-align'>
                    <button 
                        className='btn border2 border222' 
                        onClick={() => GoChat()}>Ir al Chat
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Rooms;
