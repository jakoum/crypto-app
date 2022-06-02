import Chat from './Chat'


const Diagramme=(props)=>{
return(
    <>
    <h1>{props.username}</h1>
    <h1>{props.name}</h1>
    
<Chat username={props.username} name={props.name} />
    </>
)
}
export default Diagramme