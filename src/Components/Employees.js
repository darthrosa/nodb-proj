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

    // toggleEdit = () => {
    //     // console.log(this.state.toggleView)
    //     this.setState({toggleView: !this.state.toggleView});
    // }

    // handleInput(val){
    //     this.setState({titleInput: val});
    // }

    // updateTitle = (id) => {
    //     if (!this.state.toggleView)
    //     {
    //         this.props.editEmployee({job_title:
    //         this.state.titleInput || this.props.jobTitle})

    //     }
    //     this.toggleEdit(id)
    // }


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