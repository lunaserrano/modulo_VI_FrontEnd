//Generated Component react js named Editar

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Editar() {
  const navigate = useNavigate();

  if (!localStorage.getItem('token')) {
      navigate('/login');
  }
    const { id } = useParams();
   
    const [usuario, setUsuario] = useState({});
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    

useEffect(() => {

    fetch('http://localhost:3000/usuarios/'+id,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ localStorage.getItem('token')
        }
    }
    )
    .then(response => response.json())
    .then(data => setUsuario(data))
    .catch (error => console.log(error))

},[])

async function FEditar(e){
    e.preventDefault()
    const datos = { "email":email, "nombre":nombre};
    console.log(datos)
    fetch("http://localhost:3000/usuarios/"+id, {
        method: "PATCH",
        body: JSON.stringify(datos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer "+ localStorage.getItem('token')
        },
      }).catch((error) => {
        console.error("Error:", error);
      })
}

    return (
        <div className="container">
            <h1>Actualizar registro con id {id}</h1>

            <form id="LoginForm" onSubmit={FEditar}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => setNombre(e.target.value)}
            value={usuario.nombre}
            type="text"
            class="form-control"
          
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            EMAIL
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={usuario.email}
            type="email"
            class="form-control"
          
            required
          />
        </div>
       

        <button type="submit" class="btn btn-primary">
          Actualizar
        </button>
      </form>
        </div>
    );
}