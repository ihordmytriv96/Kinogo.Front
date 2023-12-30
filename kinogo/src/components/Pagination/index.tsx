import { useState } from "react";
import { useStyles } from "./style";
import { Grid } from "@mui/material";



interface PaginParams{
    currentPage: number,
    hasNext: boolean,
    hasPrev: boolean,
    pageSize: number,
    totalCounts: number,
    totalPages: number
}

const pagination: PaginParams = {
    currentPage: 1,
    hasNext: true,
    hasPrev: false,
    pageSize: 10,
    totalCounts: 30,
    totalPages: 200,
}


function CustomPagination(){
        const classes = useStyles();
        const totalPages = pagination.totalPages;
        const minPagedListCount = 8;
        const minOneSidePaginButtons = 4;
        const hasPrev = pagination.hasPrev;
        const hasNext = pagination.hasNext;
        let buttons: number[] = []
        const [currentPage, setCurrentPage] = useState<number>(pagination.currentPage)

        
        const generateItemClassName = (item: number) => {
            return `${classes.item} ${currentPage === item ? classes.itemActive : ''}`;
        };

        const handleChangePage = (page: number) => {
            setCurrentPage(page);
        }

        const prevButtons: number[] = [];     
        const nextButtons: number[] = [];
        const minPaginListCount: number = 8;

        if(currentPage > totalPages || currentPage <= 0){
            throw new Error("BAD CURRENT PAGE")
        }else{
            if(currentPage - minOneSidePaginButtons > 0){
                for(let i = 1; i <= minOneSidePaginButtons; i++){
                    if(currentPage - i === 1){
                        break;
                    }
                    prevButtons.push(currentPage - i)
                }
                prevButtons.reverse();
            }else{
                for(let i = 2; i < currentPage; i++){
                    prevButtons.push(i)
                }
            }

            if(currentPage + minOneSidePaginButtons <= totalPages){
                for(let i = 1; i <= minOneSidePaginButtons; i++){
                    nextButtons.push(currentPage + i)
                }
            }else{
                for(let i = currentPage; i < totalPages; i++){
                    if(i + 1 === totalPages){
                        break;
                    }
                    nextButtons.push(i + 1)
                }
            }
            if(currentPage == 1 || currentPage == totalPages){
                buttons = [...prevButtons, ...nextButtons]
            }else{
                buttons = [...prevButtons, currentPage, ...nextButtons]
            }
                    
            let buttonsLenght = buttons.length;
            
            if(buttonsLenght - 1 < minPaginListCount)
            {
                const needItemsToRightSide = minPaginListCount - buttonsLenght;
                const haveItemsToRight = totalPages - currentPage

                if(haveItemsToRight > needItemsToRightSide){
                    let rightSideNumbers;
                    if(haveItemsToRight - needItemsToRightSide > needItemsToRightSide){
                        rightSideNumbers = needItemsToRightSide;
                    }else{
                        rightSideNumbers = needItemsToRightSide - haveItemsToRight;
                    }

                    for(let i = 1; i <= rightSideNumbers + 1; i++){
                        if(buttons[buttonsLenght - 1] === totalPages - 1){
                            break;
                        }
                        buttons.push(buttons[buttonsLenght - 1] + i)
                    }
                }
                buttonsLenght = buttons.length
            }

            if(buttonsLenght < minPagedListCount){
                let minButton = buttons[0]
                let needItemsToLeft = minPagedListCount + 1 - buttonsLenght + 1
                for(let i = 1; i < needItemsToLeft; i++){
                    buttons.unshift(minButton - i)
                }
            }
        }
    
    return (
        <Grid container className={classes.paginWrap} >
            <Grid item md={1.4} xs={6} className={hasPrev ? classes.item : classes.itemDisabled} onClick={() => handleChangePage(currentPage - 1)}>
                <a>Назад</a>
            </Grid>
            <Grid container item xs={9.2}>
                <Grid item xs className={generateItemClassName(1)} onClick={() => handleChangePage(1)}><a>1</a></Grid>
                    {
                        currentPage - minOneSidePaginButtons > 2
                        ? 
                        <Grid item xs className={classes.item}><span>...</span></Grid>
                        :   
                        null
                    }
                        {
                            buttons.map((item, index)=>
                                <Grid item key={index} xs className={generateItemClassName(item)} onClick={() => handleChangePage(item)}><a>{item}</a></Grid>
                            )
                        }
                    {
                        totalPages - currentPage > minOneSidePaginButtons 
                        ? 
                        <Grid item xs className={classes.item}><span>...</span></Grid> 
                        : 
                        null
                    }
                <Grid item xs className={generateItemClassName(totalPages)} onClick={() => handleChangePage(totalPages)}><a>{totalPages}</a></Grid>
            </Grid>
            <Grid item md={1.4} xs={6} className={hasNext ? classes.lastItem : classes.lastItemDisabled} onClick={() => handleChangePage(currentPage + 1)}>
                <a>Далі</a>
            </Grid>
        </Grid>
    )
}


export default CustomPagination;