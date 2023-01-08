import { useNavigate } from 'react-router-dom';

const CodeBlockDetails = (props) => {

    const navigate = useNavigate()

    let bool = null
    let id = "" 

    //when the user clicks on any code block 
    const handleClick = () => {  
        
        //fire GET requst and some more statments
        fetchMentorConnected()

        //sets the values of codeBlock in props for mentor/student
        props.setTitle(props.codeBlock.title)
        props.setCode(props.codeBlock.code)
    };

    const fetchMentorConnected = async ()  =>{

        //GET requst from db to check if mentor is already connected
        const response = await fetch('/api/mentor')
        const json = await response.json()
        const singleItem = json[0]
        if(response.ok){
            bool = singleItem.isConnected
            id = singleItem._id

            if(!bool){

                //if mentor didn't connected yet --> navigate to mentor page 
                //and update the db
                updateMentorConnected()
                navigate('/mentorPage')
            }else{

                //if mentor already connected --> navigate to student page
                navigate('/studentPage')
            }
        }
    }

    //PATCH request to db --> to update that the mentor is connected
    const updateMentorConnected = async ()=>{
        const isConnected = true
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
            console.log("response is OK")
        }
    }

  return (
    <div className="codeBlock-details" onClick={handleClick}>
      <h4>{props.codeBlock.title}</h4>
    </div>
  );
};

export default CodeBlockDetails
