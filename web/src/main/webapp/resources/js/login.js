//回车触发
$(function() {
	var KEY_ENTER = 13;
	$(document).keydown(function(event) {
		if (event.keyCode == KEY_ENTER) {
			$("#login-button").click();
		}
	});
})
// 登录
function check() {
	var userName = $.trim($('#userName').val());
	var password = $.trim($('#password').val());
	if ("" == userName || "" == password) {
		alert('用户名或者密码不能为空');
	} else {
		$.ajax({
			type : 'post',
			url : '/monitor/user/login?userName=' + userName + '&password='
					+ password,
			success : function(data) {
				if (data.success == true) {
					window.location.href = '/monitor/dash/main';
					console.log("登录成功,用户名:" + data.data.userName);
				} else {
					alert(data.msg);
				}
			},
			error : function(data) {
				console.log(data);
			}
		});
	}
}
