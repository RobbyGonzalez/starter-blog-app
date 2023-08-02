import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AllBlogs from "./pages/AllBlogs";
import AddBlog from "./pages/AddBlog";
import PageNotFound from "./pages/PageNotFound";
import DeleteBlog from "./pages/DeleteBlog";
import Delete from "./pages/Delete";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Deep Dive into React",
      author: "John Doe",
      content: "React is a powerful library for building user interfaces...",
      date: new Date(2023, 6, 27).toISOString(),
    },
    {
      id: 2,
      title: "Understanding Async/Await",
      author: "Jane Doe",
      content:
        "Asynchronous programming is a fundamental concept in JavaScript...",
      date: new Date(2023, 6, 26).toISOString(),
    },
    {
      id: 3,
      title: "Exploring the Depths of Deep Learning",
      author: "Alex Roe",
      content:
        "Deep learning is a subset of machine learning that's based on artificial neural networks...",
      date: new Date(2023, 6, 25).toISOString(),
    },
    {
      id: 4,
      title: "How to Master CSS Grid",
      author: "Sarah Doe",
      content:
        "CSS Grid is a powerful tool for creating complex layouts in a straightforward way...",
      date: new Date(2023, 6, 24).toISOString(),
    },
    {
      id: 5,
      title: "Introduction to Redux",
      author: "John Doe",
      content:
        "Redux is an open-source JavaScript library for managing application state...",
      date: new Date(2023, 6, 23).toISOString(),
    },
  ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home Page </Link>
          </li>
          <li>
            <Link to="/blogs"> List All Blogs </Link>
          </li>
          <li>
            <Link to="/blogs/add"> Add Blog </Link>
          </li>
          <li>
            <Link to="/blogs/delete"> Delete Blog </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blogs">
          <Route index element={<AllBlogs blogs={blogs} />} />

          <Route path="add" element={<AddBlog setBlogs={setBlogs} />} />

          <Route path="delete" element={<DeleteBlog blogs={blogs} />} />

          {/* colon means dynamic path */}
          {/* these are useful when you want to view just one post within a page. */}
          <Route
            path="delete/:id"
            element={<Delete blogs={blogs} setBlogs={setBlogs} />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
