package org.jsp.model;

public class Student {
	
	private String name;
	private int age;
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
