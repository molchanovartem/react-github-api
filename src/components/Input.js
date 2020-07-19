import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    Input: props => ({
        border: '1px solid #e1e4e8',
        padding: '5px 12px',
        borderRadius: 6,
        width: props.width,
        outline: 'none'
    }),
})

const Input = ({value, onChange, ...props}) => {
    const classes = useStyles(props)

    return (
        <input className={classes.Input} value={value} onChange={onChange} type="text"/>
    )
}

Input.defaultProps = {
    width: '100%',
}

export default Input
