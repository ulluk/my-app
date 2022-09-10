import React from "react";
import style from "./RegistrationForm.module.css"

const RegistrationForm = () => {
    return (
        <>
            <form action="">
                <div className={style.mainTitle}>Заполните все поля для регистрации</div>
                <div className={style.fields}>
                    <div>
                        <div className={style.title}>Введите имя:</div>
                        <input type="text" className={style.input}/>
                    </div>
                    <div>
                        <div className={style.title}>Введите e-mail:</div>
                        <input type="email" className={style.input}/>
                    </div>
                    <div>
                        <div className={style.title}>Введите телефон:</div>
                        <input type="number" className={style.input}/>
                    </div>
                </div>
                <div className={style.fields}>
                    <div>
                        <div className={style.title}>Напишите о вас:</div>
                        <input type="textarea" className={style.inputTextarea}/>
                    </div>
                </div>
                <div>
                    <div className={style.title} style={{paddingLeft: "10%"}}>Выберите пол:</div>
                    <div className={style.fields}>
                        <div>
                            <input type="radio" name="gender"/>
                            <label htmlFor="gender1">
                                Мужской
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="gender"/>
                            <label htmlFor="gender2">
                                Женский
                            </label>
                        </div>
                    </div>
                </div>

                <div style={{paddingLeft: "10%"}}>

                    <div><input type="checkbox"/> я ознакомился с <a href="#">правилами сайта</a></div>
                </div>
                <div style={{paddingLeft: "81%"}}>
                    <input type="submit" className={style.button}/>
                </div>
            </form>
        </>
    );
};

export default RegistrationForm;