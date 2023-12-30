import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { menuItems } from './menuItems';
import { useStyles } from './style';
import CustomDropDawnMenu from '../DropDownMenu';
import { useState } from 'react';




function NavBar(){
    const classes = useStyles();
    const [anchorDropDownMenu, setAnchorDropDownMenu] = useState<any | null>(null);
    const open = Boolean(anchorDropDownMenu);

    const handleDropDownMenuOpen = (event:any) => {
      event.preventDefault();
      setAnchorDropDownMenu(event.currentTarget)
    }


    const handleDropDownMenuClose = () => {
        setAnchorDropDownMenu(false);
    }

    return(
            <div className={classes.fixedBar} >
                <Grid container width="1200px" alignItems="center">
                    <Grid item xs={2.5}>
                        <img style={{height:"50px"}} src="../images/logo1.png" alt="1" />
                    </Grid>
                    <Grid item xs={6} sx={{ justifyContent: "center"}} onMouseLeave={handleDropDownMenuClose}>
                        <div className={classes.listItems}>
                                {menuItems.map((item) => 
                                    <a href="" className={classes.listItem} key={item.id} onMouseEnter={handleDropDownMenuOpen}>
                                        {item.name}
                                    </a>
                                )}
                        </div>
                        <CustomDropDawnMenu isOpen={open} handlePopoverClose={handleDropDownMenuClose} parentEl={anchorDropDownMenu}/>
                    </Grid>
                    <Grid item 
                        xs={1.5}
                        p="16px 0px"
                        display="flex"
                        justifyContent="center"
                        >
                        <SearchIcon sx={{color:"white"}}/>
                    </Grid>
                    <Grid item container
                        xs={2}
                        p="16px 0px"
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item>
                        <AccountCircleIcon sx={{color:"white"}}/>
                        </Grid>
                        <Typography color="white" fontSize={13} margin="0px" paddingLeft={2} fontWeight={500}>
                            Авторизація
                        </Typography>
                    </Grid>
                </Grid>
            </div>
    );
}


export default NavBar;