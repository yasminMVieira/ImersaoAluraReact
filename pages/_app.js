import React from "react";
import { ThemeConsumer, ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";

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
    },
    pink: {
        backgroundBase: "#D49BA7",
        backgroundLevel1: "#DAABB5",
        backgroundLevel2: "#EFC3CA",
        borderBase: "#EEDAE5",
        textColorBase: "#222222",
    }
};

// _app.js -> definições globais do NextJS
// ThemeProvider -> prover tema pro app todo
// ColorModeProvider -> prover o state de light ou dark para todo o app
function ProviderWrapper(props) {
    return(
        <ColorModeProvider initialMode = {"pink"}> 
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
            <RegisterVideo />
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
