$(function() {
/*	//在调用 show 方法后触发   只能触发一次 不知原因
	$('#userAddModal').on('show.bs.modal', function() {
		$(this).removeData("bs.modal");
		$("#addErrMsg").css("display", "none");
		$("#addSuccessMsg").css("display", "none");
	})*/

});

//下拉框事件
function changeStatus(status) {
	if ("00" == status) {
		$("#statusText").val("停用");
		$("#status").val(status);
	} else if ("01" == status) {
		$("#statusText").val("正常");
		$("#status").val(status);
	} else {
		$("#statusText").val("未知");
		$("#status").val("");
	}
}

//新建用户事件
function userAdd() {
	var checkMsg = checkAddData();
	if(checkMsg.length != 0){
		$("#addErrMsg").text(checkMsg);
		$("#addErrMsg").css("display", "block");
	}else{
		$.ajax({
			type : 'post',
			url : '/monitor/user/addUser',
			data : $('#userAddForm').serialize(),
			success : function(data) {
				if (data.success == true) {
					$("#addErrMsg").css("display", "none");
					$("#addSuccessMsg").css("display", "block");
					setTimeout(function(){
						userAddExit();
					}, 2000)
				} else {
					$("#addErrMsg").text(data.msg);
					$("#addErrMsg").css("display", "block");
				}
			},
			error : function(data) {
				$("#addErrMsg").text(data);
				$("#addErrMsg").css("display", "block");
			}
		});
	}
	
}

//清空文本框内容
function clearForm(form) {
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
    //赋予默认值
    $("#statusText").val("正常");
    $("#status").val("01");
};

//关闭事件
function userAddExit(){
	$("#addErrMsg").css("display", "none");
	$("#addSuccessMsg").css("display", "none");
	//清空数据
    clearForm($('#userAddForm'));
    $('#userAddModal').modal('hide');
    
    //重新加载列表数据
    document.getElementById("mainIframe").contentWindow.initData();
}


//数据校验
function checkAddData(){
	var userName = $("#userName").val();
	var password = $("#password").val();
	var status = $("#status").val();
	var msg = "";
	if(userName == null || userName == ""){
		msg += "、用户名";
	}
	if(password == null || password == ""){
		msg += "、密码";
	}
	if(status == null || status == ""){
		msg += "、状态";
	}
	if(msg.length != 0){
		msg = msg.substring(1,msg.length);
		msg += "不能为空";
	}
	return msg;
}

