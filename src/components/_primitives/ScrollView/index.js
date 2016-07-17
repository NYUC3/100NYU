import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
require('./ScrollView.scss')

class ScrollView extends Component {
    render() {
        let {width, height} = this.props;
        return (
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                style={{height}}>
                {this.props.children}
            </Scrollbars>
        );
    }
}

export default ScrollView;

/*renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                */