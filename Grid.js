import React, {useState} from "react";
function Message() {
    const [text, setText] = useState('Uzbekistan')

    return (
        <>
        <h1>{text}</h1>
            <button onClick={ () => setText('Moscow')}>blond</button>
            <button onClick={ () => setText('China')}>asian</button>
            <button onClick={ () => setText('Niggeria')}>nigga</button>
            <button onClick={ () => setText('Africa')}>no water</button>
            <button onClick={ () => setText('Italy')}>europe</button>


        </>
    )

}

export default Message