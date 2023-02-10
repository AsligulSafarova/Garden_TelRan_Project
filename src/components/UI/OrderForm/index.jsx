import React from 'react';
import s from './style.module.sass';

export default function OrderForm() {
    return (
        <form className={s.container}>
            <input type="phone" placeholder='+49125487888888' name='phone' />
            <button>заказать</button>
        </form>
    )
}
