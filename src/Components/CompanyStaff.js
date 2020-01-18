import React from 'react';
import Employees from './Employees';

const CompanyStaff = ({ employeeList, deleteEmployee }) => {
    return (
       <div>
           <Employees deleteEmployee={deleteEmployee} employeeList={employeeList}/>
       </div>
    )
}

export default CompanyStaff;

