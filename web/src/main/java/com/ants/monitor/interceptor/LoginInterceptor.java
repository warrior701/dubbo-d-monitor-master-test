package com.ants.monitor.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ants.monitor.bean.MonitorConstants;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LoginInterceptor implements HandlerInterceptor {
	
	
	@Value(value = "${no_filter_setting}")
    private String no_filter_setting;

	/**
	 * Handler执行完成之后调用这个方法
	 */
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object obj, Exception exc)
			throws Exception {
		// TODO Auto-generated method stub

	}
	
	/**
	 * Handler执行之后，ModelAndView返回之前调用这个方法
	 */
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object obj, ModelAndView view)
			throws Exception {
		// TODO Auto-generated method stub

	}

	/**
	 * Handler执行之前调用这个方法
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object obj) throws Exception {
		//获取请求的URL  
        String url = request.getRequestURI();  
        log.info("拦截路径："+url);
        //除了这些请求是可以公开访问的，其它的URL都进行拦截控制  
        String[] noFilterArray = no_filter_setting.split(",");
        for(String noFilter : noFilterArray){
        	if(url.indexOf(noFilter)>=0){  
                return true;  
            }  
        }
        //获取Session  
        HttpSession session = request.getSession();  
        String username = (String)session.getAttribute(MonitorConstants.SESSION_USER_NAME);  
        if(username != null){  
            return true;  
        }  
        //不符合条件的，跳转到登录界面  
        request.getRequestDispatcher("/monitor/user/toLogin").forward(request, response);  
        return false;
	}

}
