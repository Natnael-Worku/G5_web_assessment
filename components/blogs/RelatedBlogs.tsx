import React from 'react';
import Image from 'next/image';
import { Blogtype } from '@/types';
import { colors } from '@/constants/index';
import Tags from '@/components/blogs/Tags';
import { FaRegCommentAlt } from 'react-icons/fa';
import Link from 'next/link';

interface RelatedBlogsProps {
    blog: Blogtype;
}

const RelatedBlogs = ({ blog }: RelatedBlogsProps) => {
    console.log('blog data', blog);

    // Truncate description to the first sentence
    const truncateDescription = (description: string) => {
        const endIndex = description.indexOf('.', 100);
        return endIndex === -1 ? description : description.substring(0, endIndex + 1);
    };

    return (
        <div className='border rounded-md shadow-sm max-w-sm mx-auto'>
            <div className='pb-4 w-full'>
                <div className='relative w-full h-40'>
                    <Image 
                        src={blog.image} 
                        layout='fill' 
                        objectFit='cover' 
                        alt='Image of the blog' 
                        className='rounded-t-md'
                    />
                </div>
            </div>
            <div className='pb-4 p-4'>
                <div className='text-lg font-semibold mb-2'>{blog.title}</div>
                <div className='flex gap-5 items-center mb-2'>
                    {blog.author ? (
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full overflow-hidden'>
                                <Image 
                                    src={blog.author.image} 
                                    width={30} 
                                    height={30} 
                                    alt='Author image' 
                                />
                            </div>
                            <div>
                                by <span className='font-medium'>{blog.author.name}</span> | <span>{blog.updatedAt}</span>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full w-[30px] h-[30px] bg-gray-100'></div>
                            <div>
                                by <span className='font-medium'>Unknown</span> | <span>Unknown</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex gap-2 py-2'>
                    {blog.tags.map((tag, index) => (
                        <Tags key={index} name={tag} />
                    ))}
                </div>
            </div>
            <div className='px-4 pb-4'>
                <p className='text-sm mb-2 border-b border-gray-300 pb-2'>{truncateDescription(blog.description)}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaRegCommentAlt />
                        <div>{blog.likes} Likes</div>
                    </div>
                    <Link href={`/blogs/${blog._id}`} className='text-blue-500 hover:underline'>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RelatedBlogs;
