import React from 'react'

const Title = ({setTitle}) => {
    //En esta función le estoy diciendo al state de title del archivo app que a traves del valor del input represente la informacion recibida
    const defineTitleName = (e) => {
        setTitle(e.target.value);
    }
    return(
        <div>
            <input type="text" name="title" onChange={defineTitleName} />
        </div>
    )
    
}

export default Title