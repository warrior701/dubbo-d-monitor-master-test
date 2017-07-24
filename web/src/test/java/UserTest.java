import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.ants.monitor.bean.entity.SysUserDO;
import com.ants.monitor.biz.support.service.UserManagerService;
import com.ants.monitor.common.tools.MD5Util;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:conf/application-context.xml"})
@TransactionConfiguration(transactionManager="txManager", defaultRollback=false)
public class UserTest {

	@Autowired
	private UserManagerService userManagerService;

	@Test
	public void testUserAdd() {
        SysUserDO user = new SysUserDO();
        Date curDate = new Date();
        user.setUserName("chenzl01");
        user.setPassword(MD5Util.MD5("123456"));
        user.setStatus("01");
        user.setCreateBy("admin");
        user.setCreateDate(curDate);
        user.setUpdateBy("admin");
        user.setUpdateDate(curDate);
        userManagerService.insertSelective(user);
        System.out.println("============================begin======================");
		System.out.println(user.getUserId());
		System.out.println("============================end========================");
	}
	
	
//	@Test
//	public void testUserSelectList() {
//        SysUserDO user = new SysUserDO();
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date queryDate = null;
//		try {
//			queryDate = dateFormat.parse("2017-07-24 14:27:06");
//		} catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
////        user.setUserName("chenzl01");
//        user.setPassword(MD5Util.MD5("123456"));
//        user.setStatus("01");
//        user.setCreateBy("admin");
////        user.setCreateDate(queryDate);
//        user.setUpdateBy("admin");
////        user.setUpdateDate(queryDate);
//		List<SysUserDO> userList = userManagerService.selectList(user);
//		System.out.println("============================begin======================");
//		for(SysUserDO userInfo : userList){
//			System.out.println(userInfo.getUserName());
//		}
//		System.out.println("============================end========================");
//
//	}
//	
//	@Test
//	public void testUserSelectListCount() {
//        SysUserDO user = new SysUserDO();
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date queryDate = null;
//		try {
//			queryDate = dateFormat.parse("2017-07-24 14:27:06");
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
////        user.setUserName("chenzl01");
//        user.setPassword(MD5Util.MD5("123456"));
//        user.setStatus("01");
//        user.setCreateBy("admin");
////        user.setCreateDate(queryDate);
//        user.setUpdateBy("admin");
////        user.setUpdateDate(queryDate);
//		int count = userManagerService.selectListCount(user);
//		System.out.println("============================begin======================");
//		System.out.println(count);
//		System.out.println("============================end========================");
//
//	}
	
	public static void main(String[] args) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date queryDate = null;
		try {
			queryDate = dateFormat.parse("2017-07-24 14:27:06");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(dateFormat.format(queryDate));
	}
	

}
