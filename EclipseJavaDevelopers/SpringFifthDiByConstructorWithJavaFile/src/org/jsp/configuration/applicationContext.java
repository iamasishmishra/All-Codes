package org.jsp.configuration;

import org.jsp.model.Address;
import org.jsp.model.Student;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class applicationContext {
	@Bean
	public Address createObjeAddress() {
		
		Address address = new Address(90, "Angul", "Odisha");
		return address;
	}
	
	
	@Bean
	public Student createObjStudent() {
		Student student = new Student("Akshay", 90.78, createObjeAddress());
		
		return student;
	}

}
