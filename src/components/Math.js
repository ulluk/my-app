import React,{useState} from 'react';

const style = {
    backgroundColor: 'gray',
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Math = () => {
    const[number,setNumber]=useState(0)
    return (
        <div style={style}>
            <button onClick={()=>setNumber(number+1)}>+1</button>
            <button onClick={()=>setNumber(number+5)}>+5</button>
            <button onClick={()=>setNumber(number+10)}>+10</button>

            <p style={{fontSize:"20px"}}>{number}</p>
        </div>
    );
};

export default Math;