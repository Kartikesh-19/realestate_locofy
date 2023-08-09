import { useState } from "react";
import Header from '../components/header'

const Blog = () => {
  // Dummy blog data for demonstration purposes
  const blogPosts = [
    {
      id: 1,
      title: "Local Market Trends",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      did:'+918580930570'
    },
    {
      id: 2,
      title: "Home Buying Tips",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
       did:'+918988237574'
    },
    // Add more blog post objects here with different titles and content
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogPosts[0]);

  const handleBlogSelection = (blog) => {
    setSelectedBlog(blog);
  };

  return (
  <>
      <Header hamburger={false} />
      <div className="flex flex-col items-center justify-center py-16 px-4 md:px-8 bg-gradient-to-b from-black to-transparent bg-cover bg-no-repeat bg-top text-center text-white font-body-regular-400">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Contact Us
          </h1>
          <hr className="border-t border-primary-300 mb-6 " />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogSelection(blog)}
                className="cursor-pointer transition-colors duration-300 bg-gray-900 bg-opacity-50 p-4 rounded-md hover:text-blue "
              >
                {blog.title}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 max-w-3xl w-full text-lg">
          {selectedBlog && (
            <>
              <h2 className="text-primary-300 text-xl font-semibold mb-2">
                {selectedBlog?.title}
              </h2>
              <p className="text-gray-300 mb-4">{selectedBlog?.content}</p>
              <p className="text-gray-400">{selectedBlog?.did}</p>
            </>
          )}
        </div>
      </div>
    </>
    
  );
};

export default Blog;
