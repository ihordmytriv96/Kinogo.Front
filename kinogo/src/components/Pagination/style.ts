import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles((theme: Theme) => ({
    paginWrap: {
        maxWidth:"806px",
        backgroundColor: "#1f2123",
        borderRadius:"3px", 
        margin: "20px 0 40px",
        fontSize:"16px", 
        cursor:"pointer",
        color:"white",
        border:"1px solid #333",
        lineHeight:"50px",
    },
    item: {
        padding:"0 5px",
        borderRight:"1px solid #333",
        textAlign:"center",     
        "&:hover":{
            backgroundColor: "#ca563f"
        },
        "& > a": {
            width:"100%"
        },
        "& > span": {
            width:"100%"
        }
    },
    lastItem: {
        padding:"0 5px",
        textAlign:"center",     
        "&:hover":{
            backgroundColor: "#ca563f"
        },
        "& > a": {
            width:"100%"
        },
    },
    itemDisabled: {
        padding:"0 5px",
        borderRight:"1px solid #333",
        textAlign:"center", 
        color:"grey",
        pointerEvents:"none",
    },
    lastItemDisabled:{
        padding:"0 5px",
        textAlign:"center", 
        color:"grey",
        pointerEvents:"none",
    },
    itemActive: {
        backgroundColor: "#ca563f"
    }
  }),
);