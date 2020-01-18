import React, {Component} from 'react'

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <ul className="employees-list">
                {
                    this.props.employeeList.map(employee => (
                     <div className="employee-box" 
                        key={employee.id}>
                        <div className="employee-box-top">
                            {<img className="employee-img" src={employee.image} />}
                        </div>
                        <div className="employee-box-bot">
                            <div className="employee-box-text">
                                <div>{employee.first_name} {employee.last_name}</div>
                                <div>{employee.email}</div>
                                <div>{employee.job_title}</div>
                                <div>{employee.start_date}</div>
                            </div>
                                <button onClick={() => this.props.deleteEmployee(employee.id)}>Delete Employee</button>
                                <button>Edit Employees</button>
                        </div>
                     </div>
                    ))
                }
            </ul>
        )
    }
}

export default Employees;