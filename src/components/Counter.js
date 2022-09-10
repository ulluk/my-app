import React, {useState} from 'react';

const style = {
    backgroundColor: 'gray',
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <div style={style}>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>

            <p style={{fontSize: "30px",paddingLeft:"10px" ,color:"lightgrey"}}>{number}</p>
        </div>
    );
};

export default Counter;