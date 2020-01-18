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
    this.createEmployee = this.createEmployee.bind(this)
    this.editEmployee = this.editEmployee.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
  }

  // This is the axios call to the server for GET(Read)
  componentDidMount(){
    axios.get('/api/employees').then(res => {
      this.setState({employeeList: res.data});
    }).catch(err => console.log(err));
  }

  // This is the axios call to the server for POST(Create)
  createEmployee(body){
    axios.post('/api/employees', body).then(res => {
      this.setState({employeeList: res.data})
    }).catch(err => console.log(err));
  }

  // This is the axios call to the server for PUT(Edit)
  editEmployee(id, body){
    axios.put(`/api/employees/${id}`, body).then(res => {
      this.setState({employeeList: res.data});
    }).catch(err => console.log(err));
  }

  // This is the axios call to the server for DELETE
  deleteEmployee(id){
    axios.delete(`/api/employees/${id}`).then(res => {
      this.setState({employeeList: res. data});
    }).catch(err => console.log(err));
  }

 render(){ 
    return (
      <div className="App">
        <Header/>
        <NewEmployee createEmployee={this.createEmployee}/>
        <h2>Company Manifest</h2>
        <CompanyStaff 
          employeeList={this.state.employeeList}
          editEmployee={this.editEmployee}
          deleteEmployee={this.deleteEmployee}/>
      </div>
    );
  }
}

export default App;
