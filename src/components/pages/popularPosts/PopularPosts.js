import React from 'react';
import posts from "../../../constants/posts";
import style from "../../PopularPosts/PopularPosts.module.css";
import PopularPost from "../../PopularPost";

const PopularPosts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className={style.title}>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        posts.map((item, index) => {
                            return <PopularPost
                                index={index + 1}
                                key={index}
                                img={item.img}
                                title={item.title}
                                title_desc={item.desc}
                            />
                        })
                    }
                </ul>
            </div>
            <hr/>
        </>
    )
};

export default PopularPosts;