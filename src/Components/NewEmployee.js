import React, {Component} from 'react'; 

class NewEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <input placeholder=" First Name"/>
                <input placeholder=" Last Name"/>
                <input placeholder=" Email"/>
                <input placeholder=" Job Title"/>
                <input placeholder=" Tenure (Years)"/>
                <button>Add Employee</button>
                <button>Filter Employees</button>
            </div>
        )
    }
}

export default NewEmployee;