import { Theme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>({
    centerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: "100px"
    },
    layout: {
      position:'relative',
      display: 'flex',
      flexDirection:"column",
      width:"100%"
    },
  })
);