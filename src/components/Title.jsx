import React, {useState, useEffect} from 'react'

const Title = ({setTitle}) => {

    const [titleName, setTitleName] = useState('');

    const defineTitleName = (e) => {
        setTitleName(e.target.value);
    }
    useEffect(() => {
        return(
            // Esto estaba separado no adentro de un useEffect, quise ponerlo aca adentro para tratar de resolver el warning de la consola.
            setTitle(titleName)
        )
    }, [])
    
    return(
        <div>
            <input type="text" name="title" onChange={defineTitleName} />
        </div>
    )
    
}

export default Title