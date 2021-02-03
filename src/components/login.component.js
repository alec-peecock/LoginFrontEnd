import React, {Component} from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class Login extends Component{
constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        username:'',
        password:'',
    }
}

onChangeUsername(e){
    this.setState({
        username:e.target.value
    });
}

onChangePassword(e){
    this.setState({
        password:e.target.value
    });
    
}

onSubmit(e){
    e.preventDefault();


    const user = {
        username: this.state.username,
        password: this.state.password,
    }


    axios.post('http://localhost:5000/users/signin', user)
    .then(log=>{
        window.location.replace('/').
        then(logit => {
            console.log(user.username);
        });
    })
    .catch(err=>{
        //TODO
        console.log("Error while signing in");
    });

}


    render(){
        return(
            <div>
                <h2>Login page!</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" required value={this.state.username} onChange={this.onChangeUsername}></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" required value={this.state.password} onChange={this.onChangePassword}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}