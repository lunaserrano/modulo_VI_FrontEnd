import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ConsultaFetch from "./consultaFetch";

function Inicio() {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
       navigate('/login');
  }
  const {data:usuarios} = ConsultaFetch("http://localhost:3000/usuarios");


  return (
    <div className="container">


      <div>
        <h1>Listado de usuarios</h1>
       
          {usuarios.length===0&&<h3 className="text-center alert alert-danger">
            No hay datos para mostrar
          </h3>}
        
       
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>Email</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              
                {usuarios.length>0 && usuarios.map((usuario) => (
                  <tr key={usuario.usuarioId}>
                    <td>{usuario.email}</td>
                    <td>{usuario.nombre}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editar/${usuario.usuarioId}`)}
                        className="btn btn-primary"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/eliminar/${usuario.usuarioId}`)
                        }
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        
      </div>
    </div>
  );
}
export default Inicio;
