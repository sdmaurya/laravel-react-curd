import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {

    const [data,SetData] = useState(null);

    // useEffect(() => {
    //     axios('http://127.0.0.1:8000/api/ins')
    //     .then(response =>{
    //         SetData(response.data)
    //        
    //     })      
    //   },[])

  useEffect(  () => {
    getData()
       },[])

    async  function DeleteOps(id){

      let result =    await fetch('http://127.0.0.1:8000/api/delete/'+id,{
      method:'DELETE'     
      });
      result =await result.json();
      // console.log(result);
      getData()
        // alert(id)

      }

      async  function getData(){
        let result =    await fetch('http://127.0.0.1:8000/api/ins');
        result =await result.json();
           
            SetData(  result)
       console.log(result);
      }



    return ( 
        <>

            <h1>Login</h1>

            {/* <ul>
         {data &&
          data.map(({ name,id,email }) => (
            <li key={id}>
              <h3>{name}</h3>
              <h3>{email}</h3>          
            </li>
          ))}
      </ul> */}

<Table striped bordered hover size="sm">
<thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  </thead>
     {data &&
          data.map((e) => (
            <tbody>
      <tr>                  
          <td>{e.id}</td>                   
          <td>{e.email}</td>                   
          <td>{e.name}</td>                   
          <td>  <Link to={"/update/"+e.id} className="mr-auto my-2  p-2 my-lg-0 "><spna>Update</spna></Link>        <button  onClick={()=>{DeleteOps(e.id)}}>Delete</button></td>                   
            
      </tr>
      </tbody>
      ))}
</Table>

        </>
     );
}
 
export default Login;