package org.jsp.configuration;

import java.util.ArrayList;
import java.util.List;

import org.jsp.model.Address;
import org.jsp.model.Student;
import org.jsp.model.Subject;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {
	
	@Bean
	public Address createObjAddress() {
		
		Address address = new Address();
		address.setHouseNo(12211);
		address.setLocation("Odisha");
		address.setStreet("Bk Mishra Residency, Angul");
		
		return address; 
	}
	
	@Bean
	public Address createObjAddress2() {
		
		Address address = new Address();
		address.setHouseNo(9999);
		address.setLocation("Bengaluru");
		address.setStreet("BTM Layout, Bengaluru");
		
		return address; 
	}
	
	
	@Bean
	public Subject createObjSubject() {
		
		Subject subject  = new Subject();
		
		List<String> sub_list = new ArrayList<String>();
		sub_list.add("Data Science");
		sub_list.add("Java");
		sub_list.add("ReactJs");
		
		subject.setSubList(sub_list);
		
		return subject;
	}
	
	
	@Bean
	public Student createObjStudent() {
		
		Student student = new Student();
		student.setName("Jejebapa");
		student.setMarks(99.00);
		
//		student.setAddress(createObjAddress());
//		student.setSubList(createObjSubject());
		return student; 
	}
}
