import React, { useState, useEffect } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import {getData} from "./Api";
import "./PostDetails.css";

function PostDetails(){
    const { id } = useParams();
    
    const url = 'https://jsonplaceholder.typicode.com/posts/';

    const [post, setPost] = useState([]);

    useEffect(() => { getData(url,id).then(resp => setPost(resp)) }, [id])
    
    
   
    

    return (
        <div className="article">
            <nav className="article__nav" >
                <Link className="article__link" to={(post.id !== 1) ? "/post/" + (post.id - 1) : "/"}><span>&lt;</span> Previous</Link>
                <Link className="article__link" to="/">Home</Link>
                <Link className="article__link" to={(post.id !== 100) ? "/post/" + (post.id + 1) : "/"}>Next <span>&gt;</span></Link>     
            </nav>
            <div className="article__title">{post.title}</div>
            <div className="article__text">{post.body}</div>
        </div>
        
           

    );
}
export default PostDetails;