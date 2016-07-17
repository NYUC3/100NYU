import React, {Component} from 'react';
import MdSearch from 'react-icons/lib/md/search'
import TextField from '../../../theme/TextField';

require("./SearchInput.scss");

class SearchInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loading, disabled, style = {}} = this.props;
        disabled = disabled || loading;
        if(disabled) {
            style.backgroundColor = "#ccc";
        }
        return (
            <span className="SearchInput">
                <MdSearch style={{fontSize: 18, color: "#ccc", position: "relative", marginTop: -2}} />
                <TextField hintText={this.props.placeholder} underlineShow={false} onKeyDown={this.props.onKeyDown}/>
            </span>
        );
    }
}

export default SearchInput;