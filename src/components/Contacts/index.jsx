
import React from 'react';
import {InstagramOutlined } from "@ant-design/icons";
import { WhatsAppOutlined } from "@ant-design/icons";
import s from "./style.module.sass";


export default function Contacts() {
  return (
    <div className= {s.container}>
<div className= {s.cont}>
    <p className= {s.contacts}> Контакты</p>
    <p className= {s.numbers} >+7 999 999 99 99</p>

    <div className= {s.sosh_media}>
      <div>
         <InstagramOutlined className = {s.inst} />
       <p>instagram</p> 
      </div>
  <div className = { s.whats}>
      <WhatsAppOutlined  className = { s.whatsapp} />
      <p>WhatsApp</p>
  </div>
    </div>
   </div>
   <div className= {s.addres}>
    <p className= {s.p_adress}> Адрес </p>
    <p className= {s.city}>г. Космонавтов   <span className= {s.span}> проезд Космонавтов, д.11</span> </p>
    <p className= {s.time_work}> Режим работы</p>
    <p className = {s.all_time}>Круглосуточно</p>
   </div>
</div>
  )
}
