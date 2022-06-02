
import React, {useState,useEffect} from 'react';
import axios from 'axios';

import './table.css'
import Diagramme from './diagramme';

function Table(props){
  const[item,setItem]=useState("")
  async function a() {
    
    
    const data=await axios.get("http://localhost:5000/webitems")
  console.log(data)
  const table=document.getElementById('custumers')
  var list=document.getElementById('customers') 
  let i
  for(i=0;i<20;i++){
      console.log(data.data[i].variation)
      // let tr=document.createElement('tr')
      // const td1=document.createElement('td')
      // const td2=document.createElement('td')
      // const td3=document.createElement('td')
      // td1.appendChild(document.createTextNode(data.data[i].name))
      // td2.appendChild(document.createTextNode(data.data[i].price))
      // td3.appendChild(document.createTextNode(data.data[i].variation))
      // tr.appendChild(td1)
      // tr.appendChild(td2)
      // tr.appendChild(td3)
      const li = document.createElement('tr');
      const td = document.createElement('td');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      li.className = 'message';
//li.innerHTML=data.message
 console.log(data)
 const messageText = document.createElement('div');
 messageText.className = 'message-text';
 messageText.appendChild(document.createTextNode(data.data[i].name));
 td1.appendChild(document.createTextNode(data.data[i].price))
 td2.appendChild(document.createTextNode(data.data[i].variation))
 td.appendChild(messageText);
 td.onclick=async ()=>{
  setItem(td.innerText)
     console.log(td.innerText)
 }
 li.appendChild(td)
 li.appendChild(td1)
 li.appendChild(td2)
 list.appendChild(li)
  }}

return(
  <div id='divtable'>
     {(item=="")?(
           <>
           
           <table id="customers">
           <tr>
           <th>Name</th>
           <th>Price</th>
       
           <th>24H</th>
         </tr>
       
         </table>
         <button onClick={a}>button</button>
       </>
        
      
):(
<Diagramme username={props.username} name={item}/>

)}


  </div>

)
}
export default Table