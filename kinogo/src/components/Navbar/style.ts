import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    fixedBar: {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      width: "100%",
      margin: "-100px 0px 0px 0px",
      backgroundColor:"rgba(0,0,0,.6)",
      zIndex: 999,
      height:"50px"
    },
    gridItem: {
      [theme.breakpoints.down('lg')]: {
        visibility: 'hidden',
      },
    },
    listItems:{
      height:"36px", 
      display:"flex", 
      flexDirection:"row",
      justifyContent:"center", 
      alignItems:"center",
      '@media (max-width: 956px)': {
        display: 'none', 
      },
    },
    listItem: {
      display:"flex", 
      justifyContent:"center", 
      padding:"0px 14px",
      fontWeight:"700",
      fontSize:"14px",
      color:"white",
      textDecoration:"none",
      "&:hover":{
        color:"rgb(200, 90, 42)"
    },
  },
  }),
);