import React from 'react';

const validationComponent = (props) => {
    
    let textOutput = "text too short"
    if(props.inputLength > 5){
        textOutput = "text ok"
    }
    /** 
     * altrimenti potrei usare operatore ternario 
     * dentro al return con i due diversi <p>
    */
    return(
        <div>
            <p>{textOutput}</p>
        </div>
    );
}

export default validationComponent;