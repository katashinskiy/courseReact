import React, {Fragment} from "react"
import ArticleList from "./components/ArticleList"
import {articles} from "./resourses/fixtures";
import UserForm from "./components/form"
import Counter from './components/Counter'

export default function App() {
    return (
        <Fragment>
            <Counter/>
            <UserForm/>
            <ArticleList articles={articles}/>
        </Fragment>
    )
};
