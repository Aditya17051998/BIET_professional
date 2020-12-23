import React, { Component } from 'react';
import {login} from '../actions/auth'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';



class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }
    emailHandler=(e)=>{
        this.setState({
            email:e.target.value,
        });

    }
    passHandler=(e)=>{
        this.setState({
            password:e.target.value,
        })

    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        const {email,password} = this.state;
        console.log(email,password);
        if(email && password){
            this.props.dispatch(login(email,password));
        }
        this.setState({
            email:'',
            password:'',

        })
    }
    

    render() {
         const {isLoggedIn,inProgress,error} = this.props.auth;
         if(isLoggedIn){
             return <Redirect to="/user/home" />;
         }
        return (
        //     <Container className="App">
        //     <h2>Sign In</h2>
        //     <Form className="form">
        //       <Col>
        //         <FormGroup>
        //           <Label>Email</Label>
        //           <Input
        //             type="email"
        //             name="email"
        //             id="exampleEmail"
        //             placeholder="myemail@email.com"
        //           />
        //         </FormGroup>
        //       </Col>
        //       <Col>
        //         <FormGroup>
        //           <Label for="examplePassword">Password</Label>
        //           <Input
        //             type="password"
        //             name="password"
        //             id="examplePassword"
        //             placeholder="********"
        //           />
        //         </FormGroup>
        //       </Col>
        //       <Button>Submit</Button>
        //     </Form>
        //   </Container>
            // <form className="SignIn">

            //     <input type="email" placeholder="enter your email" onChange={this.emailHandler} value={this.state.email}/>
            //     <input type="password" placeholder="enter your password" onChange={this.passHandler} value={this.state.password}/>
            //     {inProgress?<button type="submit" onClick={this.handleFormSubmit} disabled>login...</button>:
            //     <button type="submit" onClick={this.handleFormSubmit}>login</button>
            //     }

            // </form>
         <div className="signin">
                         <form className="SignIn">
                 <h1><b>Please Login First</b></h1>
                <input type="email" placeholder="enter your email" onChange={this.emailHandler} value={this.state.email}/><br/>
                <input type="password" placeholder="enter your password" onChange={this.passHandler} value={this.state.password}/><br/>
                {error && (
                    <div style={{color:"red"}}>{error}</div>
                )}
                {inProgress?<button type="submit" onClick={this.handleFormSubmit} disabled>login...</button>:
                <button type="submit" onClick={this.handleFormSubmit}>Login</button>
                }

            </form>
         </div>
                
        );
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth,
    };
}
export default connect(mapStateToProps)(SignIn);