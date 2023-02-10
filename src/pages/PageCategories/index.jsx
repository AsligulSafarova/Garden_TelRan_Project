import React from 'react';
import CatContainer from '../../components/CatContainer';
import s from './style.module.sass';

export default function PageCategories() {
    return (
        <div className={s.wrapper}>
            <CatContainer/>
        </div>
    )
}
