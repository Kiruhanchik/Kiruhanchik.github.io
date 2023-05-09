
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Tasks from './components/Tasks';
import Portfolio from './components/Portfolio';
import Titulnik from './components/Titulnik';

function App() {  
  let [kafedra, setKafedra] = useState('');
  let [group, setGroup] = useState('');
  let [prepod, setPrepod] = useState('');
  let [you, setYou] = useState('');

  const addKafedraHandler = (event) => {
    setKafedra(event);
  }

  const addGroupHandler = (event) => {
    setGroup(event);
  }

  const addPrepodHandler = (event) => {
    setPrepod(event);
  }

  const addYouHandler = (event) => {
    setYou(event);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio />}/>
        <Route path='/tasks' element={<Tasks onAddKafedra={addKafedraHandler} onAddGroup={addGroupHandler} onAddPrepod={addPrepodHandler} onAddYou={addYouHandler} kafedra={kafedra} group={group} prepod={prepod} you={you}/>}/>
        <Route path='/titulnik' element={<Titulnik kafedra={kafedra} group={group} prepod={prepod} you={you}/>}/>
      </Routes>
    </div>
  );
}

export default App;
