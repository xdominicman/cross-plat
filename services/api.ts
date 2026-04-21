import axios from "axios";
const ENV = process.env.EXPO_PUBLIC_API_URL;

export const getPosts = () => axios.get(`${ENV}posts`);
export const getPostDetail = (id: number) => axios.get(`${ENV}posts/${id}`);
export const getUserDetail = (id: number) => axios.get(`${ENV}users/${id}`);
export const postData = (data: {
  title: string;
  body: string;
  userId: number;
}) => axios.post(`${ENV}posts`, data);
export const getComments = (id: number) =>
  axios.get(`${ENV}posts/${id}/comments`);
