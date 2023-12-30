import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme: Theme) => ({
    downloadMore: {
        cursor:"pointer",
        display:"inline-block",
        textDecoration:"none", 
        backgroundColor:"#CA563F", 
        width:"fit-content", height:"60px",
        padding:"0px 60px", lineHeight:"60px",
        color:"white",
        borderRadius:"30px"
        }
    }),
);