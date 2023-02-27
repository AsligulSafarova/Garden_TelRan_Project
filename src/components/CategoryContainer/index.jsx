import React from 'react';
import AllCategories from '../AllCategories';
import s from './style.module.sass'

export default function CategoryContainer() {

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <p className={s.subheader}>Категории</p>
      <div>
        <AllCategories type='block'/>
      </div>
    </div>
  )
}
