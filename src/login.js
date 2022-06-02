import React, {useState} from 'react';
import './Component.css'
import axios from 'axios';
import Table from './table';
function Login() {
  const [user,setUser]=useState({name:"ok",username:"hafida"});
const [email,setEmail]=useState("");
const [password,setpassword]=useState("")
  const submithandler=async e=>{
  
    e.preventDefault();
    try{
        const config= {
            headers :{
        "Content-type":"application/json"
    }
    }

    const data =await axios.post("http://localhost:5001/login",
        {email:email.email,
        password:password.password
        }
    ,
    config
    );
    if(data.data){
      setUser({name:data.data.user.name,username:data.data.user.username})
      console.log(data.data)
    }
    console.log(data)
    }catch(err){
      window.alert("details does not match")
console.log("error")
    }
}
  return (
    
    <div className='a'>
      
      {(user.name!="")?(
       <Table username={user.username}/>
        
      
):(
  <a className='a'>
  <div id='container' className='container'>
      

    <form action='#' onSubmit={submithandler}>

    <h1>LOGIN</h1>

    
    
  <input type="text"  text="email" id="email" placeholder='email' onChange={e=>setEmail({email:e.target.value})} />
<input type="password" text="password" id="password" placeholder='Password' onChange={e=>setpassword({password:e.target.value})} />
<input type="submit" className='c' value="SignUp"/>
  
</form>


</div></a>
)
      }
      
    </div>
  );
}

export default Login;