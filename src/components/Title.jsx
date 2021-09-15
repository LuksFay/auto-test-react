import React, {useState} from 'react'

const Title = ({setTitle}) => {

    const [titleName, setTitleName] = useState('');

    const defineTitleName = (e) => {
        setTitleName(e.target.value);
    }
    setTitle(titleName);
    return(
        <div>
            <input type="text" name="title" onChange={defineTitleName} />
        </div>
    )
    
}

export default Title