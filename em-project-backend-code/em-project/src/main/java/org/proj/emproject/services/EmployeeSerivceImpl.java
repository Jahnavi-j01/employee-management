package org.proj.emproject.services;

import java.util.ArrayList;
import java.util.List;

import org.proj.emproject.entity.EmployeeEntity;
import org.proj.emproject.model.Employee;
import org.proj.emproject.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeSerivceImpl implements EmployeeSerivce {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);

        EmployeeEntity savedEntity = employeeRepository.save(employeeEntity);

        Employee savedEmployee = new Employee();
        BeanUtils.copyProperties(savedEntity, savedEmployee);
        return savedEmployee;
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElseThrow();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for (EmployeeEntity employeeEntity : employeesList) {
            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
            employees.add(emp);
        }

        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).orElseThrow();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id).orElseThrow();

        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());

        EmployeeEntity updatedEntity = employeeRepository.save(existingEmployee);

        Employee updatedEmployee = new Employee();
        BeanUtils.copyProperties(updatedEntity, updatedEmployee);
        return updatedEmployee;
    }
}
