import React, {Component} from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';

class Resultado extends Component{

    render(){
        const resultado = this.props.resumenResults;
        if(!resultado)return null;
        return(
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado"
                        key = {resultado}
                        timeout = {{enter:500, exit:500}}
                    >
                        <span>El total del seguro es: ${resultado}</span>
                    </CSSTransition>
                </TransitionGroup>

            </div>
        )
    }

}
export default Resultado;