import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    swiperWrapper:{
      background:"#243544",
      width:"100%",
      display:'flex',
      flexDirection:"column"
    },
    headWrap:{
      display:'flex',
      height:"45px",
      alignItems:"center",
      background:"#2d2e30",
      justifyContent:"center"
    },
    titleWrap:{
      minWidth:"1160px",
      paddingLeft:"20px"
    },
    swiperContainer: {
      margin: '0 auto',
      padding: "10px 0px",
      [theme.breakpoints.up('lg')]:{
        maxWidth: '1160px',
      },
      [theme.breakpoints.between('md', 'lg')]:{
        maxWidth: "860px",
      },
      [theme.breakpoints.between('sm', 'md' )]:{
        maxWidth: '560px',
      },
      [theme.breakpoints.between('xs', 'sm' )]:{
        maxWidth: '304px',
      },
    },
    cardWrap: {
      width: 127, 
      minHeight: 245, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      overflow: "auto",
    },
    cardContent: {
      padding: 0,
      background:"rgb(36, 53, 68)",
      textAlign:"center",
      width:"100%",
      overflow:"hidden",
    },
    cardMedia: {
      height:"200px",
      width:'127px',
      position:"relative",
      transition: 'transform 0.5s ease-in-out',
      "&::before":{
        content:"''",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        border:"5px solid transparent",
        transition: "border-color 0.3s",
        zIndex: 1
      },
      "&:hover::before":{
        borderColor:"rgb(180, 70, 42)",
        backgroundColor:"rgba(1,1,1,.5)"
      },
      "& .play-icon":{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        color:"rgb(180, 70, 42)",
        fontSize: 0,
        opacity: 0,
        transition: "opacity 0.3s"
      },
      "&:hover .play-icon":{
        opacity: 1
      },
      "& .info-icon":{
        position:"absolute",
        top:"13%",
        left:"22%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        color:"white",
        fontSize: 0,
        opacity: 0,
        transition: "opacity 0.3s"
      },
      "&:hover .info-icon":{
        opacity: 1
      },
    }
  }), 
);