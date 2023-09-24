import React, { useState } from "react";


function Listado() {

  //Login Data
  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')

  const usuario=
{
  
  "nombre":"Roberto Perez",
  "clave":"12345678",
  "email":"clase03@gmail.com"
  
}


function FEnviar  () {

 
    //POST localhost:3000/auth/registrar
  //Method for POST request
  fetch("http://localhost:3000/auth/registrar", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).catch((error) => {
    console.error("Error:", error);
  })


}

  async function FAutenticar(e){
  e.preventDefault()
  const datos = { "email":email, "clave":clave};
  //POST localhost:3000/auth/login
  await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  })
  .then(async response => localStorage.setItem("token",await response.text()))
  
}

  return (
    <div className="container">

      <button className="btn btn-primary" onClick={FEnviar}>Enviar</button>

      <form id="LoginForm" onSubmit={FAutenticar}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            EMAIL
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            CLAVE
          </label>
          <input
          onChange={(e) => setClave(e.target.value)}
            value={clave}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default Listado;
