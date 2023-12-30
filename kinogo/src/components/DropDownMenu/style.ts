import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    dropDownMenu: {
      position:"absolute", 
      top:"100%", 
      left:"32%",
      width:"820px",
      backgroundColor:"#131415", 
      display:"flex",
    },
    dropDownMenuItems:{
      lineHeight:"30px",
      "&:hover":{
        backgroundColor:"rgb(180, 70, 42)", 
        transition: "0.3s",
      }
    },
    dropDownMenuItem:{
      padding:"0px 15px",
      display:"block",
      width:"100%",
      textDecoration:"none",
      '&.isHeader': {
        color: 'rgb(180, 70, 42)',
        fontWeight: 700,
        '&:hover': {
          color: 'white', 
        },
      },
      '&:not(.isHeader)': {
        color: 'white',
      },
    }
  }),
);