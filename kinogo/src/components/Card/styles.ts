import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    cardWrap: {
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      overflow: "auto",
    },
    cardContent: {
      textAlign:"center",
      width:"100%",
      overflow:"hidden",
    },
    cardMedia: {
      position:"relative",
      "&::before":{
        content:"''",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        border:"5px solid transparent",
        transition: "border-color 0.5s, background-color 0.5s",
        zIndex: 1,
      },
      "&:hover::before":{
        borderColor:"rgb(180, 70, 42)",
        backgroundColor:"rgba(1,1,1,.5)",
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
    },
    cardMediaSwiper:{
        height:"200px",
        width:'127px',
        "& .info-icon":{
            top:"13%",
            left:"22%",
        },
    },
    cardContentSwiper:{
        background:"rgb(36, 53, 68)",
    },
    cardWrapSwiper:{
        width: 127, 
        minHeight: 245, 
    },
    cardMediaMain:{
        height:"247.11px",
        width:'172.08px',
        "& .info-icon":{
            top:"10.5%",
            left:"18%",
        },
    },
    cardContentMain:{
        background:"#131415",
    },
    cardWrapMain:{
        width: 172.08, 
        minHeight: 292.109, 
        margin:"10px 1% 40px"
    },
    fullQuality:{
        position: "absolute",
        top: "15px",
        right: "0",
        zIndex: "4",
        display: "inline-block",
        lineHeight: "30px",
        backgroundColor: "rgba(0,0,0,.7)",
        color: "#fff",
        padding: "0 10px",
        fontSize: "12px",
        fontWeight: "700",
    }
    
  }), 
);