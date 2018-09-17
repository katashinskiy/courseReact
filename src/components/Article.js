import React, {Fragment} from "react"
import CommentsList from "./CommentsList"
import PropTypes from "prop-types"
// import {findDOMNode} from "react-dom"

class Article extends React.Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired
    };

    componentWillReceiveProps(nextProps) {
        console.log("Will receive props ", this.props.isOpen, nextProps.isOpen);
    };

    componentWillMount() {
        console.log("Will Mount");
    };

    handleDelete = () => {
        console.log("delete me");
    };


    render() {

        const {article} = this.props;

        return (
            <Fragment>
                <h3>{article.title}</h3>
                <button
                    onClick={this.props.toggle}
                >{this.props.isOpen ? "Close" : "Open"}
                </button>
                <button onClick={this.handleDelete}>Delete me</button>
                {this.getBody()}
            </Fragment>
        )
    }

    componentDidMount() {
        console.log("Did Mount");
    }

    getBody = () => {

        const {article} = this.props;

        if (this.props.isOpen) {
            return (
                <Fragment>
                    <section>{article.text}</section>
                    <CommentsList
                        comments={article.comments}
                    />
                </Fragment>
            )
        }
    };
}

export default Article
