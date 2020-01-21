import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"

class NewEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            startDate: new Date(),
            image: null
        }
        this.handleFirstNameInput = this.handleFirstNameInput.bind(this)
        this.handleLastNameInput = this.handleLastNameInput.bind(this)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handleJobTitleInput = this.handleJobTitleInput.bind(this)
        this.handleStartDate = this.handleStartDate.bind(this)
    }

    handleFirstNameInput(e) {
        this.setState({firstName: e.target.value})
    }

    handleLastNameInput(e) {
        this.setState({lastName: e.target.value})
    }

    handleEmailInput(e) {
        this.setState({email: e.target.value})
    }

    handleJobTitleInput(e) {
        this.setState({jobTitle: e.target.value})
    }

    handleStartDate(date) {
        this.setState({startDate: date})
    }

    handleImageInput(e) {
        this.setState({image: e.target.value})
    }

    render(){
        return(
            <div className="new-employee-input">
                <input onChange={(e) => this.handleFirstNameInput(e)} value={this.state.firstName} placeholder="First Name"/>
                <input onChange={(e) => this.handleLastNameInput(e)} value={this.state.lastName} placeholder="Last Name"/>
                <input onChange={(e) => this.handleEmailInput(e)} value={this.state.email} placeholder="Email"/>
                <input onChange={(e) => this.handleJobTitleInput(e)} value={this.state.jobTitle} placeholder="Job Title"/>
                <input onChange={(e) => this.handleImageInput(e)} value={this.state.image} placeholder="Image URL"/>
                
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartDate}
                />
                
                <button
                    onClick={() => this.props.createEmployee(
                            {
                                first_name: this.state.firstName,
                                last_name: this.state.lastName,
                                email: this.state.email,
                                job_title: this.state.jobTitle,
                                start_date: moment(this.state.startDate).format('MM/DD/YYYY'),
                                image: this.state.image ? this.state.image : "https://randomuser.me/api/portraits/med/women/80.jpg"
                            }
                        )
                    }
                >Add Employee</button>
                {/* <button>Filter Employees</button> */}
            </div>
        )
    }
}

export default NewEmployee;