import { colors } from '@/constants/index'
import { useAppSelector, AppDispatch } from '@/lib/redux/store'
import { Blogtype } from '@/types'
import React, { useState, useEffect } from 'react'
import BlogCard from '@/components/blogs/BlogCard'
import { setSearchQuery } from '@/lib/redux/slice/SearchQuerySlice'
import { getAllBlogs } from '@/services/blogs'
import { useDispatch } from 'react-redux'
import { setValue } from '@/lib/redux/slice/AllBlogs'
const SearchBlog = () => {
    const [searchQuery, setSearchQueryState] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const blogs: Blogtype[] = useAppSelector((state) => state.allblogs.value)

    useEffect(() => {
        const fetchAndSetBlogs = async () => {
            const data = await getAllBlogs()
            if (data.length > 0) {
                dispatch(setValue(data))
            }
        }
        fetchAndSetBlogs()
    }, [dispatch])

    useEffect(() => {
        dispatch(setSearchQuery(searchQuery))
    }, [searchQuery, dispatch])

    return (
        <div className='w-[70%] px-16'>
            <div className='flex justify-between mb-4'>
                <h2 className={`text-[26px] font-bold ${colors.text_primary}`}>Blogs</h2>
                <div className='flex gap-3'>
                    <input
                        type="text"
                        className='py-2 px-5 border border-gray-800 rounded-2xl outline-none'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQueryState(e.target.value)}
                    />
                    <button className={`${colors.bg_secondary} bg-blue-700 px-5 text-white py-2 rounded-3xl`}>
                        + New Blog
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBlog
