package org.jsp.mainClassController.dao;

import javax.transaction.Transactional;

import org.jsp.mainClassController.dto.User;
import org.springframework.orm.hibernate5.HibernateTemplate;

public class UserDao {
	
	
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
	
	
	@Transactional
	public User saveUser(User user) {
		hibernateTemplate.save(user);
		
		return user;
	}
	
	
	
	
	@Transactional
	public User updateUser(User user) {
		
		User dbUser  = hibernateTemplate.get(User.class, user.getId());
		
		if(user != null) {
			dbUser.setName(user.getName());
			dbUser.setEmail(user.getEmail());
			dbUser.setPassword(user.getPassword());
			dbUser.setPhoneNo(user.getPhoneNo());
			
			hibernateTemplate.save(dbUser);
		}
		
		return null;
	}
	
	
	
	public User findUserById(int id) {
		
		User user = hibernateTemplate.get(User.class, user.getId());
		
		return user;
	}

}
