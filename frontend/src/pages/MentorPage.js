import { React, useEffect ,useState } from "react";
import io from 'socket.io-client'
import { Link } from "react-router-dom"


// import {withRouter} from 'react-router-dom'
const socket = io.connect("http://localhost:3001")

const MentorPage  = (props)=>{
    const [messageRecivied, setMessageRecivied] = useState("")
    const [show,setShow] = useState(true)

    let id = ""

    useEffect(()=>{
        socket.on("receive_code_changes", (data)=>{
           setMessageRecivied(data.message)
           setShow(false) 
        })
    }, [socket])

    window.onpopstate = () => setTimeout(fetchMentorConnected(), 0);

    const fetchMentorConnected = async ()  =>{
        const response = await fetch('/api/mentor')
        const json = await response.json()
        const singleItem = json[0]
        if(response.ok){
            id = singleItem._id

            updateMentorConnected()
        }
    }

    const updateMentorConnected = async ()=>{
        const isConnected = false
        const item = {isConnected}
        const response = await fetch("api/mentor/" + id,{
            method:"PATCH",
            body:JSON.stringify(item),
            headers:{
                'content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(response.ok){
            console.log("there is response")
        }
    }

    return(
        <div><strong className="title">Mentor page</strong>
            <div className="codeBlock-details">
            <h4>{props.title}</h4>
                <pre>{show ? props.code :messageRecivied} </pre>
            </div>
        </div>

    )
}

export default MentorPage

