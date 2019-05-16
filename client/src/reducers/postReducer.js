import { GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST } from '../actions/types'

const initialState = {
    postArray: [],
    total: null,
    limit: null,
    offset: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
        return {
            ...state,
            postArray: action.payload.rows,
            total: action.payload.count,
            limit: action.payload.limit,
            offset: action.payload.offset,
            postsWithIds: action.payload.posts
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
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