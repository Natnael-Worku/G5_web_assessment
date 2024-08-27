import React from 'react'
import {colors} from '@/constants/index'
interface TagsProps {
    name : string
}
const Tags = ({name}:TagsProps) => {
  return (
    <div className={`px-4 py-2 bg-gray-100 ${colors.text_secondary} rounded-2xl `} >
        {name}
    </div>
  )
}

export default Tags