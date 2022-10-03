export interface Post {
  id: number,
  title: string,
  body: string
}

export interface PathForIdPost {
  params: {
    id: string
  }
}