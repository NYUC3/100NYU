import React from 'react';

class Home extends React.Component {
    constructor() {
        super()
    }

    render() {
        return ( 
        	< div className = "Home" >
            "Hello HomePage" 
            	<
            < /div>
        );


    }

    handleScroll() {
        this.setState({
            height: 10
        });
    }


}

export default Home;
