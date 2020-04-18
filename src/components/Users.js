import React from 'react';
class Users extends React.Component{

  constructor(props){
    super(props);
    this.state={
        users:[]
    }
  }

  //fetch from api and fill data in the state variable after the component mounts
  componentDidMount() {
    fetch('http://localhost:3000/users').then(res => res.json())
    .then((data) => {
      this.setState({
         users:data
      })
    })     
  }

  //delete selected user from api call and also remove form state variable
  handleDelete = async (id)=>{
    fetch('http://localhost:3000/users/'+id,{
    method: 'DELETE'});
    this.setState({
      users: this.state.users.filter(item => item.id !== id)
    })
  }

  handleEdit =  async (id)=>{
    console.log(id);
  }


  render(){
    return (
      <div>      
        <table className="table-bordered users-table">
        <thead>
        <th>name</th>
        <th>email</th>
        <th>Action</th>
        </thead>
        {this.state.users.map((user) => (
        <tr>
          <td>{user.firstName + " " +user.lastName}</td>
          <td>{user.email}</td>
          <td className="action">
              <button className="btn btn-primary" id={user.id} onClick={()=>this.handleEdit(user.id)}>Edit</button> 
              <button className="btn btn-danger" id={user.id} onClick={()=>this.handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
        ))}
        </table>
      </div>
    )}
  }

  export default Users;