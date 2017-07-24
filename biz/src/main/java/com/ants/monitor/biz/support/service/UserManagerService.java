package com.ants.monitor.biz.support.service;

import java.util.List;

import com.ants.monitor.bean.entity.SysUserDO;

/**
 * @author Lison
 * 登录用户管理接口
 */
public interface UserManagerService {
	
	/**
	 * 校验用户是否存在
	 * @param userName
	 * @param password
	 * @return
	 */
	boolean checkUser(String userName,String password);
	
	/**
	 * 根据主键userId删除信息
	 * @param userId
	 * @return
	 */
	int deleteByPrimaryKey(Integer userId);

    /**
     * 插入数据，返回值为主键
     * @param record
     * @return
     */
    int insert(SysUserDO record);

    /**
     * 有选择性插入数据，返回值为主键
     * @param record
     * @return
     */
    int insertSelective(SysUserDO record);

    /**
     * 根据主键userId查询信息
     * @param userId
     * @return
     */
    SysUserDO selectByPrimaryKey(Integer userId);

    /**
     * 有选择性更新数据
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(SysUserDO record);

    /**
     * 更新数据
     * @param record
     * @return
     */
    int updateByPrimaryKey(SysUserDO record);
    
    /**
     * 根据用户名查询用户
     * @param userName
     * @return
     */
    SysUserDO selectByUserName(String userName);
    
    /**
     * 根据条件查询用户列表
     * @param userName
     * @return
     */
    List<SysUserDO> selectList(SysUserDO user);
    
    /**
     * 根据条件查询用户个数
     * @param user
     * @return
     */
    int selectListCount(SysUserDO user);
	
}
