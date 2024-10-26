package org.jsp.controller;

import org.jsp.configuration.ApplicationConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class App 
{
    public static void main( String[] args )
    {
    	
    	int rollNo = 11;
    	String name = "Sambhu";
    	double marks = 88.77;
    	
    	
    	
    	ApplicationContext context = new AnnotationConfigApplicationContext(ApplicationConfig.class);
    	JdbcTemplate jdbcTemplate = context.getBean(JdbcTemplate.class);
    	
    	String qry = "insert into springJDBCtemplate.student values(?,?,?)";
    	
    	int update = jdbcTemplate.update(qry, rollNo, name, marks);
    	
    	if(update != 0) {
    		System.out.println("Inserted..");
    	}else {
    		System.out.println("Not..");
    	}
    	
    	
    }
}
