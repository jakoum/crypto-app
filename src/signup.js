import './Component.css'
import React, {useState} from 'react';

import axios from 'axios';

import './App.css'

function Signup() {
const [user,setUser]=useState({username:"",name:""})
const [details,setdetails]=useState({userId:"18",username:"jaak",name:"",email:"",password:""})
    
    const submithandler1=async e=>{
        console.log(details)
        e.preventDefault();
        try{
            const config= {
                headers :{
            "Content-type":"application/json"
        }
        }
        const data =await axios.post("http://localhost:5001/register",details,config);
        
        if(data.data.username){
            window.alert("signed up")
        }
        console.log(data.data.body.message)
        window.alert(data.data.body)
      
        }catch(err){
console.error("ok err");
        }
    }
   

    return (
      <div className='a'>
        <div id='container' className='container'>
      
      <form action='#' onSubmit={submithandler1}>
  
      <h1>SignUp</h1>
     
      
      <input type="text" text="Name" id="name" placeholder='Name' 
      onChange={e=>setdetails({...details,name:e.target.value})} value={details.name} 
      />
    <input type="text"  text="email" id="email" placeholder='email' 
    onChange={e=>setdetails({...details,email:e.target.value})} value={details.email}
    />
  <input type="password" text="password"  id="password" placeholder='Password' 
  onChange={e=>setdetails({...details,password:e.target.value})} value={details.password}
  />
  <input type="submit" className='c' value="SignUp"/>
    
  </form>
 
    
    </div></div>
    );
  }
  
  export default Signup;