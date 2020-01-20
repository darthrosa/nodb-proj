import React from 'react';
import Employees from './Employees';

const CompanyStaff = ({ employeeList, deleteEmployee, editEmployee }) => {
    return (
       <div>
           <Employees 
           deleteEmployee={deleteEmployee} 
           employeeList={employeeList}
           editEmployee={editEmployee}
           />
       </div>
    )
}

export default CompanyStaff;

