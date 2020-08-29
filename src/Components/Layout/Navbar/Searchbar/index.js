import React from 'react'
import { SearchOutlined  } from "@ant-design/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        flex: '0 0 40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70rem'
        // transform: 'translateX(-5px)',
        // marginLeft: '6rem'
    },
    input: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        width: '80%',
        padding: '.8rem 2rem',
        backgroundColor: theme.palette.header.searchBackground,
        borderRadius: '.5rem',
        border: `1px solid ${theme.palette.grey[1000]}`,
        transition: 'all 0.3s',
        marginRight: '-3.25rem',
        '&:focus' : {
            outline: 'none',
            width: '100%',
            backgroundColor: '#f7f7f7'
        },
        '&::-webkit-input-placeholder' : {
            fontSize: '1.4rem',
            fontWeight: 100,
            color: '#aaa',
        }
    },
    button: {
        border: 'none',
        backgroundColor: 'transparent',
        transform: 'translateX(-5px)',
        borderTopRightRadius: '.5rem',
        borderBottomRightRadius: '.5rem',
        '&:focus' : {
            outline: 'none',
        },
    },
    icon: {
        fontSize: '2rem',
        color: theme.palette.primary.icon,
    }
}));
  
const Searchbar = ({style}) => {
    const classes = useStyles();
    return (
        <form style={style} className={classes.search}>
            <input type="text" placeholder="Search for Something..." className={classes.input}/>
            <button className={classes.button}>
                <SearchOutlined className={classes.icon} />
            </button>
        </form>
    )
}

export default Searchbar;