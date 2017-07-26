package com.ants.monitor.controller.show;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ants.monitor.bean.MonitorConstants;
import com.ants.monitor.bean.ResultVO;
import com.ants.monitor.bean.entity.SysUserDO;
import com.ants.monitor.biz.support.service.UserManagerService;

import lombok.extern.slf4j.Slf4j;


/**
 * @author Lison
 * 
 */
@Slf4j
@Controller
@RequestMapping("/monitor/user")
public class UserController {
	
	@Autowired
	private UserManagerService userManagerService;
	
    /**
     * 用户管理
     * @return
     */
    @RequestMapping(value = "main")
    public ModelAndView main() {
        return new ModelAndView("monitorView/user/userIndex");
    }
	
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
    
    /**
     * 退出系统
     * @param request
     * @return
     */
    @RequestMapping(value = "logout")
    public ModelAndView logout(HttpServletRequest request) {
    	// 清除session
		Enumeration<String> em = request.getSession().getAttributeNames();
		log.info("========================系统退出 start=========================");
		while (em.hasMoreElements()) {
			String nextElement = em.nextElement().toString();
			log.info(nextElement);
			request.getSession().removeAttribute(nextElement);
		}
		request.getSession().invalidate();
		log.info("========================系统退出 end=========================");
		ModelAndView modelAndView = new ModelAndView("monitorView/login");
        return modelAndView;
    }
    
    /**
     * 查询所有用户列表
     * @return
     */
    @RequestMapping(value = "/queryAllUser", method = RequestMethod.GET)
    @ResponseBody
    public ResultVO queryAllUser() {
        try {
            Map<String, Object> resultMap = new HashMap<>();
            List<SysUserDO> userList = new ArrayList<>();
            SysUserDO userInfo = new SysUserDO();
            userList = userManagerService.selectList(userInfo);
            
            userInfo.setStatus("01");  //正常
            int normalUserSum = userManagerService.selectListCount(userInfo);
            userInfo.setStatus("00");  //停用
            int stopUserSum = userManagerService.selectListCount(userInfo);
            
            //对userList 排序，按首字母
            Collections.sort(userList, new Comparator<SysUserDO>() {
                @Override
                public int compare(SysUserDO o1, SysUserDO o2) {
                    Integer o1First = o1.getUserName().codePointAt(0);
                    Integer o2First = o2.getUserName().codePointAt(0);
                    return o1First.compareTo(o2First);
                }
            });

            resultMap.put("normalUserSum", normalUserSum);
            resultMap.put("stopUserSum", stopUserSum);
            resultMap.put("userList", userList);
            return ResultVO.wrapSuccessfulResult(resultMap);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResultVO.wrapErrorResult(e.getMessage());
        }

    }
}
