import React, { useEffect, useState } from 'react'
import './App.css';
import Posts from './components/Posts'
import Paginations from './components/Pagination';
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);


  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log('res', res);
        setPosts(res.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      } 
    }
    fetchPosts()
  },[])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const maxPages = Math.ceil(posts.length / postPerPage)
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts className="page-container" currentPosts = {currentPosts} loading={loading}/>
      <Paginations maxPages= {maxPages} setCurrentPage={setCurrentPage}/>
    </div>
  );
}
export default App;
