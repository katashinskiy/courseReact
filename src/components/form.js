import React, {Fragment} from "react"

export default class UserForm extends  React.Component{
    state = {
        userName: ''
    };

    changeFunc = (e) => {
        this.setState({
            userName: e.target.value
        })
    };

    componentDidUpdate(){
        console.log(this.state.userName);
    }


    render(){
        return (
            <Fragment>
                Name: <input type="text" onChange={this.changeFunc}/>
            </Fragment>
        )
    }
}