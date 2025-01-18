package com.example.spring_crud.controller;

import com.example.spring_crud.entity.Employee;
import com.example.spring_crud.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }
    @GetMapping("/getEmployee")
    public List<Employee> getEmployee() {
        return employeeService.getEmployee();
    }
}
