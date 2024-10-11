import { useState} from 'react';

 export const Test =({}) => {
    const [count,setCount]=useState(0)
    console.log(count);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(prev=>{
                console.log(prev);
                 return prev+1
            })}>Добавить</button>
        </div>
    );
};

