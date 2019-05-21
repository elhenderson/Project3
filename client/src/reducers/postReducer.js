import { GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST, GET_ONE_POST } from '../actions/types'

const initialState = {
    postArray: [],
    total: null,
    limit: null,
    offset: null,
    onePost: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        return {
            ...state,
            postArray: action.payload.rows
        }
        case GET_ONE_POST:
        return {
            ...state,
            onePost: action.payload,
        }
        case DELETE_POST:
            return {
                ...state,
                // postArray: state.posts.filter(post => post.id !== action.payload)
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case EDIT_POST:
            return {
                post: action.payload
            }
        default:
            return state;
    }
}