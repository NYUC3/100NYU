import React, {Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
require('./BigInput.scss');

class BigInput extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    
    value() {
        return this.refs.button.value;
    }
    
    render() {
        return (
            <input className="big-input" {...this.props} />
        );
    }
}

export default BigInput;