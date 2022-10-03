import { Post } from "../types/types";

type Routes = '/posts' | `/posts/${number}`;

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const request = async (root: Routes) => {
  return await fetch(`${BASE_URL}${root}`);
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await request('/posts');

  return response.json();
}

export const getPost = async (id: number): Promise<Post> => {
  const response = await request(`/posts/${id}`);

  return response.json();
}
