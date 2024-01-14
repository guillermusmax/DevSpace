import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "kelvs.age",
      postImage:
        "https://i.pinimg.com/originals/8a/34/bb/8a34bb3aa60c2a2e71af7bc0c0d6174a.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "leomessi",
      postImage:
        "https://linksture.b-cdn.net/wp-content/uploads/2020/08/portfolio-detail-the-messi-store-img-01.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "drake",
      postImage:
        "https://cdn.dribbble.com/users/1325623/screenshots/14844308/media/42bd0af7d8489abfb523223cc4a1eccc.png?resize=400x300&vertical=center",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "icespice",
      postImage:
        "https://miro.medium.com/v2/resize:fit:1400/0*2_oIyLAVGL7_x0ll.png",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
