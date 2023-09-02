import { useCallback, useEffect, useState } from "react";
import List from './list';


const TestReact = () => {

    const [input, setInput] = useState(1);
    const [light, setLight] = useState(false);

    const theme = {
        backgroundColor: light ? 'white' : 'grey',
        color: light ? 'grey' : 'white'
    }

    const getItems = useCallback(() => {
        return [input + 10, input + 100];
    },[input]);

    const themeChangeHandler = () => {
        setLight(prevState => !prevState);
    }

    return (
        <div style={theme}>
            <input type="number" value={input} onChange={(e) => setInput(parseInt(e.target.value))} />
            <button onClick={themeChangeHandler}>Change Theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default TestReact;