
export default function ItemsListCointainer({todos,deleteToDo}){
   // const itemsList=["java","react","sql"];
    return(
        <div className="list">
            <ul>
           {todos.map((item,index)=>{
            return ( 
            <li key={index} style={{marginTop:'10px'}}>
                {item}
            <button  onClick={()=>deleteToDo(item)}>done</button>
            </li>);
           })}
           </ul>
        </div>
    )
}