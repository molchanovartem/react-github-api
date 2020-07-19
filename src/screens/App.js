import React, {useEffect} from 'react';
import {createUseStyles} from 'react-jss'
import {useSelector, useDispatch} from 'react-redux'

import Card from "../components/Card";
import {loadRepositories} from "../store/actions/repositoryActions";
import {search} from "../store/actions/repositoryActions";
import Search from "../components/Search";

const useStyles = createUseStyles({
    App: {},
})

const App = () => {
    const classes = useStyles()
    const repositories = useSelector(state => state.repository.repositories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRepositories())
    }, [dispatch])

    const onSearch = (text) => {
        dispatch(search(text))
    }

    return (
        <div className={classes.App}>

            <h1>Github API</h1>

            <Search onSearch={onSearch}/>

            {repositories.map(repo =>
                <Card key={repo.id}>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href={repo.html_url} target="_blank">
                        {repo.name}
                    </a>
                </Card>
            )}

        </div>
    );
}

export default App;
