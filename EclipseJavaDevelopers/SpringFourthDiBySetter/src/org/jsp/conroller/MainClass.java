package org.jsp.conroller;

import org.jsp.model.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
	public static void main(String[] args) {
		String location = "/org/jsp/configuration/applicationContext.xml";
		ApplicationContext context = new ClassPathXmlApplicationContext(location);
		
		Student student =(Student) context.getBean("student");
		student.display();
	}

}
