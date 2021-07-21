import React, { useState, useEffect } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import {getData} from "./Api";
import s from "./PostDetails.module.css";

function PostDetails(){
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => { getData(id).then(resp => setPost(resp)) }, [id])
    
    
   
    

    return (
        <div className={s.article}>
            <nav className={s.nav} >
                <Link className={s.link} to={(post.id !== 1) ? "/post/" + (post.id - 1) : "/"}><span>&lt;</span> Previous</Link>
                <Link className={s.link} to="/">Home</Link>
                <Link className={s.link} to={(post.id !== 100) ? "/post/" + (post.id + 1) : "/"}>Next <span>&gt;</span></Link>
            </nav>
            <div className={s.title}>{post.title}</div>
            <div className={s.text}>{post.body}</div>
        </div>
        
           

    );
}
export default PostDetails;