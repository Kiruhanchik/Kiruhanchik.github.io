import React from 'react'
import './Titulnik.css';
import logo from './станкин-лого.png';

export default function Titulnik(props) {
  return (
    <div className='Titulnik'>
        <div className='header'>
            <h1>Титульный лист</h1>
        </div>
        <div className='main'>
            <img id='logo' src={logo} />
            <h2>МИНОБРНАУКИ РОССИИ</h2>
            <p><b>федеральное государственное бюджетное образовательное учреждение<br/>высшего образования</b></p>
            <p><b>«Московский государственный технологический университет <br/>«СТАНКИН»</b></p>
            <p id='end'><b>(ФГБОУ ВО «МГТУ «СТАНКИН»)</b></p>
            <p className='institut'>Институт цифровых интеллектуальных систем</p>
            <p>Кафедра <b>{props.kafedra}</b></p>
            <div className='student'>
                <p>Выполнил: <br/>студент гр. <b>{props.group}</b></p>
                <p className='write'>(дата)</p>
                <p className='write'>(подпись)</p>
                <p><b>{props.you}</b></p>
            </div>
            <div className='prepod'>
                <p id='prin'>Принял:</p>
                <p className='write'>(дата)</p>
                <p className='write'>(подпись)</p>
                <p><b>{props.prepod}</b></p>
            </div>
            <h4>Москва 2023</h4>
        </div>
    </div>
  )
}
