import React from 'react';
import { useState } from 'react';

import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

const StudentPage = (props)=>{
    const [message,setMessage] = useState("")

    const handleCodeChange =event=>{
        setMessage(event.target.value)
        socket.emit("modify_code", {message})
    }

    return(
        <div><strong className='title'>Student page</strong>
            <div className='codeBlock-details'>
            <h4>{props.title}</h4>
                <textarea id="message"
                    name="message"
                    onChange={handleCodeChange}>
                    {props.code}
                </textarea>
            </div>
        </div>

    )
}

export default StudentPage