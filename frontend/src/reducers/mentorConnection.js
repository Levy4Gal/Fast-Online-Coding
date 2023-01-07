const mentorConnectionReducer = (state = false, action) =>{
    switch(action.type){
      case 'MENTOR_IN':
        state = true
        return state
      
      case 'MENTOR_OUT':
        state = false
        return state
  
      default:
        return state
    }
}

export default mentorConnectionReducer