import { useEffect} from 'react'

import CodeBlockDetails from '../components/CodeBlockDetails'

const LobbyPage = (props) =>{

    useEffect(()=>{
        const fetchCodeBlocks = async () =>{
            const response = await fetch('/api/codeBlocks')
            const json = await response.json()
           
            if(response.ok){
                props.setcodeBlockArr(json)
            }
        }
        fetchCodeBlocks()
    }, [])

    return(
        <div className="lobbyPage">
            <strong className='title'>Choose a code block</strong>
            <div className="codeblocks">
            {props.codeBlockArr.map((codeBlock,index)=>(
                   <CodeBlockDetails key={index} 
                   title={props.title}
                   setTitle={props.setTitle}
                   code = {props.code}
                   setCode = {props.setCode}
                   codeBlock={codeBlock}
                   />//pass the codeBlock as a props into CodeBlockDetails component 
                ))}
            </div>
        </div>
    )
}

export default LobbyPage