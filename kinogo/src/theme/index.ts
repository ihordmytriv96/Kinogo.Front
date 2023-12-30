import { createTheme, Theme } from "@mui/material";

function createAppTheme()
{
    const theme: Theme = createTheme({
        typography: {
            fontFamily:'PT Sans, sans-serif;',
            h1: {
                fontWeight: 500,
            },
            h2: {
                fontSize: '1.5rem',
                fontWeight: 400,
            },
            h3: {
                fontSize: '20px',
                lineHeight: '45px',
                fontWeight: 700,
                color: "white"
            },
            h4: {
                fontSize: '1rem',
                lineHeight: '1.5rem',
                fontWeight: 400,
            },
            h5: {
                fontSize: '20px',
                fontWeight: 100,
                color:"#9f9f9f"
            },
            body1:{
                fontSize: '14px',
                fontWeight: 700,
                marginTop:"5px",
                lineHeight:"1rem"
            },
            body2:{
                fontSize: '13px',
                fontWeight: 500,
                color: "#9f9f9f",
                lineHeight:"1rem"
            }
            
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,   
                xl: 1536,
            },
        },
        spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104],
        palette: {
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                light: '#1EF1C6',
                main: '#ffffff',
                dark: '#339586',
                contrastText: '#000',
            },
            secondary: {
                light: '#222',
                main: '#222',
                dark: '#000',
                contrastText: '#fff',
            },
            info: {
                light: '#29AEF2',
                main: '#29AEF2',
                dark: '#0E73A6',
                contrastText: '#fff',
            },
            success: {
                light: '#0FDB79',
                main: '#0FDB79',
                dark: '#17665A',
                contrastText: '#fff',
            },
            warning: {
                light: '#FFF2E8',
                main: '#ED6C02',
                dark: '#ED6C02',
                contrastText: '#000',
            },
            error: {
                light: '#FFEBEB',
                main: '#FF0000',
                dark: '#c62828',
                contrastText: '#fff',
            },
            grey: {
                50: '#E0E0E0',
                100: '#BFBFBF',
                200: '#969696',
                300: '#808080',
                400: '#4A4A4A',
                500: '#4A4A4A',
                600: '#2C2C2C',
                700: '#222222',
                800: '#131313',
                900: '#131313',
            },
            text: {
                primary: '#131313',
                secondary: '#222222',
            },
            divider: '#BFBFBF',
        },
        shape: {
            borderRadius: 0,
        },
    });

    return theme;
}

export const theme = createAppTheme();
export const getTheme = () => theme;