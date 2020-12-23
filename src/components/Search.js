import React, { Component } from 'react';
import { searchResult } from '../actions/searchResult';
import {connect} from 'react-redux';
import SearchItem from './SearchItem';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            filter_value:'0',
            isFilter:false,

        }
    }
    
    // componentWillMount() {
    //     this.setState({
    //         isFilter:false,
    //     })
    // }
    
    handleChange=(e)=>{
        this.setState({
            name:e.target.value,
            isFilter:false,
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
        this.setState({
            name:'',
        })
        

        
        

    }
    render() {
        const {search}=this.props;
        console.log('search result',search);
        return (
            <div>
                <div style={{display:"flex"}}><input type="text" onChange={this.handleChange} placeholder="search a friend" style={{marginLeft:"40vw"}} value={this.state.name}/> 
                <button type="submit" onClick={this.handleSearch}>search</button>
                {search.result.length>0 && this.state.isFilter && (<select onClick={this.handleSearch}> filter
                    <option value="0">Show all</option>
                    <option value="1">1st year</option>
                    <option value="2">2st year</option>
                    <option value="3">3st year</option>
                    <option value="4">4st year</option>

                </select>

                )}
                </div>
                
                    {search.result.length>0 && this.state.isFilter && (<div className="search-result" style={{position:"fixed",zIndex:"20",width:"40vw",left:"45vw",top:"10vh",height:"35vh",overflowY:"scroll",background:"rgb(167, 168, 242)"}}>
                    
                    <SearchItem result={search} />

                    </div>)}

                    {search.result.length<1 && this.state.isFilter && (<div className="search-result" style={{position:"fixed",zIndex:"20",width:"40vw",left:"45vw",top:"10vh",height:"15vh",background:"rgb(167, 168, 242)"}}><h2 style={{marginLeft:"20%",marginTop:"7%"}}> No result found</h2></div>)

                    }
       

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