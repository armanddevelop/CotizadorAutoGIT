import React, {Component} from 'react';
import {primeraMayuscula} from '../Helper';


class Resumen extends Component{

    showResume =()=>{
        const {marca,year,plan,name} = this.props.data;
        
        if(!marca || !year || !plan || !name) return null;
        return(
            <div className="resumen">
                  <h2>Resumen de cotizacion</h2>
                  <li> Nombre del cliente: {primeraMayuscula(name)} </li>
                  <li>Marca del auto: {primeraMayuscula(marca)}</li>
                  <li>Plan: {plan}</li>
                  <li>Año del auto: {year}</li>
             </div> 
         )
    }
    render(){
        return(
           <div>
               {this.showResume()}
                
            </div> 
        )
        
    }
    
}

export default Resumen;