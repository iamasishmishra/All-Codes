package org.jsp.model;

public class Address {
	
	private int houseNo;
	private String loc;
	private String town;
	
	public Address(int houseNo, String loc, String town) {
		this.houseNo = houseNo;
		this.loc = loc;
		this.town = town;
	}
	
	@Override
	public String toString() {

		return "House no : "+ houseNo + " Loc: "+ loc+" Town : "+ town;
	}

}
