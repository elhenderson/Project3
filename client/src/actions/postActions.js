import axios from 'axios';
import {GET_POSTS, ADD_POST, DELETE_POST, EDIT_POST} from './types';

export const getPosts = () => {
    axios
    .get('/api/getPosts')
    .then(res => ({
        type: GET_POSTS,
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

export const deletePost = id => {
    axios
    .delete(`/deletePost/${id}`)
    .then(res => ({
        type: DELETE_POST,
        payload: id
    }))
}