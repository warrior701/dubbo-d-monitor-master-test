package com.ants.monitor.biz.support.processor;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.ants.monitor.bean.bizBean.ApplicationChangeBO;
import com.ants.monitor.common.tools.JavaMailUtils;

/**
 * @author czl
 * bubbo服务开始邮件通知线程
 */

public class SendEmailThread extends Thread {
	private ApplicationChangeBO applicationChangeBO;
	private String is_open_email;
	private String mailServer;
	private String loginAccount;
	private String loginAuthCode;
	private String sender;
	private String recipients;
	private String emailSubject;
	private String emailContentType;

	public SendEmailThread(ApplicationChangeBO applicationChangeBO, String is_open_email, String mailServer,
			String loginAccount, String loginAuthCode, String sender, String recipients, String emailSubject,
			String emailContentType) {
		this.applicationChangeBO = applicationChangeBO;
		this.is_open_email = is_open_email;
		this.mailServer = mailServer;
		this.loginAccount = loginAccount;
		this.loginAuthCode = loginAuthCode;
		this.sender = sender;
		this.recipients = recipients;
		this.emailSubject = emailSubject;
		this.emailContentType = emailContentType;
	}

	public void run() {
		try {
			Boolean openEmail = Boolean.parseBoolean(is_open_email);
			Date currentTime = new Date();
		    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		    String dateString = formatter.format(currentTime);
			String stopEmailContent = "邮件发送调用时间："+dateString+",<br> host:" + (String) applicationChangeBO.getHost() + ",<br> port:"
					+ applicationChangeBO.getPort() + ",<br> appName:" + applicationChangeBO.getAppName() + ",<br> category:" 
					+ applicationChangeBO.getCategory() + ",<br> organization:"
					+ applicationChangeBO.getOrganization() + ",<br> type:" + applicationChangeBO.getDoType();
			if (openEmail) {
				JavaMailUtils.sendEmail(mailServer, loginAccount, loginAuthCode, sender, recipients.split(","),
						emailSubject, stopEmailContent, emailContentType);
			}
		} catch (Exception e) {
			System.out.println("发送邮件失败，失败原因：" + e.getMessage());
		}

	}
}
