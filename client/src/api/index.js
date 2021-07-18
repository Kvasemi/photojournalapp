import axios from "axios";

const url = "https://memoriesapp9908.herokuapp.com/posts"; // url pointing to back end route

export const fetchPosts = () => axios.get(url); // makes axios get call to url
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
