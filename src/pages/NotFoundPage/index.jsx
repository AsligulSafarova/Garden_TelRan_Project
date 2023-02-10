import React from 'react';
import s from './style.module.sass';
import ButtonBackToHome from '../../components/UI/ButtonBackToHome';
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.warning}></p>
            <p className={s.text}>Извините, но по вашему запросу ничего не найдено</p>
            <div className={s.btn_home}>
                < Link to ="/">
                    <ButtonBackToHome>назад</ButtonBackToHome>
                </Link>
            </div>
        </div>
    )
}
