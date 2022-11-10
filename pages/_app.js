import React from "react";
import { ThemeConsumer, ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/ColorMode";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

// _app.js -> definições globais do NextJS
// ThemeProvider -> prover tema pro app todo
// ColorModeProvider -> prover o state de light ou dark para todo o app
function ProviderWrapper(props) {
    return(
        <ColorModeProvider initialMode = {"dark"}> 
            {props.children}
        </ ColorModeProvider>
    )   
}

function MyApp({ Component, pageProps }) {
    /* const themeActive = {
        backgroundLevel1: "",
    }; */

    const contexto = React.useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />  
        </ThemeProvider>      
    )
}

export default function _App(props) {
    return(
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    ) 
};
