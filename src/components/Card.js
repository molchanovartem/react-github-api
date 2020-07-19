import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    Card: {
        padding: 15,
        borderRadius: 6,
        border: '1px solid #e1e4e8',
        backgroundColor: '#f6f8fa',
        marginBottom: 20
    },
})

const Card = ({children}) => {
    const classes = useStyles()

    return (
        <div className={classes.Card}>
            {children}
        </div>
    )
}

export default Card
