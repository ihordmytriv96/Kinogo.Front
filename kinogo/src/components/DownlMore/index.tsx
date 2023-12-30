import { useStyles } from "./style";



function DownloadMore() {
    const classes = useStyles();

    return (
    <div style={{textAlign:'center'}}>
        <a onClick={() => console.log("1")} 
        className={classes.downloadMore}
        >
            <span style={{fontWeight:"700", fontSize:"18px"}}>Завантажити ще</span>
        </a>
    </div>
    )
}


export default DownloadMore;