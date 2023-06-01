import { Link } from "react-router-dom";
const Blogs = ({blog,title,handleDelete}) => {
    
    
    return (  
            <div>
                <h1>{title}</h1>
            {blog.map((blog)=>{
                
                return(
                    <Link to={`/blogs/${blog.id}`}>
                    <div className="blog">
                        <h1>{blog.title}</h1>
                        <p>writen by {blog.writer}</p>
                        {/* <button onClick={()=>handleDelete(blog.id)} >Delete</button> */}
                    </div>
                    </Link>
                )
            })   }
            </div>   
         
    );
}
 
export default Blogs;