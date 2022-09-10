import React from 'react';

const Title = (props) => {
    return <h1 style={{fontSize: props.size, color: props.color}}>{props.text}</h1>;
};

export default Title;