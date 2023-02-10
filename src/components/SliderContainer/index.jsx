import React from 'react';
import MediaContainer from '../MediaContainer';
import s from './style.module.sass';
import PageCategories from '../../pages/PageCategories';
import { Link } from 'react-router-dom';


export default function SliderContainer() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.block_subheader}>
                <p>Категории</p>
                <Link to='/all_categories' element={<PageCategories/>}><button>Все категории</button></Link>
            </div>
            <div className={s.slider}>
                <MediaContainer />
            </div>
        </div>
    )
}
