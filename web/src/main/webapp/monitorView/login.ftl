<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录</title>
<!-- CSS -->
<link rel="stylesheet" href="${base}/resources/assets/login/assets/css/reset.css">
<link rel="stylesheet" href="${base}/resources/assets/login/assets/css/supersized.css">
<link rel="stylesheet" href="${base}/resources/assets/login/assets/css/style.css">   
<link rel="stylesheet" type="text/css" href="${base}/resources/assets/login/css/styles.css">
<!-- Javascript -->
<script src="${base}/resources/assets/login/js/jquery-2.1.1.min.js"></script>
<script src="${base}/resources/assets/login/assets/js/jquery-1.8.2.min.js"></script>
<script src="${base}/resources/assets/login/assets/js/supersized.3.2.7.min.js"></script>
<script src="${base}/resources/assets/login/assets/js/supersized-init.js"></script>
<script src="${base}/resources/assets/login/assets/js/scripts.js"></script>
<script type="text/javascript">
// 登录
function check() {
    var userName = $.trim($('#userName').val());
    var password = $.trim($('#password').val());
    if ("" == userName || "" == password) {
        alert('用户名或者密码不能为空');
    } else {
        $.ajax({
            type : 'post',
            url : '/monitor/user/login?userName=' + userName + '&password=' + password,
            success : function(data) {
                if(data.success == true){
                   window.location.href = '/monitor/dash/main';
                   console.log("登录成功,用户名:" + data.data.userName);
                }else{
                   alert(data.msg);
                }
            },
        	error: function(data){
        		console.log(data);
        	} 
        });
    }
}

</script>
</head>
<body>
	<div class="page-container">	           
		<div class="wrapper">	
			<div class="container">
				<strong><span style="font-weight: bold;font-size: 25px;">登  录</span></strong> 
				<form class="form" action="#" method="post">
					<input type="text" id="userName" name="userName" placeholder="Username">
					<input type="password" id="password" name="password"  placeholder="Password">
					<button type="button" id="login-button" onclick="check();">Login</button>
				</form>
			</div>
	  	</div>
	</div>
</body>
</html>