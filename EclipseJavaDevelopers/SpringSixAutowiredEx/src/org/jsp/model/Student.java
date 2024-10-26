package org.jsp.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Student {
	
	private String name;
	private double marks;
	
	@Autowired
	@Qualifier("createObjAddress2")
	private Address address;
	
	@Autowired
	private Subject subList;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getMarks() {
		return marks;
	}
	public void setMarks(double marks) {
		this.marks = marks;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Subject getSubList() {
		return subList;
	}
	public void setSubList(Subject subList) {
		this.subList = subList;
	}
	
	
	public void display() {
		System.out.println("Name : "+name);
		System.out.println("Marks : "+ marks);
		System.out.println("Addres is : " + address);
		System.out.println("Subjects are : "+ subList);
	}
	
}
