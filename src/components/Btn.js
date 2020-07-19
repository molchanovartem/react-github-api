import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    Btn: {
        backgroundColor: '#2ea44f',
        padding: '3px 12px',
        color: '#ffffff',
        borderRadius: 6,
        cursor: 'pointer'
    },
})

const Button = ({onClick, children}) => {
    const classes = useStyles()

    return (
        <div className={classes.Btn} onClick={() => onClick()}>
            {children}
        </div>
    )
}

export default Button
