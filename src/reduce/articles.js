import {articles as defaultArticles} from '../resourses/fixtures'

export default  (articlesState = defaultArticles, action) => {

    const {type} = action;

    switch (type){
        case "DELETE_ARTICLE": return articlesState;

        default:
    }

    return articlesState;

}