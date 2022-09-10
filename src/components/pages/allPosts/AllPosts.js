import React from 'react';
import posts from "../../../constants/blockEntriesPosts";
import Post from "../../Post";

const AllPosts = () => {
    const elems = posts.map((item, index) => {
        return <Post
            key={index}
            img={item.img}
            title={item.title}
            title_desc={item.title_desc}
            created_date={item.created_date}
            desc={item.desc}
            count_comments={item.count_comments}
        />
    })
    return (
        <div>
            {elems}
        </div>
    );
};

export default AllPosts;