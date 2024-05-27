import React from "react";
import ReadPosts from "../components/ReadPosts";
import CreatePost from "../components/CreatePost";

const BlogSite = () => {
    return ( 
    <div>
    <h1 className="title">Senaste inläggen</h1>
        <div className="gridPost">
    <CreatePost  />
    <ReadPosts  />
    </div>
    </div>
    );
}

export default BlogSite;
