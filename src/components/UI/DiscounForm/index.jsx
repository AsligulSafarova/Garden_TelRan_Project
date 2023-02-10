import React from 'react';
import s from './style.module.sass'

export default function DiscountForm() {
  return (  
    <form className={s.form_container}>
      <input type="tel" placeholder='+4912548788555' title='phone' maxLength={14}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required />
      <button>Получить скидку</button>
    </form>
    
  )
}
