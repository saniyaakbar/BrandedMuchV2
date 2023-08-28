import React from 'react'
import All_Blogs from './ALL_BLOGS/All_Blogs'
import './Blog.css'
import BlogDetail from './BLOG_DETAIL/BlogDetail'
import BlogOne from './BLOG_ONE/BlogOne'

function Blog() {
  return (
    <>
    {/* <BlogDetail/> */}
    <BlogOne/>
    <All_Blogs/>
    </>
  )
}

export default Blog