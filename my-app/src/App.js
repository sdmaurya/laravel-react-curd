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

import Header from './Header';
function App() {
  return (
    <>
<Header/>
{/* <Register/>
<List/> */}

<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/list" element={<List/>} />
<Route path="/update/:id" element={<Update/>} />
{/* <Route path="/update" element={<Update/>} /> */}

</Routes>
          
        
       

 

  
  </>
  );
}

export default App;
