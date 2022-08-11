import React from "react";
import PopularPost from "./PopularPost";

const PopularPostInfo = [
    {
        img: "https://www.w3schools.com/w3images/workshop.jpg",
        title: "Lorem",
        title_desc: "Sed mattis nunc"
    },
    {
        img: "https://www.w3schools.com/w3images/gondol.jpg",
        title: "Ipsum",
        title_desc: "Praes tinci sed"
    },
    {
        img: "https://www.w3schools.com/w3images/skies.jpg",
        title: "Dorum",
        title_desc: "Ultricies congue"
    },
    {
        img: "https://www.w3schools.com/w3images/rock.jpg",
        title: "Mingsum",
        title_desc: "Lorem ipsum dipsum"
    }
]

const PopularPosts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <PopularPost
                        img={PopularPostInfo[0].img}
                        title={PopularPostInfo[0].title}
                        title_desc={PopularPostInfo[0].title_desc}
                    />
                    <PopularPost
                        img={PopularPostInfo[1].img}
                        title={PopularPostInfo[1].title}
                        title_desc={PopularPostInfo[1].title_desc}
                    />
                    <PopularPost
                        img={PopularPostInfo[2].img}
                        title={PopularPostInfo[2].title}
                        title_desc={PopularPostInfo[2].title_desc}
                    />
                    <PopularPost
                        img={PopularPostInfo[3].img}
                        title={PopularPostInfo[3].title}
                        title_desc={PopularPostInfo[3].title_desc}
                    />
                </ul>
            </div>
            <hr/>
        </>
    );
};

export default PopularPosts;