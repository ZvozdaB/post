import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import { getData } from "./Api";
import "./Home.css"

function Home(){
    const [post, setPost] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/posts/';
    
    useEffect(() => { getData(url).then(resp => setPost(resp)) }, [])


    return (
        <div className="wrapper">
            {post.map((item, index) => {
                return <div className="post" key={index}>
                    <div className="post_titel">{(item.title.length > 50) ? item.title.slice(0, 50) + "..." : item.title}</div>
                    <div className="post_body">{(item.body.length > 100) ? item.body.slice(0, 120) + "..." : item.body}</div>
                    <Link to={"/post/" + item.id} className="link"></Link>
                </div>
            })}
        </div>

    );
}
export {Home};