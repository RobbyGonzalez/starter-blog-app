import React from 'react'
import { useParams } from 'react-router-dom'
import AllBlogs from './AllBlogs'
import { useNavigate } from 'react-router-dom'



/* 
######################################################################
######################################################################
######################################## HOMEWORK #####################
#######################################################################
########################################################################
 
 
TODO: Implement the Delete Post button functionality

1) First task: When a user clicks the 'Delete Post' button, your task is to ensure that the blog post with the specified id is removed from the blogs array in the App.js.

2) Second task: Once the blog post is deleted, you need to redirect the application to the 'AllBlogs' page, with a route of '/blogs'.


Optional TODO: As an additional exercise, you can hide the 'Delete Post' button if the specified id is invalid (i.e., if no blog post has that id). T
*/



const Delete = ({ blogs, setBlogs }) => {
  const navigate = useNavigate()

  // useParams returns an object
  const { id } = useParams()

  let filteredArray = blogs.filter(blog => {
    return blog.id == id

  })

  return (
    <>

      <AllBlogs blogs={filteredArray} />

      <button onClick={() => setBlogs(prevBlogs => prevBlogs.filter(prevBlogs => { navigate("/blogs"); return prevBlogs.id != id }))}>Delete Post</button>

    </>
  )
}

export default Delete