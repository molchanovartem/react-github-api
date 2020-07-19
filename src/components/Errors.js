import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    ErrorBlock: {
        backgroundColor: '#ffe3e6',
        padding: '5px 10px',
        border: '1px solid rgba(158,28,35,.2)',
        color: 'rgba(158,28,35,.6)',
        marginBottom: 15
    }
})

const Errors = ({errors}) => {
    const classes = useStyles()

    return (
        <div className={classes.ErrorBlock}>
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        </div>
    )
}

export default Errors
