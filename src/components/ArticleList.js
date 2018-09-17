import React from "react"
import Article from "./Article"
import accordion from "./decorators/accordion"

class ArticleList extends React.Component{

    render()
    {

        const {articles} = this.props;

        return (
            <ul>
                {articles.map((article) => {
                    return (
                        <li key={article.id}>
                            <Article
                                isOpen={article.id === this.props.isOpen}
                                article={article}
                                toggle={this.props.toggle(article.id)}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default accordion(ArticleList);

