import React, { Component as ReactComponent } from "react"

export default (OriginalComponent) => class Accordion extends ReactComponent{

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    };

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggle={this.toggle}/>
        )
    }
}