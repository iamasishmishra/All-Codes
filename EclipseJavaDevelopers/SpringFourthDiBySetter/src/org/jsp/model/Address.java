package org.jsp.model;

public class Address {
	private int houseNo;
	private String loc;
	private String town;
	
	public int getHouseNo() {
		return houseNo;
	}
	public void setHouseNo(int houseNo) {
		this.houseNo = houseNo;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	
	
	@Override
	public String toString() {

		return "House no : "+ houseNo + " Loc: "+ loc+" Town : "+ town;
	}
	

}
