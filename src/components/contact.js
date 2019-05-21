import React,{Component} from 'react';
import {Prompt} from 'react-router';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            checked: false
        }
    }
     onChange = (event) =>{
        if(event.target.value){
            this.setState({
                checked:true
            })
        }
        else{
            this.setState({
                checked:false
            }) 
        }
    }
    render(){

        return(
            <div>
                  <h1>this is Contact</h1>    
                  <label>message</label>        
                  <input type="text" onChange={this.onChange} />
                  <Prompt 
                when={this.state.checked}
                message={(location) =>( `ban co muon chuyen den trang ${location.pathname}`)}
            />
            </div>
            
        )
    }
}

export default Contact;