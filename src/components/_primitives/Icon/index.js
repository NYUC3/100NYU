import React, {Component} from 'react';

class Icon extends Component {
    render() {
        let {label, faClass, size = 10, color} = this.props
        let style = {
            verticalAlign: "middle",
            margin: "0px 5px 0px 5px",
            fontSize: size,
            cursor: "pointer",
            color: color
        }
        Object.assign(style, this.props.style)
        return (
            <span style={style} onClick={this.props.onClick} >{label} <i className={`fa ${faClass}`} /></span>
        );
    }
}

export default Icon;