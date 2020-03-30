import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import taka from "../../Assets/Taka.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    control: {
        '& div': {
            '& input': {
                textAlign: 'right',
                marginLeft: '22%'
            }
        }
    },
    iconWrapper: {
        width: "25%",
        height: "36px",
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        left: 2,
    },
    icon: {
        height: 18,
        width: 15
    }
});

const PriceField = ({ ctrlName, placeHolder, rowData, editControl }) => {
    const classes = useStyles();
    
    const { control } = useFormContext();

    return (
        <div className={classes.root}>
            <Controller
                fullWidth
                variant="outlined"
                size="small"
                className={classes.control}
                disabled={rowData && rowData.key !== editControl}
                name={ctrlName}
                defaultValue={placeHolder || ""}
                as={TextField}
                control={control}
                placeholder='0.00'
            />
            <div className={classes.iconWrapper}>
                <img src={taka} className={classes.icon} alt='$'/>
            </div>
        </div>
    );
};

export default PriceField;

