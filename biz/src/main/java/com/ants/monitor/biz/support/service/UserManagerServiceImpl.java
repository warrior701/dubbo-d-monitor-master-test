package com.ants.monitor.biz.support.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ants.monitor.common.redis.RedisClientTemplate;
import com.ants.monitor.common.tools.MD5Util;

import lombok.extern.slf4j.Slf4j;

/**
 * @author Lison
 * 登录用户管理实现类
 */
@Slf4j
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
			log.info("登录成功：" + userName);
			isSuccess = true;
		}
		return isSuccess;
	}

}
