import React from 'react';
import Users from './../components/Users';
import Sidenavigation from './../components/Sidenavigation';
import Topnavigation from '../components/Topnavigation';

class Dashboard extends React.Component{
    
    
   

   

    render(){
    return(
        <div>
        <Topnavigation/>
        <Sidenavigation/>
        <Users/>
       </div>
    )
}
}

export default Dashboard;
