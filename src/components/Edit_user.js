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
                image:'',
                email:this.props.auth.user.email,
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
    saveProfile=(editMode)=>{
        const {user}=this.props.auth;
        console.log(user,'useriddtas');
        this.props.dispatch(editProfile(this.state.name,this.state.image,user._id,this.state.skills,this.state.year));
        this.setState({
            editMode:!editMode,
        })
        console.log('here profile state',this.state);
    }
    render() {
        const {isLoggedIn,user}=this.props.auth;
        
        if(!isLoggedIn){
            return <Redirect to="/signIn"/>;
        }
        
        return (
            // <div>
            //     {this.state.editMode ? <input type="text" placeholder="enter the name"
            //     onChange={(e)=>this.changeHandle('name',e.target.value)}/> :
            //     <p>{user.name}</p>
            //     }
            //     {this.state.editMode ? <input type="text" placeholder="college name"
            //     onChange={(e)=>this.changeHandle('college',e.target.value)}/> :
            //     <p>{this.state.college}</p>
            //     }
            //     {this.state.editMode ? <input type="text" placeholder="city name"
            //     onChange={(e)=>this.changeHandle('city',e.target.value)}/> :
            //     <p>{this.state.city}</p>
            //     }
            //     {/*////////////////// user image update   ///////////////////////// */}
            //     {this.state.editMode ? <input type="file" 
            //     onChange={(e)=>this.changeHandle('image',e.target.files[0])}/> :
            //     <p>{this.state.image}</p>
            //     }
            //     {this.state.editMode ? <select onClick={(e)=>this.setYear(e.target.value)}>
            //         <option value="1" >1</option>
            //         <option value="2" >2</option>
            //         <option value="3" >3</option>
            //         <option value="4" >4</option>
            //     </select> :
            //     <p>{this.state.year}</p>
            //     }
            //     {this.state.editMode ? <div> <h3>skills</h3>
            //        <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="java"/><span>java</span>
            //        <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="python"/><span>python</span>
            //        <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="c++"/><span>c++</span>
            //        <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="node js"/><span>nodejs</span>
            //     </div> :
            //     <div>
            //         <h3>skills</h3>
            //         <div>
            //             <p>java</p>
            //             <p>java</p>
            //             <p>java</p>
            //             <p>java</p>
            //         </div>
            //     </div>
            //     }
            //     {this.state.editMode ? <button onClick={this.saveProfile}>save</button> :
            //     <button onClick={()=>this.edit(this.state.editMode)}>edit profile</button>
            //     }
            //     {this.state.editMode && <button onClick={()=>this.edit(this.state.editMode)}>go back</button>
            //     }
            // </div>

            <div className="edit-user">
                {this.state.editMode && (
                    <div className="user-profile-info">
                        <div style={{height:"20vh",border:"1px solid red",backgroundSize:"cover",backgroundImage:"url('https://img.freepik.com/free-photo/green-bokeh-nature-blur-background-element-design_1150-12451.jpg?size=626&ext=jpg')"}}>
                            
                        </div>
                        <div style={{height:"20vh",border:"1px solid red",display:"flex"}}>
                            <div style={{width:"20vw",marginLeft:"5vw",borderRadius:"50%"}}>
                             {user.avatar?<img style={{marginTop:"-10vh",borderRadius:"50%",height:"25vh",width:"15vw"}} src={`http://localhost:7000${user.avatar}`} />:<img style={{marginTop:"-10vh",borderRadius:"50%",height:"25vh",width:"15vw"}} src="data:image/jpeg;base64,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" />}
                            
                                <input type="file" 
                                 onChange={(e)=>this.changeHandle('image',e.target.files[0])}/>
                            </div>
                            <div style={{width:"69vw",marginLeft:"5px"}}>
                                <div>
                                <input style={{marginTop:"15px",height:"5vh",width:"25vw"}} type="text" placeholder="update your name"
                                    onChange={(e)=>this.changeHandle('name',e.target.value)}/>
                                <select style={{marginLeft:"15px"}} onClick={(e)=>this.setYear(e.target.value)}>
                                      <option value="1" >1</option>
                                      <option value="2" >2</option>
                                      <option value="3" >3</option>
                                      <option value="4" >4</option>
                                      </select>
                                <p>{user.email}</p>
                                </div>
                                <button style={{float:"right",marginRight:"5vw"}} onClick={()=>this.saveProfile(this.state.editMode)}>save profile</button>
                                <button style={{float:"right",marginRight:"5px"}} onClick={()=>this.edit(this.state.editMode)}>go back</button>

                            </div>
                        </div>
                        <div style={{height:"59vh",display:"flex",justifyContent:"space-around"}}>
                            <div style={{width:"25vw",overflowWrap:"break-word"}}>
                                <h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>BIO</h1>
                                <p>kfdnnnnnggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggggggggggggg
                                    ggggggggggggggggggggggggggg
                                </p>
                            </div>
                            <div style={{width:"25vw"}}><h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>SKILLS</h1>
                            <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="java"/><span>java</span>
                            <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="python"/><span>python</span>
                            <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="c++"/><span>c++</span>
                            <input type="checkbox" onClick={(e)=>this.addSkills(e.target.value)} value="node js"/><span>nodejs</span>
                            </div>
                            <div style={{width:"25vw"}}><h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>CONTACT</h1></div>
                        </div>
                    </div>
                )}

                {!this.state.editMode && (
                    <div className="user-profile-info">
                        <div style={{height:"20vh",border:"1px solid red",backgroundSize:"cover",backgroundImage:"url('https://img.freepik.com/free-photo/green-bokeh-nature-blur-background-element-design_1150-12451.jpg?size=626&ext=jpg')"}}>
                            
                        </div>
                        <div style={{height:"20vh",border:"1px solid red",display:"flex"}}>
                            <div style={{width:"20vw",marginLeft:"5vw",borderRadius:"50%"}}>
                            {user.avatar?<img style={{marginTop:"-10vh",borderRadius:"50%",height:"25vh",width:"15vw"}} src={`http://localhost:7000${user.avatar}`} />:<img style={{marginTop:"-10vh",borderRadius:"50%",height:"25vh",width:"15vw"}} src="data:image/jpeg;base64,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" />}
                            </div>
                            <div style={{width:"69vw",marginLeft:"5px"}}>
                                <div>
                                <div style={{display:"flex",alignItems:"center"}}><h1>{user.name}</h1><span style={{marginLeft:"10px"}}>{user.year}</span></div>
                                <p>{user.email}</p>
                                </div>
                                <button style={{float:"right",marginRight:"5vw"}} onClick={()=>this.edit(this.state.editMode)}>edit profile</button>

                            </div>
                        </div>
                        <div style={{height:"59vh",display:"flex",justifyContent:"space-around"}}>
                            <div style={{width:"25vw",overflowWrap:"break-word"}}>
                                <h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>BIO</h1>
                                <p>kfdnnnnnggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggggggggg
                                    gggggggggggggggggggggggggggggggggggggggggggggg
                                    ggggggggggggggggggggggggggg
                                </p>
                            </div>
                            <div style={{width:"25vw"}}><h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>SKILLS</h1>
                            {user.skills.map(skill=>(
                                <div>{skill}</div>
                            ))}
                            </div>
                            <div style={{width:"25vw"}}><h1 style={{borderRadius:"5px" ,backgroundColor:"blue",color:"white"}}>CONTACT</h1></div>
                        </div>
                    </div>
                )}

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