import React, { useEffect, useState } from "react";
import Link from "next/link";

const index = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // Adjust as needed

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/blogs?page=${currentPage}&limit=${blogsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
      });
  }, [currentPage]);

  return (
    <div className="grid grid-cols-2 gap-10">
      {Array.isArray(blogs) && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="p-10">
            <div>
              <h2>{blog.title}</h2>
              <div>
                <img src={blog.imgUrl} alt={blog.title} className="w-40 h-40" />
              </div>
              <Link href={`/blogs/${blog.id}`} className="">
                <button className="bg-black text-white text-xl font-bold p-1 rounded-md mt-4">
                  See more
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default index;
