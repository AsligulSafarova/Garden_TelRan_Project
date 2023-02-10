import React, { useEffect } from 'react';
import s from './style.module.sass';
import Product from '../Product';
import { useParams } from 'react-router-dom';
import FilterForProducts from '../FilterForProducts';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/asyncActions/products';
import { useContext } from 'react';
import { Context } from '../../context';

export default function ProductsContainer() {
	const { id_category } = useParams();
	const dispatch = useDispatch();


	const { categories } = useContext(Context);
	const all_products_in_category = useSelector(state => state.products);
	const current_category = categories.find((el) => el.id === +id_category);


	useEffect(() => {
		dispatch(loadProducts(id_category));
	}, []);

	return (
		current_category && (
			<div className={['wrapper', s.wrapper].join(' ')}>
				<div className={s.subheader}>
					<p>{current_category.title}</p>
					<p className={s.count_product}></p>
				</div>
				
				<div className={s.filtration}>
					<FilterForProducts/>
				</div>

				<div className={s.products_container}>
					
					{
						all_products_in_category.map(product => product.show_flg
							? <Product key={product.id} {...product} />
							: '')
					}
				</div>
			</div>
		)
	);
}
