import React, { Component as ReactComponent } from "react"

export default (OriginalComponent) => class Accordion extends ReactComponent{

    constructor(props) {
        super(props);
        this.state = {
            isOpen: null
        }
    };

    toggle = isOpen => ev =>{
        this.setState({
            isOpen: isOpen === this.state.isOpen ? null : isOpen
        });
    };

    render() {
        return (
            <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggle={this.toggle}/>
        )
    }
}