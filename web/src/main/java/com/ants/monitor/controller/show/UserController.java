package com.ants.monitor.controller.show;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ants.monitor.bean.MonitorConstants;
import com.ants.monitor.bean.ResultVO;
import com.ants.monitor.biz.support.service.UserManagerService;


/**
 * @author Lison
 * 
 */
@Controller
@RequestMapping("/monitor/user")
public class UserController {
	
	@Autowired
	private UserManagerService userManagerService;
	
    /**
     * 跳转登录页面
     * @param request
     * @return
     */
    @RequestMapping(value = "toLogin")
    public ModelAndView toLogin(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView("monitorView/login");
        return modelAndView;
    }
    
    
    /**
     * 登录
     * @param request
     * @return
     */
    @RequestMapping(value = "login")
    @ResponseBody
    public ResultVO login(String userName,String password, HttpServletRequest request) {
    	Map<String, Object> resultMap = new HashMap<>();
    	try {
			boolean isSuccess = userManagerService.checkUser(userName, password);
			if (isSuccess) {
				HttpSession session = request.getSession();
				session.setAttribute(MonitorConstants.SESSION_USER_NAME, userName);
				resultMap.put("userName", userName);
				return ResultVO.wrapSuccessfulResult(resultMap);
			} else {
				return ResultVO.wrapErrorResult("用户名不存在或者密码错误");
			}
		} catch (Exception e) {
			e.printStackTrace();
            return ResultVO.wrapErrorResult(e.getMessage());
		}
    }
}
