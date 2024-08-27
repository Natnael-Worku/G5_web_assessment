// redux/slice/SingleBlog.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blogtype } from '@/types/index';

// Define the initial state
interface SingleBlogState {
    blog: Blogtype | null;
}

const initialState: SingleBlogState = {
    blog: null,
};

// Create the slice
const singleBlogSlice = createSlice({
    name: 'singleBlog',
    initialState,
    reducers: {
        setBlog: (state, action: PayloadAction<Blogtype>) => {
            state.blog = action.payload;
        },
        clearBlog: (state) => {
            state.blog = null;
        }
    },
});

export const { setBlog, clearBlog } = singleBlogSlice.actions;
export default singleBlogSlice.reducer;
