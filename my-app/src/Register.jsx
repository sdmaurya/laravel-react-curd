import React from 'react';
import { useState } from 'react';
// import { ModalBody } from 'react-bootstrap';

  function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function SignUP () {
     let item = {name,email,password};   
     let result =    await fetch('http://127.0.0.1:8000/api/insert',{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          "Accept":"application/json"
          },
        body:JSON.stringify(item)
      });
      result =await result.json();
      // console.log(result);

      item = ''
      
    } 
    
    return (
        <div>
      <label >First name:</label><br />
        <input type="text" onChange={(e)=>setName(e.target.value)} id="fname"  name="name" value={name}/><br />
        <label >Last name:</label><br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" value={email}/><br/>
        <label >Password:</label><br/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" value={password}/><br/><br /> 
        <button type="submit" onClick={SignUP} value="Submit">Submit</button>
        </div>
    )
  }

  export default Register;