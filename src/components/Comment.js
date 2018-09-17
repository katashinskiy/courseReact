import React from "react";
import PropsTypes from "prop-types"

export default function Comment(props) {
    const {comment} = props;

    return(
            <span>{comment.text}</span>
    )

}

Comment.propTypes = {
    comment: PropsTypes.shape({
        text: PropsTypes.string.isRequired
    }).isRequired
};

