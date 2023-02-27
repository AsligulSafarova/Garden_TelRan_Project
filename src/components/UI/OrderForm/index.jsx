import React  from 'react';
import s from './style.module.sass';
import { useDispatch, useSelector } from 'react-redux';

export default function OrderForm() {
    const products_basket = useSelector(state => state.basket);
    const dispatch = useDispatch();


const submit = event =>{
    event.preventDefault();
    const {phone} = event.target;
    console.log(products_basket);
    phone.value = " ";

}

    return (
        <form className={s.container} onSubmit = {submit}>
            <input type="phone" placeholder='+49125487888888' name='phone'  />
            <button>заказать</button>
        </form>
    )
}
