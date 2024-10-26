package org.jsp.model;


public class Address {
	
	private int houseNo;
	private String street;
	private String location;
	
	public int getHouseNo() {
		return houseNo;
	}
	public void setHouseNo(int houseNo) {
		this.houseNo = houseNo;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	@Override
	public String toString() {
		return "House no: "+ houseNo + " Street : "+ street + " Location : "+ location;
	}

}
