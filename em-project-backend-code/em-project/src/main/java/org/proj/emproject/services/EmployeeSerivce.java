package org.proj.emproject.services;

import java.util.List;

import org.proj.emproject.model.Employee;

public interface EmployeeSerivce {
    Employee createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    Employee updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);

}
