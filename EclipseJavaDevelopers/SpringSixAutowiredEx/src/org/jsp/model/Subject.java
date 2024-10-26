package org.jsp.model;

import java.util.List;

public class Subject {
	
	private List<String> subList;

	public List<String> getSubList() {
		return subList;
	}

	public void setSubList(List<String> subList) {
		this.subList = subList;
	}
	
	
	@Override
	public String toString() {
		return subList.toString();
	}

}
