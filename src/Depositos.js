import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
    

  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [usuarioId_FK, setusuarioId_FK] = useState(0);

  async function enviarDatos(e) {

  e.preventDefault();
    const datos = { descripcion: descripcion, cantidad: cantidad, usuarioId_FK: parseInt(usuarioId_FK, 10) };
    try {
        const response=  await fetch("http://localhost:3000/auth/registrarDeposito", {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then(async response => await response.json())
       
        if(response.statusCode!=200){
          alert("El deposito se ha registrado");
        }else{
            
          alert("El usuario se ha registrado");
          //redireccionar a inicio
          window.location.href = "/";
        }	
      } catch (error) {
        console.error("Ocurrió un error:", error);
      }

     /* state={
        user:[]
      }

      componentDidMount() {
        axios
        .get("http://localhost:3000/usuarios").then((response)=>{
          console.log(response);
          this.setState({user:response})
        })
        .catch((error)=>{
          console.log(error);
        });
    }*/
    

  }

  

  return (
    <div className="depositos">
      <form onSubmit={enviarDatos}>
        <div className="container">
            <div className="row">
          <div className="card">
            <div className="card-header"><h5 className="card-title">Depositos</h5></div>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="form-group col">
                    <label className="form-lable">Usuario</label>
                    
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setusuarioId_FK(e.target.value)}
                      value={usuarioId_FK}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-lable">Descripción</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setDescripcion(e.target.value)}
                      value={descripcion}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="form-lable">Deposito</label>


                    


                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => setCantidad(e.target.value)}
                      value={cantidad}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
          </div>
        </div>
      </form>
      
      <div className="container-fluid p-5">
        <div className="row">
        
        </div>
      </div>
    </div>
  );
}

export default App;
