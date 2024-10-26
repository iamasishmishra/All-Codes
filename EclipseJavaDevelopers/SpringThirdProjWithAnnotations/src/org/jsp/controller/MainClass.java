package org.jsp.controller;

import org.jsp.model.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		
//		String location = "/org/jsp/configuration/applicationContext.xml";
//		ApplicationContext context = new ClassPathXmlApplicationContext(location);
		
		ApplicationContext context = new AnnotationConfigApplicationContext(Student.class);
		Student student = (Student)context.getBean(Student.class);
		student.display();
	}

}
