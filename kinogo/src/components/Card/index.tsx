import { useStyles } from "./styles";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import { SwiperItem } from "../Swiper";
import { CARD_MEDIA_TYPE } from "../../types/cardStyles";

interface CardProps{
  item: SwiperItem,
  handlePopoverOpen: (event: any) => void;
  handlePopoverClose: () => void;
  cardType: CARD_MEDIA_TYPE;
}

const CustomCard: React.FC<CardProps> = ({item, handlePopoverOpen, handlePopoverClose, cardType}) => {
    const classes = useStyles();
   

    const getCardContentStyle = () => {
      switch(cardType){
        case CARD_MEDIA_TYPE.Swiper: 
          return `${classes.cardContent} ${classes.cardContentSwiper}`;
        case CARD_MEDIA_TYPE.Main:
          return `${classes.cardContent} ${classes.cardContentMain}`
      }
    }
    const getCardMediaStyle = () => {
      switch(cardType){
        case CARD_MEDIA_TYPE.Swiper: 
          return `${classes.cardMedia} ${classes.cardMediaSwiper}`;
        case CARD_MEDIA_TYPE.Main:
          return `${classes.cardMedia} ${classes.cardMediaMain}`;
      }
    }
    const getCardWrapperStyle = () => {
      switch(cardType){
        case CARD_MEDIA_TYPE.Swiper: 
          return `${classes.cardWrap} ${classes.cardWrapSwiper}`;
          case CARD_MEDIA_TYPE.Main:
          return `${classes.cardWrap} ${classes.cardWrapMain}`;
      }
    }
    

  return (
      <Card  className={getCardWrapperStyle()}>
          <CardMedia 
            className={getCardMediaStyle()}
            image={item.imgPath} 
          >
                  <IconButton 
                    className='play-icon' 
                  >
                        <PlayCircleIcon 
                          sx={{fontSize:"70px"}}
                        />
                  </IconButton>
                  <Link href="#" underline="hover" >
                  <div 
                    className="info-icon"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                  <IconButton 
                    sx={{color:"white"}}
                  >
                        <InfoIcon 
                          sx={{fontSize:"30px"}}
                        />
                  </IconButton>
                  </div>
                  </Link>
                  {cardType === CARD_MEDIA_TYPE.Main ?
                    <div className={classes.fullQuality}>
                      {item.quality}
                    </div>
                  : null
                  }
          </CardMedia>  
          <CardContent 
            className={getCardContentStyle()} 
            sx={{padding: 0,
              "&:last-child": 
                  {paddingBottom: 0},
                  height:"45px"}}
          > 
              <Link href="#" underline="hover" color="#9f9f9f" >
              <Typography 
                variant="body1"
              >
                {item.name} 
              </Typography>
              </Link>
          </CardContent>
      </Card>
  );
};

export default CustomCard;