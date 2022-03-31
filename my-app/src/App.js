import './App.css';
// import { Route,Switch} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import List from './List';
import Update from './Update';
// import Register from './Register';
// import { Route } from "react-router";
import {Button} from 'react-bootstrap';
import NoteState from './NoteState';
import Header from './Header';
import Test2 from './Test2';
function App() {
  return (
    <>
<Header/>
{/* <Register/>
<List/> */}

    {/* All Route route */}

{/* <NoteState> */}
<Routes>

<Route path="/login" element={<List/>} />
<Route path="/register" element={<Register/>} />
<Route path="/list" element={<Login/>} />
<Route path="/update/:id" element={<Update/>} />

{/* Particular route */}
<Route path="test2" element={<NoteState><Test2/></NoteState>} />
{/* Particular route */}
{/* <Route path="/update" element={<Update/>} /> */}
    
</Routes>
{/* </NoteState>  */}

       {/* All Route route */}

 

  
  </>
  );
}

export default App;
