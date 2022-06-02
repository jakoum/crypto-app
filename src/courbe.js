import React, { useState } from "react";
import axios from "axios"
async function Courbe(props){
  
    const [app,setApp]=useState([])
        
        function rpl(){
        //     fetch('/dbItems')
        // .then((res)=>{
        //     return res.json();
        // })
        // .then((result)=>{
        //     for (var i = 0; i<20; i++){
        //         console.log(result[i].price)
        //         app.push(result[i].price)
        //     }    
        //     console.log(app)
            
        // })
        // .then(()=>{
        //     var org=[];
        //     var neww=[]
        //     for (var j=0; j<app[0].length;j++){
        //         org= app[0][j]
        //         neww.push(org.replace('$',''))
        // }
        // console.log(neww)
        // console.log(neww[0])
        // return neww[0];   
        // })

        }   
       const item =await axios.post("http://localhost:5000/singleItem",{name:props.name})
        var neww=[]
        const item1=item.data.price
        console.log(item)
        for(const a in item1){
            neww.push(a.replace('$',''))

        }

        const data={
            type: 'bar',
            labels: ["1","2","3","4","5","6","7","8"],
            datasets:[
                {
                    label: "Price",
                    data: neww,
                    backgroundColor: ["red","red","red","red","red","red","red","red"]
                }
            ]
        }
    return(
        <>
        <button ></button>
            <div className="graph">
                  
            </div>
        </>
    )
}

export default Courbe;