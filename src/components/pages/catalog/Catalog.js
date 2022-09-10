import React from 'react';
import s from "./Catalog.module.css"
import iphone from "./../../../assets/images/iphones.webp"
import ipad from "./../../../assets/images/ipads.webp"
import watch from "./../../../assets/images/watches.webp"
import {Outlet} from "react-router-dom"

const Catalog = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Каталог</h1>
            <div className={s.catalog}>
                <div className={s.catalog_card}>
                    <img src={iphone} alt="Айфон"/>
                    <div className={s.catalog_card_body}>
                        <h2>Айфон</h2>
                        <a href="/catalog/iphone">Перейти ></a>
                    </div>
                </div>
                <div className={s.catalog_card}>
                    <img src={ipad} alt="Айпад"/>
                    <div className={s.catalog_card_body}>
                        <h2>Ipad</h2>
                        <a href="/catalog/ipad">Перейти ></a>
                    </div>
                </div>
                <div className={s.catalog_card}>
                    <img src={watch} alt="Часы"/>
                    <div className={s.catalog_card_body}>
                        <h2>Watch</h2>
                        <a href="/catalog/watch">Перейти ></a>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Catalog;