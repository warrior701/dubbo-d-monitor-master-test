package com.ants.monitor.biz.support.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ants.monitor.common.redis.RedisClientTemplate;
import com.ants.monitor.common.tools.MD5Util;

/**
 * @author Lison
 * 登录用户管理实现类
 */
@Service
public class UserManagerServiceImpl implements UserManagerService {
	
	@Autowired
    private RedisClientTemplate redisClientTemplate;

	@Override
	public boolean checkUser(String userName, String password) {
		boolean isSuccess = false;
		// 从redis中取登录用户数据
		String redisPwd = redisClientTemplate.get(userName);
		if(!StringUtils.isEmpty(redisPwd) && redisPwd.toLowerCase().equals(MD5Util.MD5(password).toLowerCase())){
			isSuccess = true;
		}
		return isSuccess;
	}

}
