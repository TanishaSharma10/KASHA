import React ,{ useEffect, useState} from 'react';
import KashaBox from "./KashaBox";
import Post from "./Post";
import './css/Feed.css';
import axios from 'axios';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }, []);

  return (
    <div className="feed">
      <KashaBox/>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/> */}
    </div>
  )
}

export default Feed