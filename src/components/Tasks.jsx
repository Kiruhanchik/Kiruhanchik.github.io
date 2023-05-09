import React from 'react'
import { useState } from 'react';
import './Tasks.css';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';

export default function Tasks({onAddKafedra, onAddGroup, onAddPrepod, onAddYou, kafedra, group, prepod, you}) {

  function MyButton(show) {
    if (show == true) {
        return (
            <>
              <Link to='/titulnik' className='MyButton'>Получить</Link>
            </>
        )
    }
  }
 
  let [state1, setState1] = useState(''); 
  let [value1, setValue1] = useState(''); 
  let [value2, setValue2] = useState(''); 

  let [value3, setValue3] = useState('');
  let [value4, setValue4] = useState('');

  let [selectNumber, setSelectNumber] = useState(1);
  let [number1, setNumber1] = useState('');
  let [operation, setOperation] = useState('');
  let [result, setResult] = useState(0);
  let [number2, setNumber2] = useState('');
  let [borderResult, setBorderResult] = useState({border: 'none'})
  let [range, setRange] = useState(0);
  let [colorRange, setColorRange] = useState({color: 'green'});

  let [flip, setFlip] = useState(false);
  let [flip2, setFlip2] = useState(false);
  let [flip3, setFlip3] = useState(false);
  let [flip4, setFlip4] = useState(false);
  let [flip5, setFlip5] = useState(false);
  let [flip6, setFlip6] = useState(false);
  let [flip7, setFlip7] = useState(false);
  let [show, setShow] = useState(false);

  let [borderKafedra, setBorderKafedra] = useState({border: '2px solid black', backgroundColor: 'white'});
  let [borderGroup, setBorderGroup] = useState({border: '2px solid black', backgroundColor: 'white'});
  let [borderPrepod, setBorderPrepod] = useState({border: '2px solid black', backgroundColor: 'white'});
  let [borderYou, setBorderYou] = useState({border: '2px solid black', backgroundColor: 'white'});

  let props = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip,
    delay: 0,
    onRest: () => setFlip(!flip),
  })

  let props2 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip2,
    delay: 1000,
    onRest: () => setFlip2(!flip2),
  })

  let props3 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip3,
    delay: 2000,
    onRest: () => setFlip3(!flip3),
  })

  let props4 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip4,
    delay: 3000,
    onRest: () => setFlip4(!flip4),
  })

  let props5 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip5,
    delay: 4000,
    onRest: () => setFlip5(!flip5),
  })

  let props6 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip6,
    delay: 5000,
    onRest: () => setFlip6(!flip6),
  })

  let props7 = useSpring ({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip7,
    delay: 6000,
    onRest: () => setFlip7(!flip7),
  })

  const Color = () => {
    setColorRange({color: 'red'});
  }

  return (
    <div className='Tasks'>
        <div className='Individ1'> 
        <h3>Индивидуальное задание 1</h3>
        <input value={value1} placeholder='Введите первое число' onChange={(event) => setValue1(event.target.value)}></input>
        <input value={value2} placeholder='Введите второе число' onChange={(event) => setValue2(event.target.value)}></input>
        <button onClick={() => {
          if ((value1 === '') || (value2 === '')) {
            alert('Введите все числа!')
          } else if ((value1 === value2) && (value1 !== '') && (value2 !== '')) {
            setState1('Да')
          } else {
            setState1('Нет')
          }
        }}>Сравнить числа</button>
        <p><b>Числа равны: {state1}</b></p>
      </div>
      <div className='Individ2'> 
        <h3>Индивидуальное задание 2</h3>
        <input placeholder='Введите ваше имя' onChange={(event) => setValue3(event.target.value)}></input>
        <button onClick={() => {
          if (value3 === '') {
            alert('Введите имя!');
          } else {
            alert(`Здравствуйте, ${value3}!`);
          }
        }}>Отправить</button>
      </div>
      <div className='Individ3'> 
        <h3>Индивидуальное задание 3</h3>
        <input placeholder='Введите ваш возраст' onChange={(event) => setValue4(event.target.value)}></input>
        <button onClick={() => {
          if (value4 === '') {
            alert('Введите возраст!');
          } else {
            let age = window.confirm(`Вы уверены, что Вам ${value4} лет?`);
            while (age !== true) {
              let age = window.confirm(`Вы уверены, что Вам ${value4} лет?`);
              if (age == true) {
                break;
              }
            }
          }
        }}>Отправить</button>
      </div>
      <div className='Individ4'> 
        <div>
          <h3>Индивидуальное задание 4</h3>
          <h3>Калькулятор</h3>
          <div style={borderResult} className='result'><b>{result}</b></div>
        </div>
        <button className='getResult' onClick={() => {
          setResult('');
          if (operation == '+') {
            setResult(+number1 + +number2);
          };
          if (operation == '-') {
            setResult(+number1 - +number2);
          };
          if (operation == '*') {
            setResult(+number1 * +number2);
          };
          if (operation == '/') {
            setResult(+number1 / +number2);
          };
          if (result > 15) {
            setResult('число > 15');
            setBorderResult({border: '1.5px solid red'});
          }
        }}>Посчитать</button>
        <p>Если хочешь ввести числа через виртуальную клаву,
          то сначала введи первое число, потом нажми на переключатель и введи второе
        </p>
        <button className='Switch' onClick={() => {
          if (selectNumber == 1) {
            setSelectNumber(2);
          } else {
            setSelectNumber(1);
          }
        }}>Переключатель</button>
        <p>Текущий ввод: <b>{selectNumber}</b></p>
        <p>Первое число: <b>{number1}</b></p>
        <p>Действие: <b>{operation}</b></p>
        <p>Второе число: <b>{number2}</b></p>
        <div className='operations'>
          <button onClick={() => setOperation('+')}>+</button>
          <button onClick={() => setOperation('-')}>-</button>
          <button onClick={() => setOperation('*')}>*</button>
          <button onClick={() => setOperation('/')}>/</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 0);
            } else {
              setNumber2(number2 + 0);
            }
          }}>0</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 1);
            } else {
              setNumber2(number2 + 1);
            }
          }}>1</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 2);
            } else {
              setNumber2(number2 + 2);
            }
          }}>2</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 3);
            } else {
              setNumber2(number2 + 3);
            }
          }}>3</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 4);
            } else {
              setNumber2(number2 + 4);
            }
          }}>4</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 5);
            } else {
              setNumber2(number2 + 5);
            }
          }}>5</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 6);
            } else {
              setNumber2(number2 + 6);
            }
          }}>6</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 7);
            } else {
              setNumber2(number2 + 7);
            }
          }}>7</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 8);
            } else {
              setNumber2(number2 + 8);
            }
          }}>8</button>
          <button onClick={() => {
            if (selectNumber == 1) {
              setNumber1(number1 + 9);
            } else {
              setNumber2(number2 + 9);
            }
          }}>9</button>
          <button onClick={() => {
             if (selectNumber == 1) {
              setNumber1(number1.slice(0, -1));
            } else {
              setNumber2(number2.slice(0, -1));
            }
          }}>⌫</button>
          <button onClick={() => {
            setNumber1('');
            setNumber2('');
            setOperation('');
            setSelectNumber(1);
            setResult(0);
            setBorderResult({border: 'none'});
          }}>C</button>
        </div>
      </div>
      <div className='Individ5'> 
        <h3>Индивидуальное задание 5</h3>
        <input type="range" id="value" name="value"
         min="0" max="9" value={range}/>
        <label style={colorRange} for="volume">{range}</label>
        <div className='values'>
            <button onClick={() => {setRange(0);
              setColorRange({color: 'green'});
            }}>0</button>
            <button onClick={() => {setRange(1);
              setColorRange({color: 'green'});
            }}>1</button>
            <button onClick={() => {setRange(2);
              setColorRange({color: 'green'});
            }}>2</button>
            <button onClick={() => {setRange(3);
              setColorRange({color: 'green'});
            }}>3</button>
            <button onClick={() => {setRange(4);
              setColorRange({color: 'green'});
            }}>4</button>
            <button onClick={() => {setRange(5);
              setColorRange({color: 'green'});
            }}>5</button>
            <button onClick={() => {setRange(6);
              Color();
            }}>6</button>
            <button onClick={() => {setRange(7);
              Color();
            }}>7</button>
            <button onClick={() => {setRange(8);
              Color();
            }}>8</button>
            <button onClick={() => {setRange(9);
              Color();
            }}>9</button>
        </div>
      </div>
      <div className='Individ6'>
        <h3>Индивидуальное задание 6</h3>
        <h3>Rainbow</h3>
        <table>
          <tr>
            <td><animated.td className='innertd1' style={props}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props2}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props2}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props3}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props3}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props4}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props4}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props5}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props5}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props6}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props6}>.</animated.td></td>
          </tr>
          <tr>
            <td><animated.td className='innertd1' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd2' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd3' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd4' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd5' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd6' style={props7}>.</animated.td></td>
            <td><animated.td className='innertd7' style={props7}>.</animated.td></td>
          </tr>
        </table>
        <button className='start'>Пуск одноразово</button>
        <button style={{backgroundColor:'yellow'}} className='start'>Пуск автомат</button>
        <button style={{backgroundColor:'red'}} className='start' onClick={() => {
          setFlip(false);
          setFlip2(false);
          setFlip3(false);
          setFlip4(false);
          setFlip5(false);
          setFlip6(false);
          setFlip7(false);
        }}>Сброс</button>
      </div>
      <div className='Individ7'>
        <div>
          <h2><b>Создай титульник для своего проекта</b></h2>
          <h3>Заполни поля</h3>
          <input onChange={(e) => {onAddKafedra(e.target.value);
            setBorderKafedra({border: '2px solid black', backgroundColor: 'white'})
          }} value={kafedra} style={borderKafedra} 
          placeholder='Твоя кафедра'></input>
          <input onChange={(e) => {onAddGroup(e.target.value);
            setBorderGroup({border: '2px solid black', backgroundColor: 'white'})
          }} value={group} style={borderGroup} 
          placeholder='Твоя группа'></input>
          <input onChange={(e) => {onAddPrepod(e.target.value);
            setBorderPrepod({border: '2px solid black', backgroundColor: 'white'})
          }} value={prepod} style={borderPrepod} 
          placeholder='ФИО преподавателя'></input>
          <input onChange={(e) => {onAddYou(e.target.value);
            setBorderYou({border: '2px solid black', backgroundColor: 'white'})
          }} value={you} style={borderYou} 
          placeholder='Твоё ФИО'></input>
          <button className='get' onClick={() => {
            if (kafedra === '' || group === '' || prepod === '' || you === '') {
              if (kafedra === '') {
                setBorderKafedra({border: '2px solid red', backgroundColor: 'pink'});
              };
              if (group === '') {
                setBorderGroup({border: '2px solid red', backgroundColor: 'pink'});
              };
              if (prepod === '') {
                setBorderPrepod({border: '2px solid red', backgroundColor: 'pink'});
              };
              if (you === '') {
                setBorderYou({border: '2px solid red', backgroundColor: 'pink'});
              };
            } else {
              setShow(true);
            }
          }}>Отправить</button>
          {MyButton(show)}
        </div>
      </div>
    </div>
  )
}