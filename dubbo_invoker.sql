CREATE TABLE `dubbo_invoke` (
  `uu_id` varchar(255) NOT NULL DEFAULT '' COMMENT 'uuid,唯一主键',
  `application` varchar(255) NOT NULL DEFAULT '' COMMENT 'application名称',
  `app_type` varchar(255) DEFAULT '' COMMENT '本身类型',
  `service` varchar(255) DEFAULT '' COMMENT 'service 函数',
  `method` varchar(255) DEFAULT '' COMMENT '服务',
  `consumer_host` varchar(255) NOT NULL DEFAULT '' COMMENT '消费者ip',
  `consumer_port` varchar(255) NOT NULL DEFAULT '' COMMENT '消费者端口号',
  `provider_host` varchar(255) NOT NULL DEFAULT '' COMMENT '提供者ip',
  `provider_port` varchar(255) NOT NULL DEFAULT '' COMMENT '提供者端口号',
  `success` int(11) unsigned DEFAULT '0' COMMENT '成功次数',
  `failure` int(11) unsigned DEFAULT '0' COMMENT '失败次数',
  `elapsed` int(11) unsigned DEFAULT '0' COMMENT '总耗时--ms',
  `concurrent` int(11) unsigned DEFAULT '0' COMMENT '并发数',
  `max_elapsed` int(11) unsigned DEFAULT '0' COMMENT '最大耗时',
  `max_concurrent` int(11) unsigned DEFAULT '0' COMMENT '最大并发数',
  `invoke_date` char(10) DEFAULT NULL COMMENT '日期:yyyy-MM-dd',
  `invoke_hour` char(2) DEFAULT NULL COMMENT '小时：hh 例如——9:11 即09',
  `invoke_time` bigint(20) DEFAULT NULL COMMENT 'dubbo服务 响应的时间',
  `gmt_create` datetime DEFAULT NULL COMMENT '默认创建时间',
  PRIMARY KEY (`uu_id`),
  KEY `index_service` (`service`),
  KEY `index_method` (`method`),
  KEY `index_date` (`invoke_date`),
  KEY `index_hour` (`invoke_hour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='存储持久化数据，保存日期为30天'

-- 用户登录表
CREATE TABLE `monitor`.`dubbo_sys_user`(  
  `user_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_name` VARCHAR(32) COMMENT '用户名',
  `password` VARCHAR(32) COMMENT '密码(MD5)',
  `status` CHAR(2) COMMENT '状态 00：删除 01：正常',
  `create_by` VARCHAR(32) COMMENT '创建人',
  `update_by` VARCHAR(32) COMMENT '更新人',
  `create_date` DATETIME COMMENT '创建时间',
  `update_date` DATETIME COMMENT '更新时间',
  PRIMARY KEY (`user_id`)
) ENGINE=INNODB CHARSET=utf8mb4
COMMENT='用户表';
