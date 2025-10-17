import { IBlog } from "./blog.interface";


const createBlog = async (payload: Partial<IBlog>) => {
    console.log(payload)
}

export const BlogServices = {
    createBlog,
};
