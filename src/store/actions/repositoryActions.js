import {LOAD_REPOSITORIES} from "../types";

export const loadRepositories = () => async dispatch => {
    fetch('https://api.github.com/repositories')
        .then(res => res.json())
        .then(res => {
            dispatch({type: LOAD_REPOSITORIES, payload: {repositories: res}})
        })
};


export const search = (text) => async dispatch => {
    let url = new URL("https://api.github.com/search/repositories"),
        params = {q: text}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            dispatch({type: LOAD_REPOSITORIES, payload: {repositories: res.items}})
        })
};
