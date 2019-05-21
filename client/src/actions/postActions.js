import axios from 'axios';
import {GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST, GET_ONE_POST} from './types';

export const getPosts = () => dispatch => {
    axios
    .get(`/api/getPosts/`)
    .then(posts => dispatch({
        type: GET_POSTS,
        payload: posts.data, 
    }))
}

export const getOnePost = (id) => dispatch => {
    axios
    .get('/api/getPosts/' + id)
    .then(res => dispatch({
        type: GET_ONE_POST,
        payload: res.data
    }))
}

export const addPost = post => {
    axios
    .post('/api/post', post)
    .then(res => ({
        type: ADD_POST,
        payload: res.data
    }))
}

export const editPost = id => {
    axios
    .put(`/editPost/${id}`)
    .then(res => ({
        type: EDIT_POST,
        payload: id
    }))
}

export const deletePost = id => dispatch => {
    axios
    .delete(`/api/deletePost/${id}`)
    .then(res => dispatch({
        type: DELETE_POST,
        payload: id
    }))
}