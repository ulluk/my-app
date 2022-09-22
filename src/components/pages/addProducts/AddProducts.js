import React, {useState} from 'react';
import s from "./AddProducts.module.css"

const AddProducts = () => {
        const [inputs, setInputs]=useState({});

        const handleChange=(event)=>{
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values =>({values,[name]:value}))
        }
        const handleSubmit=(event)=>{
            event.preventDefault();
            console.log(inputs);
        }
        return (
            <div className={s.container}>
                <h2>Добавления товара</h2>
                <form onSubmit={handleSubmit} >
                    <div className={s.form_control}>
                        <input
                            type="text"
                            placeholder="Введите ссылку для фото"
                            name="img_link"
                            onInput={handleChange}
                        />
                    </div>
                    <div className={s.form_control}>
                        <input
                            type="text"
                            placeholder="Введите название"
                            name="name"
                            onInput={handleChange}
                        />
                    </div>
                    <div className={s.form_control}>
                        <input
                            type="number"
                            placeholder="Введите прайс (сом)"
                            name="price"
                            onInput={handleChange}
                        />
                    </div>
                    <div className={s.form_control}>
                        <select name="product" onInput={handleChange} >
                            <option value="0">Выберите продукцию</option>
                            <option value="Iphone">Iphone</option>
                            <option value="Ipad">Ipad</option>
                            <option value="Watch">Watch</option>
                        </select>
                    </div>
                    <div className={s.form_control}>
                        <button type="submit">Сохранить</button>
                    </div>
                </form>
            </div>
        );
};

export default AddProducts;