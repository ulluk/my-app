import React from 'react';
import s from "./Iphones.module.css"
import arr from "./../../../constants/Iphones"

const Iphones = () => {
    const btn=document.querySelector("#name")
    let elems = arr.map((item, index) => {
        return (
            <div key={index} className={s.card}>
                <div className={s.img}>
                    <img src={item.img}/>
                </div>
                <div className={s.name} id="name">{item.name}</div>
                <div className={s.price}>{item.price}</div>
                <div>
                    <button onClick={()=>{console.log(btn.value)}}>Выбрать</button>
                </div>
            </div>
        )
    })
    return (
        <div className={s.iphones}>
            {elems}
        </div>
    );
};

export default Iphones;