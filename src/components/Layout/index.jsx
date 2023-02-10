import React from 'react';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import s from './style.module.sass';
import ButtonToNav from '../UI/ButtonToNav';
import NavBar from "../NavBar"

export default function Layout() {
	function check_scroll() {
		const header = document.getElementById('top');
		const btn = document.getElementById('btn_scroll');
		var distanceToTop = header.getBoundingClientRect().top;
		if (distanceToTop <= -300) {
			btn.style.display = 'block';
		} else {
			btn.style.display = 'none';
		}
	}

	window.addEventListener('scroll', check_scroll);

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
