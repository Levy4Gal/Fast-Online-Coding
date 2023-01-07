import { useNavigate } from 'react-router-dom';

const CodeBlockDetails = (props) => {

    const navigate = useNavigate()
    let bool = null
    let id = "" 

    const handleClick = () => {  

        fetchMentorConnected()
        props.setTitle(props.codeBlock.title)
        props.setCode(props.codeBlock.code)
    };

    const fetchMentorConnected = async ()  =>{
        const response = await fetch('/api/mentor')
        const json = await response.json()
        const singleItem = json[0]
        if(response.ok){
            bool = singleItem.isConnected
            id = singleItem._id

            if(!bool){
                updateMentorConnected()
                navigate('/mentorPage')
            }else{
                navigate('/studentPage')
            }
        }
    }

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
            console.log("yesssssssssss")
        }
    }

  return (
    <div className="codeBlock-details" onClick={handleClick}>
      <h4>{props.codeBlock.title}</h4>
    </div>
  );
};

export default CodeBlockDetails















// const handleClick = async () => {
//     const response = await fetch("/api/items/" + props.item._id, {
//       method: "DELETE",
//     });
//     const json = await response.json();

//     if (response.ok) {
//       dispatch({ type: "DELETE_ITEM", payload: json });
//     }



// if(!booleanValue){
        //     navigate('/mentorPage')
        //     fetch('/boolean-endpoint', {
        //         method: 'POST',
        //         body: JSON.stringify({ booleanValue: true }),
        //         headers: { 'Content-Type': 'application/json' },
        //       })
        //         .then(response => response.json())
        //         .then(booleanValue => setBooleanValue(booleanValue));
        // }
        // else{
        //     navigate('/studentPage')
        // }



        // useEffect(() => {
    //     fetch('/boolean-endpoint')
    //       .then(response => response.json())
    //       .then(booleanValue => setBooleanValue(booleanValue));
    //   }, []);