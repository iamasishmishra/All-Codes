package org.jsp.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Student {
	
	@Value("amit")
	private String name;
	
	@Value("29")
	private int age;
	
	@Value("77.0")
	private double marks;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public double getMarks() {
		return marks;
	}
	public void setMarks(double marks) {
		this.marks = marks;
	}
	
	public void display() {
		System.out.println("Name is : "+ name);
		System.out.println("Mark is : "+ marks);
		System.out.println("Age is : "+ age);
	}

}
