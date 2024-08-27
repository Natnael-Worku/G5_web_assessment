export interface authorType {
    _id: string,
      name: string,
      email: string,
      image: string
        role: string
}
export interface Blogtype{
    
    _id: string;
    image: string;
    title: string;
    description: string;
    author: null | authorType;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: any[];
    skills: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  
}