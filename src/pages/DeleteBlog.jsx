import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteBlog = ({ blogs }) => {

  const [id, setID] = useState(0)
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const hasMatchingID = blogs.some((blog) => blog.id === parseInt(id));
    setDisabled(!hasMatchingID);
  }, [blogs, id])

  function handleID(e) {
    setID(e.target.value)

  }

  function handleOnSubmit(e) {
    e.preventDefault()
    navigate(`/blogs/delete/${id}`)
  }

  return (
    <>

      <form onSubmit={handleOnSubmit}>


        <input
          type="text"
          onChange={handleID}
          placeholder='Please add ID'
        />

        <button disabled={disabled}>Delete Post</button>

      </form>

    </>
  )
}

export default DeleteBlog