import { ColorModeContext,useMode } from "../styles/theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Header from "../app/components/global/Header"
import Head from "next/head";
function App(){
    const [theme,colorMode] = useMode();
    return (

        <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme = {theme}>
            <CssBaseline/>
            <div className="app">
                <main className="content">
                <Head>
                    <title>Cric Stats</title>
                    <meta name='description' content='Cricket'/>
                </Head>
                <Header/>
                </main>
            </div>
        </ThemeProvider>
        </ColorModeContext.Provider>  
    );
}
export default App;