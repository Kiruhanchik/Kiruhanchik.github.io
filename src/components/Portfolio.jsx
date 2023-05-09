import React from 'react'
import { useState } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useScroll} from "framer-motion";


const Animation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: 1
    }
}


const Portfolio = () => {
  let [name, setName] = useState(''); 
  let [surname, setSurname] = useState(''); 
  let [age, setAge] = useState('');
  let [education, setEducation] = useState('');
  let [show, setShow] = useState(false);

  let [borderName, setBorderName] = useState({border: 'none'});
  let [borderSurname, setBorderSurname] = useState({border: 'none'});
  let [borderAge, setBorderAge] = useState({border: 'none'});
  let [borderEducation, setBorderEducation] = useState({border: 'none'});
  let [borderSelect, setBorderSelect] = useState({border: 'none'});

  let [select, setSelect] = useState('Выбрать навык:')
  let [experience, setExperience] = useState('')

  let [job, setJob] = useState('')

  function Anketa(show) {
    if (show == true) {
        return (
            <>
                <p className='Discript'><b>Твоя анкета:</b></p>
                <p className='anketa'>Кандидат: <b>{name} {surname}</b></p>
                <p className='anketa'>Возраст: <b>{age}</b></p>
                <p className='anketa'>Образование: <b>{education}</b></p>
                <p style={{color: 'green'}} className='anketa'><b>{job}</b></p>
            </>
        )
    } else {
        return (
            <>
                <p className='Empty'><b>Пусто :(</b></p>
            </>
        )
    }
  }

  return (
    <div className='Portfolio'>
        <div className='Header'>
            <h1 className='animate__animated animate__pulse'>Моё резюме</h1> 
        </div> 
        <div className='Main'> 
            <div className='Part1'>
                <img 
                    src='https://sun9-77.userapi.com/impg/NYApNLlgMk-uzb2uNAcRlVFUX1nV85N6v-OQZw/wOI7TgGr6C8.jpg?size=720x1080&quality=96&sign=37819bab11596bbe4adb5c6b15525fe9&type=album'
                />
                <div className='Info'>
                    <h3 className='flowtext'>Привет, меня зовут Пестун Кирилл и я начинающий frontend - разработчик</h3>
                </div>
            </div>
            <div className='Label'>
                <h2>Мои проекты</h2>
            </div>
            <motion.div initial="hidden" variants={Animation} whileInView="visible" className='Part2'>
                    <Link className='Link' to='/tasks'><b>Задачки JS📚</b></Link>
                    <Link className='Link' to='https://kiruhanchik.github.io/Beauty-Store/'><b>Beauty-Store🛁</b></Link>
                    <Link className='Link' to='https://kiruhanchik.github.io/App_Net/'><b>App_Net📱</b></Link>
                    <Link className='Link' to='https://kiruhanchik.github.io/Watch_Store/'><b>Watch_Store⌚</b></Link>
            </motion.div>
            <div className='Label'>
                <h2>Создать анкету</h2>
            </div>
            <motion.div initial="hidden" variants={Animation} whileInView="visible" className='Part3'>
                <div className='left'>
                    <p className='Discript'><b>Узнай, примут ли тебя на работу🤝</b></p>
                    <input style={borderSurname} className='aboutme' value={surname} placeholder='Введи фамилию' 
                    onChange={(event) => {setSurname(event.target.value);
                        setBorderSurname({border: 'none'})
                    }}></input>
                    <input style={borderName} className='aboutme' value={name} placeholder='Введи имя' 
                    onChange={(event) => {setName(event.target.value);
                        setBorderName({border: 'none'})
                    }}></input>
                    <input style={borderAge} className='aboutme' value={age} placeholder='Введи возраст' 
                    onChange={(event) => {setAge(event.target.value);
                        setBorderAge({border: 'none'})
                    }}></input>
                    <input style={borderEducation} className='aboutme' value={education} placeholder='Какое образование?' 
                    onChange={(event) => {setEducation(event.target.value);
                        setBorderEducation({border: 'none'})
                    }}></input>
                    <select style={borderSelect} onClick={() => setBorderSelect({border: 'none'})} 
                    onChange={e => {
                        setSelect(e.target.value);
                    }}>
                        <option>Выбрать навык: </option> 
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>JavaSctipt</option>
                        <option>ReactJs</option>
                    </select>
                    <div className='work'>
                        <p><b>Опыт работы: </b></p>
                        <p><input onClick={(e) => setExperience(e.target.value)} type="checkbox" name="a" value="нет опыта" />нет опыта</p>
                        <p><input onClick={(e) => setExperience(e.target.value)} type="checkbox" name="a" value="менее 1 года" />менее 1 года</p>
                        <p><input onClick={(e) => setExperience(e.target.value)} type="checkbox" name="a" value="более 1 года" />более 1 года</p>
                    </div>
                    <button className='send' onClick={() => {
                        if (surname === '' || name === '' || age === '' || select == 'Выбрать навык:' || experience == '' || education === '') {
                            alert('Заполните все поля!');
                            if (surname === '') {
                                setBorderSurname({border: '0.5px solid red'});
                            };
                            if (name === '') {
                                setBorderName({border: '0.5px solid red'});
                            };
                            if (age === '') {
                                setBorderAge({border: '0.5px solid red'});
                            };
                            if (select == 'Выбрать навык:') {
                                setBorderSelect({border: '0.5px solid red'});
                            };
                            if (experience == '') {
                                alert('Выберите опыт работы!');
                            };
                            if (education == '') {
                                setBorderEducation({border: '0.5px solid red'});
                            };
                        } else {
                            setShow(true);
                        };
                        if (education !== 'Высшее' || education !== 'высшее') {
                            setJob('Извини! Ты не принят')
                        };
                        if (education == 'Высшее' || education == 'высшее'){
                            setJob('Поздравляю! Ты принят')
                        };
                    }}>Отправить на проверку</button>
                    <button onClick={() => {
                        setName('');
                        setSurname('');
                        setAge('');
                        setJob('');
                        setSelect('Выбрать навык: ');
                        setExperience('');
                        setEducation('');
                        setShow(false);
                    }} className='default'>Сброс</button>
                </div>
                <div className='right'>
                    {Anketa(show)}
                </div>
            </motion.div>
        </div>
        <div className='Footer'>
            <div className='Nets'>
                <Link to='https://vk.com/kiryhanchik'><img src='https://img.icons8.com/?size=512&id=112294&format=png'/></Link>
                <Link to='https://t.me/the_kiruhanchik'><img src='https://img.icons8.com/?size=512&id=k4jADXhS5U1t&format=png'/></Link>
            </div>
            <a className='mail' href="mailto:krill.pestun@g,ail.com"><b>krill.pestun@gmail.com</b></a>
            <label><b>© Все права защищены</b></label>
        </div>
    </div>
  )
}

export default Portfolio;
