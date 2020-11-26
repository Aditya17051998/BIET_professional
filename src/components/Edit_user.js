import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {editProfile} from '../actions/auth';

class Edit_user extends Component {
    constructor(props){
        super(props);
            this.state={
                name:this.props.auth.user.name,
                year:'',
                skills:[],
                college:'',
                city:'',
                password:'',
                confirm_password:'',
                editMode:false,
            }
    }
    
    edit=(editMode)=>{
        this.setState({
                skills:[],
                editMode:!editMode,
        })

    };
    changeHandle=(field,value)=>{
        this.setState({
            [field]:value,
        });
    }
    setYear=(year)=>{
        this.setState({
            year:year,
        });
        console.log('year',this.state.year);
    }
    addSkills=(skill)=>{
        this.setState(state=>{
            const skills=[...state.skills,skill];
            return {
                ...state,
                skills,
            }

        });
        console.log('skills',this.state.skills);

    }
    saveProfile=(e)=>{
        e.preventDefault();
        const {user}=this.props.auth;
        this.props.dispatch(editProfile(this.state.name,this.state.password,this.state.confirm_password,user._id));
        console.log(this.state);
    }
    render() {
        const {isLoggedIn,user}=this.props.auth;
        
        if(!isLoggedIn){
            return <Redirect to="/signIn"/>;
        }
        
        return (
            <div>
                {this.state.editMode ? <input type="text" placeholder="enter the name"
                onChange={(e)=>this.changeHandle('name',e.target.value)}/> :
                <p>{user.name}</p>
                }
                {this.state.editMode ? <input type="text" placeholder="college name"
                onChange={(e)=>this.changeHandle('college',e.target.value)}/> :
                <p>{this.state.college}</p>
                }
                {this.state.editMode ? <input type="text" placeholder="city name"
                onChange={(e)=>this.changeHandle('city',e.target.value)}/> :
                <p>{this.state.city}</p>
                }
                {this.state.editMode ? <select onClick={(e)=>this.setYear(e.target.value)}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                </select> :
                <p>{this.state.year}</p>
                }
                {this.state.editMode ? <div> <h3>skills</h3>
                   <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="java"/><span>java</span>
                   <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="python"/><span>python</span>
                   <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="c++"/><span>c++</span>
                   <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="node js"/><span>nodejs</span>
                </div> :
                <div>
                    <h3>skills</h3>
                    <div>
                        <p>java</p>
                        <p>java</p>
                        <p>java</p>
                        <p>java</p>
                    </div>
                </div>
                }
                {this.state.editMode ? <button onClick={this.saveProfile}>save</button> :
                <button onClick={()=>this.edit(this.state.editMode)}>edit profile</button>
                }
                {this.state.editMode && <button onClick={()=>this.edit(this.state.editMode)}>go back</button>
                }
            </div>
        );
    }
    
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(Edit_user);