import React, { Component } from 'react';
import { searchResult } from '../actions/searchResult';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            filter_value:'0',
            isFilter:false,

        }
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }
    handleSearch=(e)=>{
        e.preventDefault();
        console.log('search result',this.state);
        this.setState({
            isFilter:true,
            filter_value:e.target.value,
        });
        ////////// dispatch function to api call
        this.props.dispatch(searchResult(this.state.name));

        
        

    }
    render() {
        return (
            <div>
                <div><input type="text" onChange={this.handleChange} placeholder="search a friend" style={{marginLeft:"40vw"}}/> 
                <button type="submit" onClick={this.handleSearch}>search</button></div>
                {this.state.isFilter && (<select onClick={this.handleSearch}> filter
                    <option value="0">Show all</option>
                    <option value="1">1st year</option>
                    <option value="2">2st year</option>
                    <option value="3">3st year</option>
                    <option value="4">4st year</option>

                </select>

                )}
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
        search:state.search,
    };
}
export default connect(mapStateToProps)(Search);