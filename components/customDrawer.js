import React, { useState } from 'react';
import Link from 'next/link'; // Assuming you're using React Router

const Drawer = ({isOpen}) => {
  return (
   /* Drawer Component */
<div className={`drawer ${isOpen ? 'right-0' : '-right-300'} fixed bg-white top-0 bottom-0 w-100 md:w-[25%] lg:w-80 xl:w-96 transition-transform duration-300 ease-in-out transform z-10`}>  {/* Use Tailwind classes to control left position */}
  <div className="drawer-content">
    <div className="drawer-header p-4 border-b border-gray-300"> {/* Use padding and border utilities */}
      <p className="text-lg font-bold">Kartikesh Sharma</p>
      <p className="text-gray-600">kartikeshsharma59@gmail.com</p>
      <p className="text-gray-600">+91-85809-30570</p>
    </div>

    <div className="divider h-1 bg-gray-300 mx-4 my-2" /> {/* Use height, background-color, and margin utilities */}
    
    <div className="drawer-links flex-grow p-6"> {/* Use flex utilities and padding */}
      <Link href="/AboutUs" className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-500">
        About Us
      </Link>
      <Link href="/Ouragents" className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-500">
        Our Agents
      </Link>
      <Link href="/gallery" className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-500">
        Gallery
      </Link>
      <Link href="/blog" className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-500">
        Blog
      </Link>
      <Link href="/contact" className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-500">
        Contact
      </Link>
    </div>

    <div className="divider h-1 bg-gray-300 mx-4 my-2" /> {/* Use height, background-color, and margin utilities */}

    <div className="logout p-4 cursor-pointer"> {/* Use padding and cursor utilities */}
      <p>Logout</p>
    </div>
  </div>
</div>



  );
};

export default Drawer;
