import {LOAD_REPOSITORIES} from "../types";

const initialState = {
    repositories: [],
}

export const repositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REPOSITORIES:
            console.log(action.payload.repositories)
            return {
                ...state,
                repositories: action.payload.repositories,
            }
        default:
            return state
    }
}
