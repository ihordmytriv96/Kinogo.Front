import  React, { FC } from 'react';
import { useStyles } from './style';
import { dropMenuList } from './dropDownMenuItems';

interface DropDownMenuProps {
  isOpen: boolean;
  handlePopoverClose:() => void;
  parentEl: any;
}

const CustomDropDawnMenu: FC<DropDownMenuProps> = ({isOpen, handlePopoverClose, parentEl}) => {
    const classes = useStyles();
    const menuContainer: React.CSSProperties = {
      position: 'fixed',
      top: 0,
      left: 0,
      display: isOpen? 'flex' : 'none',
      transform: 'translateX(-50%)',
      width:"820px",
      backgroundColor:"#131415",
    }

    if(parentEl){
      const anchorRect = parentEl.getBoundingClientRect()
      menuContainer.top = anchorRect.top + 32;
      menuContainer.left = anchorRect.left + anchorRect.height * 25.80;
      console.log(anchorRect)
      
    }
    console.log(menuContainer.left)

    return (
      isOpen ?      
      <div style={menuContainer} onMouseLeave={handlePopoverClose}>
        {dropMenuList.map((item, index) => 
        <div key={index}>
            {item.map((item) => 
                <div className={classes.dropDownMenuItems}
                            key={item.id}
                >
                    <a href="" className={`${classes.dropDownMenuItem} ${item.isHeader ? 'isHeader' : ''}`}>
                        {item.name}
                    </a>
                </div>
            )}
        </div>
        )}
        </div>
      : null
    )
};
  
  export default CustomDropDawnMenu;