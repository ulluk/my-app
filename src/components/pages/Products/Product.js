import React from 'react';
import s from "./Products.module.css";

const Product = (props) => {
    const getProductName = () => {
        let data = {};
        data["name"] = props.name;
        console.log(data);
    }

    return (
        <div id={props.id} key={props.index} className={s.card}>
            <div className={s.img}>
                <img src={props.img}/>
            </div>
            <div className={s.name} id="name">{props.name}</div>
            <div className={s.price}>{props.price}</div>
            <div>
                <button onClick={getProductName}>Выбрать</button>
            </div>
        </div>
    );
};

export default Product;