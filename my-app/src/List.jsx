import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const List = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function Login () {
      let item = {email,password};   
      let result =    await fetch('http://127.0.0.1:8000/api/login',{
       method:'POST',
       headers:{
           'Content-Type':'application/json',
           "Accept":"application/json"
           },
         body:JSON.stringify(item)
       });
       result =await result.json();
      //  console.log(result.error);

      if(result.error){

         alert(result.error);
      }else{

         //console.log(result);
         // localStorage.setItem("users", result);
         localStorage.setItem("users",JSON.stringify(result));
         navigate("/")
      }
 
       
     } 

    return ( 
        <>
         <div>  
            <div className="container mt-5">
               
        <label >Email:</label><br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" value={email}/><br/>
        <label>Password:</label><br/>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} id="password" name="password" value={password}/><br/><br /> 
        <button type="submit" onClick={Login} value="Submit">Submit</button><br />
        <span> <Link to="/register" className="mr-auto my-2  p-2 my-lg-0 ">Register</Link></span>
        </div>
        </div> 
        </>
     );
}
 
export default List;