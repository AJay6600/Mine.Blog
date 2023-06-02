import {useState,useEffect} from 'react'
import useFetch from './useFetch'
import Blogs from './Blogs'

const Home = () => {
    
    const {data:blog,pending,error}= useFetch("https://jade-average-panther.cyclic.app/blog")
       console.log(blog)
  
    // let handleDelete = (id)=>{
     
    //   let newBlog=blog.filter(blog=>blog.id!==id)
    //   setBlog(newBlog)
    // }

    
    return (
        <div className='blog-container'>
            {error && <div><h4>{error}</h4></div>}
            {pending && <div> <h4>Loading...</h4></div>}
          {blog && <Blogs blog={blog} title="All Blog"  />}
          {/* <Blogs blog={blog.filter(blog=>blog.writer==="Ajay") } title="Ajay's Blog"/> */}
        </div>      
        
     );
}
 
export default Home;