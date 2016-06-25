require('./Master.scss');

import React, {Component} from 'react';

class Master extends Component {
    render() {
        return (
            <div className="master">
                {this.props.children}
            </div>
        );
    }
}


export default Master;