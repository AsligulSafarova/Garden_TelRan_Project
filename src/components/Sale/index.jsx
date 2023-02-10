import React from 'react';
import s from './style.module.sass'; 
import picture from './media/sale_image.png'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';



export default function Sale() {


    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.sale_container}>
                <div className={s.title}>
                    <p className={s.sale_p_elem}> Распродажа </p>
                    <p>  в честь нового сезона</p>
                </div>
                <Link to='all_products' className={s.btn_container}>
                    <Button>Все акции</Button>
                    <Button>Подробнее</Button>
                </Link>
            </div>
            <div className={s.sale_picture}>
                <img src={picture} alt="sale_image_picture" />
            </div>
        </div>
    )
}