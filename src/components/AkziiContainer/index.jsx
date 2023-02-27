import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';
import s from './style.module.sass';
import {Link} from "react-router-dom"


export default function AkziiContainer() {
    const promotions = useSelector(state => state.randomPromotions); 
    return (
        
        <div className={['wrapper', s.promotions_container].join(' ')}>
          <Link to = "all_products"><p className={s.subheader}> Акции</p></Link> 
            <div className={s.products_card}>
                {
                    promotions.map(promotion => <Product key={promotion.id} {...promotion} />)
                }
            </div>
        </div>
    )
}
