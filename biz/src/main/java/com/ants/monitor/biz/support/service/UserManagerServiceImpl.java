package com.ants.monitor.biz.support.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ants.monitor.bean.entity.SysUserDO;
import com.ants.monitor.common.redis.RedisClientTemplate;
import com.ants.monitor.common.tools.MD5Util;
import com.ants.monitor.dao.mapper.SysUserDOMapper;

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
	
	@Autowired
	private SysUserDOMapper sysUserDOMapper;

	@Override
	public boolean checkUser(String userName, String password) {
		boolean isSuccess = false;
		SysUserDO user = sysUserDOMapper.selectByUserName(userName);
		if(user != null){
			String pwd = user.getPassword();
			if(!StringUtils.isEmpty(pwd) && pwd.toLowerCase().equals(MD5Util.MD5(password).toLowerCase())){
				log.info("登录成功：" + userName);
				isSuccess = true;
			}
		}
		return isSuccess;
	}

	@Override
	public int deleteByPrimaryKey(Integer userId) {
		int row = sysUserDOMapper.deleteByPrimaryKey(userId);
		return row;
	}

	@Override
	public int insert(SysUserDO record) {
		sysUserDOMapper.insert(record);
	    int insertId = record.getUserId();
		return insertId;
	}

	@Override
	public int insertSelective(SysUserDO record) {
		sysUserDOMapper.insertSelective(record);
	    int insertId = record.getUserId();
		return insertId;
	}

	@Override
	public SysUserDO selectByPrimaryKey(Integer userId) {
		SysUserDO user = sysUserDOMapper.selectByPrimaryKey(userId);
		return user;
	}

	@Override
	public int updateByPrimaryKeySelective(SysUserDO record) {
		int row = sysUserDOMapper.updateByPrimaryKeySelective(record);
		return row;
	}

	@Override
	public int updateByPrimaryKey(SysUserDO record) {
		int row = sysUserDOMapper.updateByPrimaryKey(record);
		return row;
	}

	@Override
	public SysUserDO selectByUserName(String userName) {
		SysUserDO user = sysUserDOMapper.selectByUserName(userName);
		return user;
	}

	@Override
	public List<SysUserDO> selectList(SysUserDO user) {
		List<SysUserDO> userList = sysUserDOMapper.selectList(user);
		return userList;
	}

	@Override
	public int selectListCount(SysUserDO user) {
		int count = sysUserDOMapper.selectListCount(user);
		return count;
	}

}
