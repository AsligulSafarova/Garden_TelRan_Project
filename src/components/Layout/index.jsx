import React from 'react';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import s from './style.module.sass';
import ButtonToNav from '../UI/ButtonToNav';
import NavBar from "../NavBar"

export default function Layout() {
	return (
		<>
	
			<NavBar/>
		<div className= {s.outlet}>
				<Outlet />
			</div>
		    <Footer /> 
			<div id='btn_scroll' className={['wrapper', s.btn_scroll].join(' ')}>
				<ButtonToNav />
			</div>

		</>
	);
}
