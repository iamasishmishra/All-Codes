package org.jsp.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class ApplicationConfig {
	
	@Bean
	public DriverManagerDataSource createDriverManagerDataSource() {
		
		DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
		
		driverManagerDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		driverManagerDataSource.setUrl("jdbc:mysql://localhost:3306/springJDBCtemplate");
		driverManagerDataSource.setUsername("root");
		driverManagerDataSource.setPassword("Asishk@123");
		
		return driverManagerDataSource;
	}
	
	
	@Bean
	public JdbcTemplate createJdbcTempObj() {
		
		JdbcTemplate jdbcTemplate = new JdbcTemplate();
		jdbcTemplate.setDataSource(createDriverManagerDataSource());
		
		return jdbcTemplate;
	}

}
