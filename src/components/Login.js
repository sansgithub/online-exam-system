import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  handleemailChange= (event) => {
    this.setState({email: event.target.value});
  }

  handlepasswordChange = (event)=> {
    this.setState({password: event.target.value});
  }

  handleSubmit = async (e) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    };
  const url="http://localhost:3000/admins";  
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console(data);
  //this.props.history.push('/dashboard');
  }
    
render(){
  return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
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
export default withRouter(Login);