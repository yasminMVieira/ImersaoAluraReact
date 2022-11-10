import React from 'react';

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("configurar!") }
});

export default function ColorModeProvider(props){
    const [mode, setMode] = React.useState(props.initialMode);
    
    //aqui seria a function toggleMode
    return (
        // entender pq tá sendo ignorado
        <ColorModeContext.Provider value={{ mode: mode, setMode }} >
            {props.children}
        </ColorModeContext.Provider>
    )
}