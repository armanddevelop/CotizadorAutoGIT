import React,{Component} from 'react';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';

class Formulario extends Component{
    // Los refs son para leer los valores de los campos de un formulario
    yearRef     = React.createRef();
    marcaRef    = React.createRef();
    basicoRef   = React.createRef();
    completoRef = React.createRef();

    state = {
        nombre:''
    }
    handleChange = (event) => {
        const nombre = event.target.value;
        this.setState({ nombre });
    }
    cotizarSeguro = (event) =>{
        event.preventDefault();
        // leer el plan
        const plan = this.completoRef.current.checked ? 'Completo' : 'Basico';

        // crear el objeto
        const infoAuto={
            marca:  this.marcaRef.current.value,
            year:   this.yearRef.current.value,
            plan:   plan,
            name:   this.state.nombre
        }
        // enviarlo al componente principal
        this.props.quoteSafe(infoAuto);
        
        

    }
    render() {
        const {nombre} = this.state;
        return (
            <ValidatorForm className="cotizar-auto" onSubmit={this.cotizarSeguro}>
                <div className="campo">
                    <div id="campoNombre">
                        <label>Nombre del cliente*</label>
                        <TextValidator 
                        className="name-field" 
                        onChange={this.handleChange}
                        name="name"
                        value={nombre}
                        type="text" 
                        placeholder="ingresa el nombre del cliente"
                        validators={["required"]}
                        errorMessages={["El nombre es requerido"]}
                        ></TextValidator>
                    </div>
                    <div id="campoMarca">
                        <label>Marca</label>
                        <select name="marca" ref={this.marcaRef} >
                            <option value="americano">Americano</option>
                            <option value="europeo">Europeo</option>
                            <option value="asiatico">Asiatico</option>
                        </select>
                    </div>
                </div>
                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan*:</label>
                    <input type="radio" ref={this.basicoRef} name="plan" value="basico" defaultChecked/> Básico
                    <input type="radio" ref={this.completoRef} name="plan" value="completo"/> Completo
                </div>
                <button type="submit" className="boton">Cotizar</button>
            </ValidatorForm>
        );
    }
}

export default Formulario;