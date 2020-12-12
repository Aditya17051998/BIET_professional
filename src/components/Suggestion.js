import React, { Component } from 'react';

class Suggestion extends Component {
    render() {
        const {suggestion} = this.props;
        console.log('suggestion',suggestion);
        return (
            <div className="suggestion">
                {suggestion.name}
                
            </div>
        );
    }
}

export default Suggestion;