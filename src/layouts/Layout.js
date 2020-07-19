import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    Layout: {
        height: '100hv',
        display: 'flex',
        flexDirection: 'column',
    },
    Main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        paddingLeft: '15%',
        paddingRight: '15%'
    },
})


const Layout = ({children}) => {
    const classes = useStyles()

    return (
        <div className={classes.Layout}>
            <main className={classes.Main}>
                {children}
            </main>
        </div>
    )
}

export default Layout
