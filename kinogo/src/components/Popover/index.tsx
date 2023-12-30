import  React, { FC, ReactNode, useState } from 'react';
import { Typography } from '@mui/material';
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import { MovieProps } from '../Swiper/testData';

interface PopoverProps {
  isOpen: boolean;
  movie: MovieProps;
  parentEl: any;
}

const CustomPopover: FC<PopoverProps> = ({parentEl , movie,  isOpen}) => {
    const halfScreen = window.innerWidth / 2 -40;
    let arrowType;
    const popoverContrainer: React.CSSProperties = {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex:5,
      display: isOpen? 'flex' : 'none',
      transform: 'translateX(-50%)',
      width:"420px",
      height:"165px",
      background:"rgb(30 30 30)",
      border: "2px solid rgb(180, 70, 42)",
    }

    let movieDescription = null;
    if (movie && movie.description) {
      movieDescription = (
        <div style={{borderTop:"2px solid rgb(180, 70, 42)", width:"380px", display:"flex", flexDirection:"column", justifyContent:"center", marginTop:"10px"}}>
          <Typography variant="body2" textAlign="center" pt="10px">Короткий опис:</Typography>
          <Typography variant='body2' mt={1}>
            {movie.description.slice(0,300) + "..."}
          </Typography>
        </div>
    );
    popoverContrainer.height = "320px"; 
    }

    if(parentEl){
      const anchorRect = parentEl.getBoundingClientRect()
      popoverContrainer.top = anchorRect.top - 3;
      popoverContrainer.left = anchorRect.left + anchorRect.width * 5.75;
      if(anchorRect.left as number >= halfScreen){
        popoverContrainer.left = anchorRect.left - 217;
        arrowType = true;
      }else{
        arrowType = false;
      }
    }



    return (
      isOpen ?      
      <div style={popoverContrainer}>
        <div style={{margin: "20px 0px 20px 20px"}}>
          <div style={{pointerEvents:"none"}}>
              {arrowType 
              ?
                <ArrowRightTwoToneIcon
                  style={{fontSize:"50px",
                  position:"absolute", 
                  
                  top:"0",
                  left:"399",
                  color:"white"}}
                /> 
              : <ArrowLeftTwoToneIcon 
                  style={{fontSize:"50px",
                  position:"absolute",
                  top:"0",
                  left:"-29",
                  color:"white"}}
                  />
              }
          </div>
          <Typography 
            variant='h5'
            pb={1}
          >
             {movie.title}
          </Typography>
          <Typography 
            variant='body2'
            pb={1}
          > Жанр: &nbsp;
            <span 
              style={{color: "rgb(180, 70, 42)"}}
            > 
              {movie.genres}
            </span>
          </Typography>
          <Typography 
            variant='body2'
            pb={1}
          > Рік виходу: 
            <span> {movie.year} </span>
          </Typography>
          <Typography 
            variant='body2'
          > Актори: 
            <span> {movie.actors} </span>
          </Typography>
          {movieDescription}
        </div>
      </div>
      : null
    )
};
  
  export default CustomPopover;