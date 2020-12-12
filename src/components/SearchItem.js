import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class searchItem extends Component {
    render() {
        const {result}=this.props;
        return (
            <div style={{background:"rgb(66, 141, 173)"}}>
                {
                    result.result.map(item=>(
                        <div>
                        <Link to={`/user/profile/${item._id}`}><h3>{item.name}</h3></Link>
                        <span>{item.email}</span>
                        </div>
                        
                    ))
                }
                
            </div>
        );
    }
}

export default searchItem;