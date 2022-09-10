import React, {createElement} from "react";
import PopularPost from "../PopularPost";
import posts from "../../constants/posts"
import style from "./PopularPosts.module.css"

const PopularPosts = () => {
    let popularPosts = posts;
    let btnMore = null;
    if (posts.length > 10) {
        popularPosts = posts.slice(0, 10);
        btnMore = <button className="btn-more">Еще</button>;
    }

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className={style.title}>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularPosts.map((item, index) => {
                            return <PopularPost
                                index={index + 1}
                                key={index}
                                img={item.img}
                                title={item.title}
                                title_desc={item.desc}
                            />
                        })
                    }
                    {btnMore}
                </ul>
            </div>
            <hr/>
        </>
    );
};

export default PopularPosts;