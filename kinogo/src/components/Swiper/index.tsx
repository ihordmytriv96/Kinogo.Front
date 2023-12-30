import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { sliderSettings as settings } from "./settings";
import CustomPopover from "../Popover";
import { movieWithoutDescription } from "./testData";
import CustomCard from "../Card";
import { CARD_MEDIA_TYPE } from "../../types/cardStyles";

export interface SwiperItem{
  id: string;
  name: string;
  imgPath: string;
  quality: string;
}


const swiperItems: SwiperItem[] = [
    {id: "1", name: "Пташиний короб", imgPath: '../images/Пташиний короб.jpg', quality:"1080p" },
    {id: "2", name: "Ендрю Шульц: Горезвісний", imgPath: '../images/Горезвісний.jpg', quality:"1080p" },
    {id: "3", name: "Гра в ілюзію", imgPath: '../images/Гра в ілюзію.jpg', quality:"1080p" },
    {id: "4", name: "Ходячі мерці: Місто мерців / Мертве", imgPath: '../images/Мертве місто.jpg', quality:"1080p" },
    {id: "5", name: "Між хвилями", imgPath: '../images/Між хвилями.jpg', quality:"1080p" },
    {id: "6", name: "Дещо від тіффані", imgPath: '../images/Дещо ві тіффані.jpg', quality:"1080p" },
    {id: "7", name: "Агнець", imgPath: '../images/Агнець.jpg', quality:"1080p" },
    {id: "8", name: "Лютий", imgPath: '../images/Лютий.jpg', quality:"1080p" },
    {id: "9", name: "Рай", imgPath: '../images/Рай.jpg', quality:"1080p" },
    {id: "10", name: "Людина яка намалювала Бога", imgPath: '../images/Людина яка намалювала Бога.jpg', quality:"1080p" },
    {id: "11", name: "Русалонька", imgPath: '../images/Русалонька.jpg', quality:"1080p" },
] 


function CustomSwiper() {
    const classes = useStyles();
    const [anchorPopover, setAnchorPopover] = useState<any | null>(null);

    const open = Boolean(anchorPopover);

    const handlePopoverOpen = (event:any) => {
      event.preventDefault();
      setAnchorPopover(event.currentTarget)
    }

    const handlePopoverClose = () => {
      setAnchorPopover(null);
    }

  return (
    <div className={classes.swiperWrapper}>
        <div className={classes.headWrap}>
              <div className={classes.titleWrap}>
                  <Typography 
                    variant="h3"
                  > 
                    Новинки світового прокату 2022-2020 
                  </Typography>
              </div>
        </div>
      <div className={classes.swiperContainer}>
        <Slider {...settings}>
          {swiperItems.map((item) =>
            <Box pb={2} key={item.id}>
                <CustomCard item={item} 
                  handlePopoverClose={handlePopoverClose} 
                  handlePopoverOpen={handlePopoverOpen}
                  cardType={CARD_MEDIA_TYPE.Swiper}
                  />
                </Box>
            )}
        </Slider>
      </div>
      <CustomPopover movie={movieWithoutDescription}
          parentEl={anchorPopover} 
          isOpen={open}
      />
    </div>
  );
};

export default CustomSwiper;