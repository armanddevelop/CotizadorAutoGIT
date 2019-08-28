import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';
import Resumen from './Resumen';
import Resultado from './Resultado';
class App extends Component {
  state = {
    resultado: '',
    datos:{},
    
  }

    cotizarSeguro = (data) =>{
      const {marca,year,plan,name} = data;
      //Agregar que la base de cada seguro sea de $2000
      let resultado = 2000;
      //obtener la diferencia de año y por cada año restar el 3% al valor del seguro
      const diferenciaYears = obtenerDiferenciaAnio(year);
      
      resultado -= ((diferenciaYears * 3) * resultado ) / 100;
      
      //aumentar el precio del seguro segun la marca del auto
      resultado = calcularMarca(marca) * resultado;
      
      //obteniendo el plan del coche
      let incrementoPlan = obtenerPlan(plan);

      //dependiendo del plan incrementar resultado
      resultado = parseFloat(resultado * incrementoPlan).toFixed(2);
      //creando el objeto para pasarlo al state
      const dataAuto = {
        marca: marca,
        year: year,
        plan:plan,
        name: name
      }
      
      //pasando al state
      this.setState ({
        resultado:resultado,
        datos: dataAuto
        
      });
      
    }
    render() {
        return (
            <div className="class-name">
              <Header title ="Cotizador de seguro de Auto"></Header>
              <div className = "contenedor-formulario">
              <Formulario
                  quoteSafe = {this.cotizarSeguro}
                ></Formulario>
                
                <Resumen
                  data = {this.state.datos}
                  finalresult = {this.state.resultado}
                ></Resumen>
                <Resultado resumenResults = {this.state.resultado}></Resultado> 
              </div>
            </div>
        );
    }
}

export default App;
