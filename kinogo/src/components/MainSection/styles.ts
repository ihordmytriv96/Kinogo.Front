import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
    maxWidth: "1200px", 
    margin: '0 auto',
    height:"875.22px", 
    alignItems:"flex-start",
    '&::before': {
        content: "''",
        position: "absolute",
        left: "0",
        top: "0",
        height: "45px",
        backgroundColor: "#2d2e30",
        width: "100%",
        }
    },
    contentHeader: {
        height:"45px", 
        zIndex:'50',
        flexGrow: "1",
        alignItems:"center"
    },
  }),
);