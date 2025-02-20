import axios from 'axios';

export const API = axios.create({baseURL : 'https://image-generator-4l8k.onrender.com/api/'});

export const getImages = async()=> await API.get('/post/');
export const createPost = async(data)=> await API.post('/post/', data);
export const GenerateImage = async(data)=> await API.post('/generateImage/', data)