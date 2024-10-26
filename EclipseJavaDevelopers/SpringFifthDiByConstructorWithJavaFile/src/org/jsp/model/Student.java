package org.jsp.model;

public class Student {
	
	private String name;
	private double marks;
	private Address address;
	
	public Student(String name, double marks, Address address ) {
		this.name = name;
		this.marks = marks;
		this.address=address;
	}
	
	public void display() {
		System.out.println("Name is: "+ name);
		System.out.println("Address is: "+ address);
		System.out.println("Mark : "+ marks);
	}

}
