import { React, useEffect ,useState } from "react";
import io from 'socket.io-client'

//open socket.io
const socket = io.connect("http://localhost:3001")

const MentorPage  = (props)=>{
    const [messageRecivied, setMessageRecivied] = useState("")
    const [show,setShow] = useState(true)

    let id = ""

    useEffect(()=>{

        //listening for changes from student 
        socket.on("receive_code_changes", (data)=>{
           setMessageRecivied(data.message)
           setShow(false) 
        })
    }, [socket])

    //if client press back button
    window.onpopstate = () => setTimeout(fetchMentorConnected(), 0);

    //get data from db to catch id of object 
    const fetchMentorConnected = async ()  =>{
        const response = await fetch('/api/mentor')
        const json = await response.json()
        const singleItem = json[0]
        if(response.ok){
            id = singleItem._id

            //fire function that update the db about mentor disconnected
            updateMentorConnected()
        }
    }

    //PATCH request to db --> update db that mentor disconnected
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
                {/* if data recivied from socket (client) shows the message  */}
                {/* othewise show the data from db */}
                <pre>{show ? props.code :messageRecivied} </pre>
            </div>
        </div>
    )
}

export default MentorPage

