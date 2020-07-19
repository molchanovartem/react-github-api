import React from "react";
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
    Btn: props => ({
        backgroundColor: props.color,
        padding: '3px 12px',
        color: '#ffffff',
        borderRadius: 6,
        cursor: 'pointer'
    }),
})
const Btn = ({onClick, children, ...props}) => {
    const classes = useStyles(props)

    return (
        <div className={classes.Btn} onClick={() => onClick()}>
            {children}
        </div>
    )
}

Btn.defaultProps = {
    color: '#2ea44f',
}

export default Btn
