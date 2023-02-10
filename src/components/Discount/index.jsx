import React from 'react';
import s from './style.module.sass';
import picture_gnome from './media/gnome.png';
import DiscountForm from "../UI/DiscounForm"

export default function Discount() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.picture_block}>
                <img src={picture_gnome} alt="gnome_picture" />
            </div>
            <div className={s.discount_info}>
                <div className={s.discount_subheader}>
                    <p className={s.p_discount}>Скидка 5%</p>
                    <p>на первый заказ</p>
                </div>
                <div className={s.discount_form}>
                    <DiscountForm/>
                </div>
            </div>
        </div>
    )
}
