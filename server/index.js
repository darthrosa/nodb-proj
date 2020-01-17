const express = require ('express'),
      employeeCtrl = require('./controllers/employeeCtrl'),
      app = express();

app.use(express.json());

// ENPOINTS
app.get('/api/employees', employeeCtrl.getAllEmployees);
app.post('/api/employees', employeeCtrl.createEmployee);
app.put('/api/employees/:id', employeeCtrl.editEmployee);
app.delete('/api/employees/:id', employeeCtrl.deleteEmployee);


const port = 6969;
app.listen(port, () => console.log(`Employee's displaying on Port: ${port}`));
      
