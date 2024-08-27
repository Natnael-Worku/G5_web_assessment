'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector, AppDispatch } from '@/lib/redux/store'
import { useDispatch } from 'react-redux'
import { setValue } from '@/lib/redux/slice/AllBlogs'
import { getAllBlogs } from '@/services/blogs'
import { Blogtype } from '@/types/index'
import BlogCard from '@/components/blogs/BlogCard'
import { colors } from '@/constants/index'

const AllBlogs = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 5

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const data = await getAllBlogs()
            if (data.length > 0) {
                dispatch(setValue(data))
            }
        }
        fetchAllBlogs()
    }, [dispatch])

    const searchQuery = useAppSelector((state) => state.searchQuery.query)
    const value: Blogtype[] = useAppSelector((state) => state.allblogs.value)
    const filteredBlogs = searchQuery 
        ? value.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : value

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const getPaginationButtons = () => {
        const buttons = []
        let start = Math.max(currentPage - 1, 1)
        let end = Math.min(currentPage + 1, totalPages)

        if (totalPages > 3) {
            if (currentPage > 2) {
                buttons.push(<button key={1} onClick={() => setCurrentPage(1)} className='px-4 py-2 bg-gray-100'>1</button>)
                if (currentPage > 3) {
                    buttons.push(<span key="dots1" className='px-4 py-2 bg-gray-100'>...</span>)
                }
            }
            for (let i = start; i <= end; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`px-4 py-2 ${i === currentPage ? `${colors.bg_secondary}` : 'bg-gray-100'}`}
                    >
                        {i}
                    </button>
                )
            }
            if (currentPage < totalPages - 1) {
                if (currentPage < totalPages - 2) {
                    buttons.push(<span key="dots2" className='px-4 py-2 bg-gray-100'>...</span>)
                }
                buttons.push(<button key={totalPages} onClick={() => setCurrentPage(totalPages)} className='px-4 py-2 bg-gray-100'>{totalPages}</button>)
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`px-4 py-2 ${i === currentPage ? `${colors.bg_secondary}` : 'bg-gray-100'}`}
                    >
                        {i}
                    </button>
                )
            }
        }
        return buttons
    }

    return (
        <div className='flex flex-col justify-start w-[80%] mx-auto'>
            {currentBlogs.map((blog: Blogtype) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}

            <div className='flex items-center py-4'>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                >
                    Previous
                </button>

                <div className='flex items-center space-x-2'>
                    {getPaginationButtons()}
                </div>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='bg-blue-500 text-white px-4 py-2 rounded ml-2'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default AllBlogs
