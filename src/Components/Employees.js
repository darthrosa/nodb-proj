import React, {Component} from 'react'
import axios from 'axios'

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <ul className="employees">
                {
                    this.props.employeeList.map(employee => (
                        <li className="employee-card" key={employee.id}>
                            <div className="card-top">
                            {
                                <img className="employee-img" src={employee.image} />
                            }
                            </div>
                            <div className="card-bot">
                                <div className="card-description">
                                    <div className="employee-name">{employee.first_name} {employee.last_name}</div>
                                    <div className="employee-email">{employee.email}</div>
                                    <div className="employee-job">{employee.job_title}</div>
                                    <div className="employee-startdate">{employee.start_date}</div>
                                </div>
                                <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete Employee</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Employees;