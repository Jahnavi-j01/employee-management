package org.proj.emproject.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.proj.emproject.model.Employee;
import org.proj.emproject.services.EmployeeSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // remove trailing slash
@RequestMapping("/api/employees") // base path
public class EmpController {

    @Autowired
    private EmployeeSerivce employeeSerivce;

    // GET all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeSerivce.readEmployees();
    }

    // GET employee by ID
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        System.out.println("Fetching employee with ID: " + id);
        return employeeSerivce.readEmployee(id);
    }

    // CREATE new employee
    @PostMapping
public Employee createEmployee(@RequestBody Employee employee) {
    return employeeSerivce.createEmployee(employee); // return the created employee
}

    // DELETE employee by ID
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (employeeSerivce.deleteEmployee(id))
            return "Deleted Successfully";
        return "Not Found";
    }

    // UPDATE employee by ID
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeSerivce.updateEmployee(id, employee);
    }
}
