import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: ''
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? 'checked' : target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = () => {
        let { txtUserName, txtPassword } = this.state;
        if (txtUserName === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                txtUserName,
                txtPassword
            }))
        }
    }
    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        let {location} = this.props;
        if(user){
            return <Redirect to={
               {
                pathname:'/products',
                state:{
                    from:location
                }
               }
            }
            />
        }
        return (
            
            <div>
                <form onSubmit={this.onSubmit}>
                    <legend>Form Login</legend>

                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" name="txtUserName" onChange={this.onChange} />
                        <label>PassWord</label>
                        <input type="password" className="form-control" name="txtPassword" onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;