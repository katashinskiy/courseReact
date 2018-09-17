import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import increment from '../ActionCreater/actionCreater'

 class Counter extends React.Component{
    static propTypes = {
        counter: PropTypes.number
    };

    handleIncrement = () => {
        console.log("incrementing++");
        this.props.increment()
    };

    render(){
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button
                onClick={this.handleIncrement}
                >INCREMENT</button>
            </div>
        )

    }

}

// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }
//
// const mapToDispatch = { increment };
//
// const decorator = connect(mapStateToProps, mapToDispatch);

export default connect(state => ({
    counter: state.counter
}), { increment })(Counter);


