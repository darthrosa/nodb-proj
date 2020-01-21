import React, {Component} from 'react'

class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleView: true,
            titleInput: ''
        }
    }


    toggleEdit = (id) => {
        // console.log(this.state.toggleView)
        this.setState({toggleView: !this.state.toggleView});
    }

    handleInput(val){
        this.setState({titleInput: val});
    }

    updateTitle = (id) => {
        if (!this.state.toggleView)
        {
            this.props.editEmployee(this.props.employee.id, {job_title:
            this.state.titleInput || this.props.jobTitle})
    
        }
        this.toggleEdit(id)
    }


    render(){
        const {employee} = this.props;
        return(
            <div className="employee-box" 
            key={employee.id}>
            <div className="employee-box-top">
                {<img className="employee-img" src={employee.image} />}
            </div>
            <div className="employee-box-bot">
                <div className="employee-box-text">
                    <div>{employee.first_name} {employee.last_name}</div>
                    <div>{employee.email}</div>
                    <div>{this.state.toggleView 
                    ? <div>{employee.job_title} </div> 
                    : <input placeholder= 'Update Job Title'    id='edit-box'
                    value={this.state.titleInput}
                    onChange={(e) => this.handleInput(e.target.value)}/>}
                    </div>
                    <div>{employee.start_date}</div>
                </div>
                    <button onClick={() => this.props.deleteEmployee(employee.id)}>Remove Employee</button>
                    <button onClick={() => this.updateTitle(employee.id)}>Edit Employee</button>
            </div>
         </div>
        )
    }
}

export default Employee;