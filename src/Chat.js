
import React, {useState, useEffect} from 'react';
import socketClient from "socket.io-client";
import { sendMessage,initiateSocket, fetchChannelMessages, broadcast } from "./fun";
import './main.css'
let socket;
const SOCKET_URL = "http://localhost:8080";
socket = socketClient(SOCKET_URL);


function Chat(props){
  useEffect(()=>{
    
   initiateSocket()
  var list=document.getElementById('message-list') 
  var mes=document.getElementById('messages') 
  const video=document.createElement('video')
  video.className='vid'
  mes.appendChild(video)
  socket.on("NEW_MESSAGE", (data) => {
    console.log(data)
    if(data.idStream==props.id){
    const li = document.createElement('li');
    
  li.className = 'message';
  //li.innerHTML=data.message
   console.log(data)
   const messageText = document.createElement('div');
   messageText.className = 'message-text';
   messageText.appendChild(document.createTextNode(data.message));
 
   const date = new Date();
 
   const messageTime = document.createElement('div');
   messageTime.className = 'message-time';
   messageTime.appendChild(
       document.createTextNode(
           `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
       ),
   );
 
   li.appendChild(messageText);
   li.appendChild(messageTime);
 
  list.appendChild(li)}
  });
  
 }, [])
 
// getmessages(list)

    // Met à jour le titre du document via l’API du navigateur
     
   
    const [input,setInput]=useState("");
 const [data,setData]=useState();
        
return(
<section class="livechat">
<h5>Viewers in chat: <span id="viewerCount">0</span></h5>

<div class="messages" id="messages">
  <ul id="message-list"></ul>
</div>


 <div class="chat-input-container">
        <input type="text" id="chat-input" onChange={e=>{setData({idStream:props.id,message:e.target.value,username:props.username})}} placeholder="Type away!"/>
        <button type="submit" onClick={()=>{sendMessage(data)}}>Chat</button>
      </div>

</section>
)
}
export default Chat