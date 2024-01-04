// pages/blogs/[id].js
import React from "react";

const SingleBlog = ({ blog }) => {
  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold text-center p-10">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
    </div>
  );
};

export async function getStaticPaths() {
  //   const res = await fetch("http://localhost:3000/api/blogs");
  //   const { blogs } = await res.json();

  //   const paths = blogs.map((blog) => ({
  //     params: { id: blog.id.toString() },
  //   }));

  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`);
  const blog = await res.json();

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
}

export default SingleBlog;
