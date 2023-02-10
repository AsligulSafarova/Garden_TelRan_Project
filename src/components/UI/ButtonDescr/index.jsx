import React from 'react';
import s from './style.module.sass';

export default function ButtonDescr(props) {
    return (
        <button {...props} className={s.btn_to_basket}>Добавить в корзину</button>
    )
}
