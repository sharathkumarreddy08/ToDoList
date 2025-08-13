import { useState } from "react";

export default function InputContainer({addNewTodo}){
    const [inputValue, setInputValue] = useState("");
    return(
        <div className="card">
           <input style={{border:'none',outline:'none',borderBottom:'3px solid black' ,width:'40%', textAlign:'center'}}
            placeholder="Enter Task Name here" 
              value={inputValue} name="name"
           onChange={(e) =>
             setInputValue(e.currentTarget.value)} autoComplete="off" />
             <button onClick={()=>{
                addNewTodo(inputValue) 
                setInputValue("")}
             } style={{margin:'10px',border:'none', 
                color:'white', fontSize:'1rem', padding:'1rem',width:'25%',backgroundColor:'blue'}}
             >ADD TASK</button>
        </div>
    )
}