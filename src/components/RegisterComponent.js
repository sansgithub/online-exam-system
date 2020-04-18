import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class RegisterComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handlefnameChange = (event)=> {
    this.setState({firstName: event.target.value});
  }

  handlelnameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleemailChange= (event) => {
    this.setState({email: event.target.value});
  }

  handlepasswordChange = (event)=> {
    this.setState({password: event.target.value});
  }

  handleSubmit = async (e) => {
    console.log("1st line of handle submit");
    console.log(this.state.firstName);
    e.preventDefault();
    console.log(this.state.firstName);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
  };
  
  this.props.history.push('/dashboard');
  }
    
render(){
  return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="firstName" hidden>First Name</Label>
        <Input type="text" value={this.state.firstName} onChange={ this.handlefnameChange} name="firstName" id="firstName" placeholder="First Name" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="lastName" hidden>Last Name</Label>
        <Input type="text" value={this.state.lastName} onChange={ this.handlelnameChange} name="lastName" id="lastName" placeholder="Last Name" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" value={this.state.email} onChange={ this.handleemailChange} name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" value={this.state.password} onChange={ this.handlepasswordChange} name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button color="success">Submit</Button>
    </Form>
      </div>
  )
}
}
export default withRouter(RegisterComponent);