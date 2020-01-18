const employeesList = require('../data.json');
let id = employeesList.map(employee => employee.id).sort((a, b) => b - a)[0] + 1

module.exports = {
    getAllEmployees: (req, res) => {
        res.status(200).send(employeesList)
    },
    createEmployee: (req, res) => {
        console.log(req.body)
        const {first_name, last_name, email, job_title, start_date, image} = req.body;
        const employeeObj = {
            id,
            first_name,
            last_name,
            email,
            job_title,
            start_date,
            image
        };
        employeesList.push(employeeObj)
        id++
        res.status(200).send(employeesList)
    },
    editEmployee: (req, res) => {
        const {id} = req.params;
        const {last_name, job_title, start_date} = req.body;

        const index = employeesList.findIndex(emp => emp.id === +id);
        employeesList[index].last_name = last_name;
        employeesList[index].job_title = job_title;
        employeesList[index].start_date = start_date;
        res.status(200).send(employeesList);
    },
    deleteEmployee: (req, res) => {
        const {id} = req.params;

        const index = employeesList.findIndex(emp => emp.id === +id);
        employeesList.splice(index, 1);
        res.status(200).send(employeesList);
    }
}