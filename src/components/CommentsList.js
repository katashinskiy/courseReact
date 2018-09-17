import React, {Fragment} from "react"
import Comment from "./Comment"
// import PropsTypes from 'prop-types'
import ToggleComponent from "./decorators/toggleComponent"


function returnComments(comments, isOpen) {
    // const {comments} = this.props;

    if (!comments.length) return (<h4> No comments </h4>);

    if (isOpen) {
        return (
            comments.map(com => {
                return (
                    <li key={com.id}>
                        <Comment
                            comment={com}
                        />
                    </li>
                )
            })
        )
    }


};

function CommentList({comments = [], isOpen, toggle}) {

    // static propTypes = {
    //     comments: PropsTypes.array.isRequired
    // };
    //
    // static defaultProps = {
    //     comments: []
    // };
    return (
        <Fragment>
            <button
                onClick={toggle}
            >{isOpen ? "Close comments" : "Open comments"}</button>
            <ul>
                {returnComments(comments, isOpen)}
            </ul>
        </Fragment>
    )

}

export default ToggleComponent(CommentList);