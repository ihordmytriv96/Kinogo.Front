import { useStyles } from './styles';
import { CardMedia, Grid, Typography, Link, IconButton } from '@mui/material';
import CustomCard from '../Card';
import { useState } from 'react';
import { CARD_MEDIA_TYPE } from '../../types/cardStyles';
import CustomPopover from '../Popover';
import { movieWithDescription } from '../Swiper/testData';
import DownloadMore from '../DownlMore';
import CustomPagination from '../Pagination';
import { Link as RouterLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

const exampleMovies = [
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
]  


const sideBarMovies = [
    {id:"1", URL:"rusnya-otrumye-po-zaslygah", name:"русня отримує по заслугах", imgPath:"../images/русня отримує по заслугах.jpg"},
    {id:"2", URL:"krashi-filmu-disney", name:"Кращі фільми Дісней", imgPath:"../images/кращі фільми діснею.jpg"},
    {id:"3", URL:"trash-horror", name:"Треш-муві", imgPath:"../images/треш муві.jpg"},
    {id:"4", URL:"serialy-pro-mafiu", name:"Серіали про мафію, банди, гангстерів", imgPath:"../images/серіали про мафію.jpg"},
    {id:"5", URL:"walt-disney", name:"Walt Disney: Анімація", imgPath:"../images/walt disney.jpg"},
    {id:"6", URL:"filmu-z-mylt-personajamu", name:"Фільми з мульто-персонажами", imgPath:"../images/фільми з мульт-персонажами.jpg"},
    {id:"7", URL:"filmu-golovolomku", name:"Фільми-головоломки", imgPath:"../images/фільми головоломки.jpg"},
]

function MainSection() {
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
            <div style={{position:"relative"}}>
                <Grid container className={classes.container}>
                    <Grid container item md={9.5} borderRight="4px solid #2d2e30">
                        <Grid container item className={classes.contentHeader} xs={12}>
                            <Typography variant="h3" pl={"20px"}>Останні надходження</Typography>
                        </Grid>
                        <Grid container>
                            {exampleMovies.map((item =>
                                <Grid item xs={6} sm={4} md={3} lg={2.4} key={item.id}>
                                    <CustomCard 
                                        handlePopoverClose={handlePopoverClose}
                                        handlePopoverOpen={handlePopoverOpen} 
                                        item={item} 
                                        cardType={CARD_MEDIA_TYPE.Main}
                                    />
                                </Grid>
                                ))
                            }
                        </Grid>
                        <Grid container pt={"15px"}>
                            <Grid item xs={12}>
                                <DownloadMore/>
                            </Grid>
                            <Grid item xs={12} display="flex" justifyContent="center">
                                <CustomPagination/>
                            </Grid>
                        </Grid>
                    </Grid>
                        <Grid container item md={2.5} >
                        <Grid container item className={classes.contentHeader} justifyContent="center">
                            <Typography variant="h3">Підбірки</Typography>
                        </Grid>
                        <Grid container item p={1}>
                            {
                                sideBarMovies.map((item) => 
                                <Link component = {RouterLink}
                                    underline='hover'
                                    to={`/collections/${item.URL}`}
                                    key={item.id}
                                >
                                    <Grid item pb={3} key={item.id} sx={{backgroundColor:"rgba(1,1,1,.5)"}}>
                                        <CardMedia sx={{width:"230px",
                                            height:"90px", 
                                            position:"relative", 
                                            overflow:"hidden", 
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
                                            },}}>
                                        <IconButton className='play-icon'>
                                        <VisibilityIcon sx={{fontSize:"70px"}}/>
                                        </IconButton>
                                        <img
                                            src={item.imgPath}
                                            alt={item.name}
                                            style={{
                                                width: "230px",
                                                height: "130px",
                                                objectFit: "none", 
                                                objectPosition: "top", 
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                filter: "brightness(0.8)",
                                            }}
                                            />
                                            <Typography
                                            color="white"
                                            sx={{
                                                position: "absolute",
                                                bottom: 12,
                                                left: 4,
                                                padding: "8px",
                                            }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </CardMedia>
                                    </Grid>
                                </Link>
                                )
                            }
                        </Grid>
                    </Grid> 
                </Grid>
                <CustomPopover isOpen={open} parentEl={anchorPopover} movie={movieWithDescription}/>
            </div>
    );
}

export default MainSection;
