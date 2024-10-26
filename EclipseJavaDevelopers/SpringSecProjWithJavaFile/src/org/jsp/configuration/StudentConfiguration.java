package org.jsp.configuration;

import org.jsp.model.Student;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfiguration {
	
	@Bean("student1")
	public Student studentObj() {
		Student student = new Student();
		student.setName("Binod");
		student.setAge(23);
		student.setMarks(88.54);
		return student;
	}
	
	@Bean("student2")
	public Student studentObj2() {
		Student student1 = new Student();
		student1.setName("Abua");
		student1.setAge(23);
		student1.setMarks(88.54);
		return student1;
	}

}
