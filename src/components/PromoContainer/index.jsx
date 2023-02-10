import React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.sass';
import PromoFilter from '../PromoFilter';
import Product from '../Product';


export default function PromotionsContainer() {
    const promotions = useSelector(state => state.promotions);

    return (
     
    promotions&&
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.subheader}>
				<p>Все Акции</p>
			</div>
            <div className={s.filtration}>
				<PromoFilter />
            </div>
            <div className={s.products_container}>
                {
                    promotions.map(prom => prom.show_flg
                        ? <Product key={prom.id} {...prom} />
                        : '')
                }
            </div>
        </div> 
    )
}
