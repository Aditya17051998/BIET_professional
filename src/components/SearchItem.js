import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class searchItem extends Component {
    render() {
        const {result}=this.props;
        return (
            <div style={{background:"rgb(167, 168, 242)"}}>
                {
                    result.result.map(item=>(
                        <div style={{marginLeft:"15px"}}>
                        <Link to={`/user/profile/${item._id}`}><h3>{item.name}</h3></Link>
                        <h1>{item.email}</h1>
                        </div>
                        
                    ))
                }
                
            </div>
        );
    }
}

export default searchItem;