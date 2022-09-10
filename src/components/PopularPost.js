import React from 'react';

const PopularPost = (props) => {
    return (
        <li className="w3-padding-16">
            <img
                src={props.img}
                alt="Image"
                className="w3-left w3-margin-right"
                style={{width: 50}}
            />
            <span className="w3-large">{props.title}{props.index}</span>
            <br/>
            <span>{props.title_desc}</span>
        </li>
    );
};

export default PopularPost;