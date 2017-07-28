package com.ants.monitor.bean.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

/**
 * @author Lison
 * 用户表(DUBBO_SYS_USER)
 */
@Data
public class SysUserDO {
	/** 版本号 */
    private static final long serialVersionUID = -1269011792051486280L;

    /** 主键 */
    private Integer userId;

    /** 用户名 */
    private String userName;

    /** 密码(MD5) */
    private String password;

    /** 状态 00：删除 01：正常 */
    private String status;
    
    /** 备注*/
    private String note;

    /** 创建人 */
    private String createBy;

    /** 更新人 */
    private String updateBy;

    /** 创建时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Date createDate;

    /** 更新时间 */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+8")
    private Date updateDate;

}
