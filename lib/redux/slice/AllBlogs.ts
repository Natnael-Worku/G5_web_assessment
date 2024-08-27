// slice/AllBlogs.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Blogtype } from '@/types/index'

interface AllBlogsState {
    value: Blogtype[]
    filtered: Blogtype[]
}

const initialState: AllBlogsState = {
    value: [],
    filtered: [],
}

const allBlogsSlice = createSlice({
    name: 'allblogs',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<Blogtype[]>) => {
            state.value = action.payload
            state.filtered = action.payload // Initialize filtered with all blogs
        },
        setFilteredValue: (state, action: PayloadAction<Blogtype[]>) => {
            state.filtered = action.payload
        },
    },
})

export const { setValue, setFilteredValue } = allBlogsSlice.actions
export default allBlogsSlice.reducer
