import React, {useEffect, useState} from 'react';
import s from "./Products.module.css"
import ipad from "./../../../constants/Ipads"
import watch from "./../../../constants/watches"
import Product from "./Product";
import {useParams} from "react-router-dom"
import api from "../../../constants/api";


const Products = () => {
    const params = useParams();
    const [products, setProducts] = useState([])

    const getProducts = (catalog_name) => {
        fetch(api[catalog_name])
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts(params.catalog_name)
    }, [])


    /*let arr;
    console.log(ipad)
    if (params.catalog_name === "iphone") {
        arr = iphone;
    } else if (params.catalog_name === "ipad") {
        arr = ipad;
    } else if (params.catalog_name === "watch") {
        arr = watch;
    }*/

    const elements = products.map((item, index) => {
        return (
            <Product
                id={item.id}
                key={index}
                img={item.img}
                name={item.name}
                price={item.price}
            />
        )
    })
    return (
        <div className={s.iphones} >
            {elements}
        </div>
    );
};

export default Products;