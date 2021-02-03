import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class NewUser extends Component{
constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        username:'',
        firstName:'',
        surname:'',
        password:'',
        dob: new Date(),
    }
}

componentDidMount(){
    //on load component
}

onChangeUsername(e){
    this.setState({
        username:e.target.value
    });
}
onChangeFirstname(e){
    this.setState({
        firstName:e.target.value
    });
}
onChangeSurname(e){
    this.setState({
        surname:e.target.value
    });
}
onChangePassword(e){
    this.setState({
        password:e.target.value
    });
}
onChangeDate(date){
    this.setState({
        dob:date
    });
}

onSubmit(e){
    e.preventDefault();

    const user = {
        username: this.state.username,
        firstName: this.state.firstName,
        surname: this.state.surname,
        password: this.state.password,
        dob: this.state.dob   
    }

    axios.post('http://localhost:5000/users/add', user)
    .then(log=>{
        window.location = '/';
    })
    .catch(err=>{
        //TODO
        console.log("Error while posting");
    });
    
}

    render(){
        return(
            <div>
                <h2>New user page!</h2>
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
                        <label>Name:</label>
                        <input type="text" required value={this.state.firstName} onChange={this.onChangeFirstname}></input>
                    </div>
                    <div className="form-group">
                        <label>Surname:</label>
                        <input type="text" required value={this.state.surname} onChange={this.onChangeSurname}></input>
                    </div>
                    <div className="form-group">
                        <label>DOB:</label>
                        <div><DatePicker dateFormat="dd/MM/yyy" selected={this.state.dob} onChange={this.onChangeDate}/></div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User!" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}