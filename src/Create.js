import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [writer,setWriter]=useState('')
    const [isPending,setIsPending]=useState(false)
    const history=new useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()
        setIsPending(true)
        const blog={title,content,writer}
        console.log(blog)
        fetch("http://localhost:8000/blog/",{
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new block added..')
            setIsPending(false)
            history.push('/')
        })

    }
    return (

       <div className="form-container">
         <form className="form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required/>

            <label >Content</label>
            <textarea name="content" 
             cols="30" rows="10"             
             required
             value={content}
             onChange={(e)=>setContent(e.target.value)}></textarea>
             
             <label>writer</label>
            <input 
            type="text"
            placeholder="Title"
            value={writer}
            onChange={(e)=>setWriter(e.target.value)} 
            required/>             
             {!isPending && <button > Add Blog</button>}
             {isPending && <button  disabled> Adding Blog</button>}
             
        </form>
       </div>
    );
}
 
export default Create;