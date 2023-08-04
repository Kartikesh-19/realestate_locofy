import { useState } from "react";
import Header from '../components/header'

const Blog = () => {
  // Dummy blog data for demonstration purposes
  const blogPosts = [
    {
      id: 1,
      title: "Local Market Trends",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "Home Buying Tips",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blog post objects here with different titles and content
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogPosts[0]);

  const handleBlogSelection = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
        <Header {...{hamburger:false}} />
        <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
                <div className="self-stretch flex flex-col items-center justify-end gap-[24px] md:max-w-full">
                    <div className="self-stretch relative leading-[48px] font-semibold">
                    About Us
                    </div>     
                    <hr/>
                        <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
                            {blogPosts.map((blog) => (
                                <li key={blog.id} onClick={() => handleBlogSelection(blog)}>
                                {blog.title}
                                </li>
                            ))}
                        </div>    
                </div>
                <div className="text-xl blog-content">
                    <h2 className="text-gray-white">{selectedBlog.title}</h2>
                    <p>{selectedBlog.content}</p>
                </div>
    </div>
</>

    
  );
};

export default Blog;
