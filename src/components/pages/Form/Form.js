import React, {useState} from "react";
import s from "./Form.module.css"

const Form = () => {
    const [nameUser, setNameUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const onSubmitUserForm = (e) => {
        e.preventDefault();
        const myObject = {
            nameUser,
            phoneUser
        }
        console.log(myObject)
    }

    const checker = (e) => {
        if (e.target.id === "nameUser" && e.target.value.length > 1) {
            setNameUser(e.target.value);
        }
        if (e.target.id === "phoneUser" && e.target.value.length >= 12) {
            setPhoneUser(e.target.value);
        }
    }

    return (
        <form onSubmit={onSubmitUserForm} className={s.form_container}>
            <div className={s.form_control}>
                <label htmlFor="nameUser">Имя</label>
                <input
                    type="text"
                    id="nameUser"
                    name="nameUser"
                    onChange={checker}
                />
            </div>
            <div className={s.form_control}>
                <label htmlFor="phoneUser">Номер телефона</label>
                <input
                    type="tel"
                    id="phoneUser"
                    name="phoneUser"
                    onChange={checker}
                />
            </div>
            <div className={s.form_control}>
                <button type="submit">
                    Отправить
                </button>
            </div>
        </form>
    )
}

export default Form;