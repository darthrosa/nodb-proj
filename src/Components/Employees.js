import React, {Component} from 'react'
import Employee from './Employee'

class Employees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleView: false,
            titleInput: ''
        }
    }


    render(){
        return(
            <ul className="employees-list">
                {
                    this.props.employeeList.map(employee => (
                        <Employee 
                        employee={employee}
                        key={employee.id}
                        editEmployee={this.props.editEmployee}
                        deleteEmployee={this.props.deleteEmployee}/>
                        
                    ))
                }
            </ul>
        )
    }
}

export default Employees;