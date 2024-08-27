// app/blogs/[id]/page.tsx
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, AppDispatch } from '@/lib/redux/store'
import { useDispatch } from 'react-redux'
import { setBlog } from '@/lib/redux/slice/SingleBlog'
import { fetchSingleBlog } from '@/services/blogs'
import BlogInfo from '@/components/blogs/BlogInfo'
import BlogBody from '@/components/blogs/BlogBody'
import RelatedBlogs from '@/components/blogs/RelatedBlogs'
import { colors } from '@/constants/index'
interface PageProps {
    params: {
        id: string;
    }
}

const Page = ({ params }: PageProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const blog = useAppSelector((state) => state.singleBlog.blog)
    const { id } = params
    const allblogs = useAppSelector((state) => state.allblogs.value)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogData = await fetchSingleBlog(id)
                dispatch(setBlog(blogData))
            } catch (error) {
                console.error('Failed to fetch single blog:', error)
            }
        }

        fetchBlog()
    }, [id, dispatch])
    console.log(allblogs.length,"length")
    return (
        <div className='py-10' >
            {blog ? 
            <>
            <BlogInfo blog={blog} />
            <BlogBody blog={blog} />
            </>
            : <p>No data to display</p>}

            <div className='flex flex-col items-center justify-center py-10  '  >
                <div className='w-[70%] flex flex-col items-start gap-10 ' >
                    <h2 className={`text-[22px]  font-bold ${colors.text_primary} `} >Related Blogs</h2>
                    <div className='flex justify-center gap-10' >
                        {
                            allblogs.length > 0 && allblogs.slice(0,3).map((blog)=>{
                                return <RelatedBlogs key={blog._id} blog={blog} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
