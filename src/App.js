import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import NewEmployee from './Components/NewEmployee';
import CompanyStaff from './Components/CompanyStaff';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeeList: []
    }
  }

  componentDidMount(){
    axios.get('/api/employee')
  }

 render(){ 
    return (
      <div className="App">
        <Header/>
        <NewEmployee/>
        <h2>Company Staff</h2>
        <CompanyStaff/>
      </div>
    );
  }
}

export default App;
