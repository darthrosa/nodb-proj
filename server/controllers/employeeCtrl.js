const employeesList = require('../data.json')
let id = 26;

module.exports = {
    getAllEmployees: (req, res) => {
        res.status(200).send(employeesList)
    },
    createEmployee: (req, res) => {
        const {first_name, last_name, email, job_title, tenure} = req.body;
        const employeeObj = {
            id,
            first_name,
            last_name,
            email,
            job_title,
            tenure
        };
        employeesList.push(employeeObj)
        id++
        res.status(200).send(employeesList)
    },
    editEmployee: (req, res) => {
        const {id} = req.params;
        const {last_name, job_title, tenure} = req.body;

        const index = employeesList.findIndex(emp => emp.id === +id);
        employeesList[index].last_name = last_name;
        employeesList[index].job_title = job_title;
        employeesList[index].tenure = tenure;
        res.status(200).send(employeesList);
    },
    deleteEmployee: (req, res) => {
        const {id} = req.params;

        const index = employeesList.findIndex(emp => emp.id === +id);
        employeesList.splice(index, 1);
        res.status(200).send(employeesList);
    }
}