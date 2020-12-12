import React, { Component } from 'react';

class Alumini extends Component {
    render() {
        return (
            <div className="alumini" style={{width:"90vw",height:"20vh",margin:"auto",overflow:"hidden",marginTop:"10px"}}>
                 
                     {
                        
                     this.props.alumini.map(item=>(
                         <div className="alumini-item" style={{animation:"scrolling 2s linear infinite alternate both ",display:"inline-block",border:"1px solid black",height:"20vh",width:"15vw"}}>
                         <h1>{item.name}</h1>
                         <p style={{marginTop:"-15px"}}>{item.email}</p>
                        </div>
                     ))
                     }
                    </div>
        );
    }
}

export default Alumini;