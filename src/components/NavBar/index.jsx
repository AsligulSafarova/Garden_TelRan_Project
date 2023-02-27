import React from 'react';
import logo from './media/nav_logo.png';
import s from './style.module.sass';
import { ShoppingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export default function NavBar() {


    return (
        <div className={['wrapper', s.header].join(' ')} id='top'>
            <div className={s.header_main}>
                <a  href="/"><img className={s.header_logo} src={logo} alt="icon_logo" /></a>
                <NavLink to='/registration' >
                    <button className={s.btn_log}>
            
                    Каталог
                    </button>
                </NavLink>
            </div>
            <div className={s.header_menu} >
                <nav className={s.menu_body}>
            
                    <div  className={s.menu_list} >
                        <NavLink to='all_categories'>Категории</NavLink>
                        <NavLink to='all_products'>Акции</NavLink>
                        <NavLink to='contacts'>Контакты</NavLink>
          
                    </div>
                </nav>
                <NavLink to='/basket'><ShoppingOutlined className={s.icon_bag} /></NavLink>  
            </div>
        </div>
    )
}
