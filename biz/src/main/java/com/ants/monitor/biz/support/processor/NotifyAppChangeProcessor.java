package com.ants.monitor.biz.support.processor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ants.monitor.bean.bizBean.ApplicationChangeBO;

/**
 * Created by zxg on 16/1/5.
 * 15:20
 * 应用停止和启动事件捕获后的处理机制
 * 可做邮件通知、电话通知、短信通知等相关应用负责人的代码
 */
@Service
public class NotifyAppChangeProcessor {
	
	@Value(value = "${is_open_email}")
    private String is_open_email;

	@Value(value = "${email.mailServer}")
    private String mailServer;
	
	@Value(value = "${email.loginAccount}")
    private String loginAccount;
	
	@Value(value = "${email.loginAuthCode}")
    private String loginAuthCode;
	
	@Value(value = "${email.sender}")
    private String sender;
	
	@Value(value = "${email.recipients}")
    private String recipients;
	
	@Value(value = "${email.stop.emailSubject}")
    private String stopEmailSubject;
	
	@Value(value = "${email.start.emailSubject}")
    private String startEmailSubject;
	
	@Value(value = "${email.emailContentType}")
    private String emailContentType;
	
    public void stopApp(ApplicationChangeBO applicationChangeBO){
        //todo
        //发送邮件
        new SendEmailThread(applicationChangeBO, is_open_email, mailServer, loginAccount, loginAuthCode, sender, 
  				recipients, stopEmailSubject, emailContentType).run();
    }

    public void startApp(ApplicationChangeBO applicationChangeBO){
        //todo
    	new SendEmailThread(applicationChangeBO, is_open_email, mailServer, loginAccount, loginAuthCode, sender, 
  				recipients, startEmailSubject, emailContentType).run();
    }
    
}

