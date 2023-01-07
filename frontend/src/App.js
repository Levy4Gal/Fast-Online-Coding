import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages & components
import LobbyPage from './pages/LobbyPage';
import MentorPage from "./pages/MentorPage"
import StudentPage from "./pages/StudentPage"

function App() {
  const [title,setTitle] = useState("")
  const [code,setCode] = useState("")
  const[codeBlockArr , setcodeBlockArr] = useState([])
  const[isConnected, setIsConnected] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container'>
        <h1 className='title'> Fast Online Coding </h1>
      </div>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<LobbyPage
              codeBlockArr = {codeBlockArr}
              setcodeBlockArr = {setcodeBlockArr}
              title={title}
              setTitle={setTitle}
              code = {code}
              setCode = {setCode}

              isConnected = {isConnected}
              setIsConnected = {setIsConnected}
            />}></Route>
            <Route path='/mentorPage' element={<MentorPage
              codeBlockArr = {codeBlockArr}
              setcodeBlockArr = {setcodeBlockArr}
              title={title}
              setTitle={setTitle}
              code = {code}
              setCode = {setCode}
            />}></Route>
            <Route path='/studentPage' element={<StudentPage
               title={title}
               setTitle={setTitle}
               code = {code}
               setCode = {setCode}
            />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
