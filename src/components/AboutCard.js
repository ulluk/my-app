import React from "react";

const AboutCard = () => {
    return (
        <>
            <div className="w3-card w3-margin w3-margin-top">
                <img src="https://www.w3schools.com/w3images/avatar_g.jpg" style={{width: "100%"}}/>
                <div className="w3-container w3-white">
                    <h4>
                        <b>My Name</b>
                    </h4>
                    <p>
                        Just me, myself and I, exploring the universe of uknownment. I have a
                        heart of love and a interest of lorem ipsum and mauris neque quam blog.
                        I want to share my world with you.
                    </p>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default AboutCard;