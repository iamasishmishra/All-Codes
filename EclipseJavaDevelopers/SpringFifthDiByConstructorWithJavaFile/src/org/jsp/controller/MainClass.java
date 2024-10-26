package org.jsp.controller;

import org.jsp.configuration.applicationContext;
import org.jsp.model.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new AnnotationConfigApplicationContext(applicationContext.class);
		
		Student student = (Student) context.getBean(Student.class);
		student.display();
		
	}

}
