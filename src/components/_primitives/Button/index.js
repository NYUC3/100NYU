import React, {Component} from 'react';
require('./Button.scss');

const spinner = require('../../../images/spinner.gif')

class Button extends Component {
   
    render() {
        let {loading, disabled, style = {}} = this.props;
        disabled = disabled || loading;
        if(disabled) {
            style.backgroundColor = '#ccc';
        }
        return (
            <button ref="button" disabled={disabled} className="button" {...this.props} style={style}>
                {loading && <img width={10} className="spinner" src={spinner} />}
                {this.props.children}
            </button>
        );
    }
}

export default Button;