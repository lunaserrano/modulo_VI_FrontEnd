import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Menu from './Menu';
import Inicio from './Inicio';
import Listado from './Listado';
import Registro from './Registro';
import Deposito from './Depositos';
import Editar from './Editar';
import Login from './Login';
import Salir from './Salir';
function App() {
  return (
   <Router>
    <div>
    <Menu/>
     <Routes>
       <Route path="/" exact element={<Inicio/>} />
       <Route path="/listado" element={<Listado/>} />
       <Route path="/registro" element={<Registro/>} />
       <Route path="/depositos" element={<Deposito/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/salir" element={<Salir/>} />
       <Route path="/editar/:id" element={<Editar/>} />
     </Routes>
    </div>
   </Router>
  );
}

export default App;
