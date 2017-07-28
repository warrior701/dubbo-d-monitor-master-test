$(function() {
/*	//在调用 show 方法后触发   只能触发一次 不知原因
	$('#userAddModal').on('show.bs.modal', function() {
		$(this).removeData("bs.modal");
		$("#addErrMsg").css("display", "none");
		$("#addSuccessMsg").css("display", "none");
	})*/

});

//修改密码事件
function passwordEdit() {
	var checkMsg = checkPasswordData();
	if(checkMsg.length != 0){
		$("#passwordErrMsg").text(checkMsg);
		$("#passwordErrMsg").css("display", "block");
	}else{
		$.ajax({
			type : 'post',
			url : '/monitor/user/modifyPassword',
			data : $('#passwordEditForm').serialize(),
			success : function(data) {
				if (data.success == true) {
					$("#passwordErrMsg").css("display", "none");
					$("#passwordSuccessMsg").css("display", "block");
					setTimeout(function(){
						passwordEditExit();
					}, 2000)
				} else {
					$("#passwordErrMsg").text(data.msg);
					$("#passwordErrMsg").css("display", "block");
				}
			},
			error : function(data) {
				$("#passwordErrMsg").text(data);
				$("#passwordErrMsg").css("display", "block");
			}
		});
	}
	
}

//清空文本框内容
function clearPasswordForm(form) {
    // input清空
    $(':input', form).each(function () {
        var type = this.type;
        var tag = this.tagName.toLowerCase(); // normalize case
        if (type == 'text' || type == 'password' || tag == 'textarea')
            this.value = "";
            // 多选checkboxes清空
            // select 下拉框清空
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

//关闭事件
function passwordEditExit(){
	$("#passwordErrMsg").css("display", "none");
	$("#passwordSuccessMsg").css("display", "none");
	//清空数据
	clearPasswordForm($('#passwordEditForm'));
    $('#passwordEditModal').modal('hide');
    
    //重新加载列表数据
    document.getElementById("mainIframe").contentWindow.initData();
}


//数据校验
function checkPasswordData(){
	var newPassword = $("#newPassword").val();
	var confirmPassword = $("#confirmPassword").val();
	var msg = "";
	var tmp = "";
	if(newPassword == null || newPassword == ""){
		msg += "、新密码";
	}
	if(confirmPassword == null || confirmPassword == ""){
		msg += "、确认密码";
	}
	if(msg.length != 0){
		msg = msg.substring(1,msg.length);
		msg += "不能为空";
		tmp = "，";
	}
	if(newPassword != confirmPassword){
		msg += tmp;
		msg += "新密码和确认密码不一致";
	}
	
	return msg;
}

