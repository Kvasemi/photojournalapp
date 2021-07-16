import axios from "axios";

const url = "http://localhost:5000/posts"; // url pointing to back end route

export const fetchPosts = () => axios.get(url); // makes axios get call to url
export const createPost = (newPost) => axios.post(url, newPost);
