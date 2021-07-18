import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [post,setPost] = useState([]);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const body = await response.json()
    return body
  }
  useEffect(() => {getData().then(resp => setPost(resp))},[])


  

  return (
    <Router>
      <Switch>
        {post.map((item, index, arr) => {
          return (<Route path={"/post" + item.id} key={index}>
            <div className="article">
              <nav className="article__nav" >
                <Link className="article__link" to={(item.id !== 1) ? "/post" + (item.id - 1) : "/"}><span>&lt;</span> Previous</Link>
                <Link className="article__link" to="/">Home</Link>
                <Link className="article__link" to={(arr.length !== item.id) ? "/post" + (item.id + 1) : "/"}>Next <span>&gt;</span></Link>
              </nav>
              <div className="article__title">{item.title}</div>
              <div className="article__text">{item.body}</div>  
            </div>
            </Route>)
            })}  
        <Route path="/">
          <div className="wrapper">
            {post.map((item, index) => {
              return <div className="post" key={index}>
                <div className="post_titel">{(item.title.length > 50) ? item.title.slice(0, 50) + "..." : item.title}</div>
                <div className="post_body">{(item.body.length > 100) ? item.body.slice(0, 120) + "..." : item.body}</div>
                <Link to={"/post" + item.id} className="link"></Link>
              </div>
            })}
          </div>
        </Route>  
      </Switch>
    </Router>
    
  );
}

export default App;
