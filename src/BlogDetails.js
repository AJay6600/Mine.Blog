import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } =useParams()
    const {data:blog,pending,error}=useFetch("http://localhost:8000/blog/"+id)
    return ( <div>
        {pending && <h4>loading...</h4>}
        {error && <h4>{error}</h4>}
        {blog && (
            <article>
                <h1>{blog.title}</h1>
                <h4>Written By - {blog.writer}</h4>
                <p>{blog.content}</p>
            </article>
        )}

    </div> );
}
 
export default BlogDetails;