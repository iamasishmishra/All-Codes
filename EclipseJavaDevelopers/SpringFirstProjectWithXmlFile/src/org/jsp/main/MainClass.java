package org.jsp.main;

import org.jsp.student.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		String location = "/org/jsp/configuration/applicationContext.xml";
		
		ApplicationContext context  = new ClassPathXmlApplicationContext(location);
		
		Student student = (Student) context.getBean("student");
		student.display();
		
		System.out.println("-------------------------------------");
		Student student2 = (Student) context.getBean("student2");
		student2.display();
	}

}
