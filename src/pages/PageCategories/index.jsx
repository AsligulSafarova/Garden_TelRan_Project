import React from 'react';
import CategoryContainer from '../../components/CategoryContainer';
import s from './style.module.sass';

export default function PageCategories() {
    return (
        <div className={s.wrapper}>
            <CategoryContainer/>
        </div>
    )
}
