package org.jsp.controller;

import org.jsp.configuration.StudentConfiguration;
import org.jsp.model.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainClass {
	public static void main(String[] args) {

		ApplicationContext context = new AnnotationConfigApplicationContext(StudentConfiguration.class);

		Student student = (Student) context.getBean("student1");

		student.display();

		System.out.println("-----------------------------");

		Student student1 = (Student) context.getBean("student2");

		student1.display();

	}

}
