$(function() {
/*	//在调用 show 方法后触发   只能触发一次 不知原因
	$('#userEditModal').on('show.bs.modal', function() {
		$(this).removeData("bs.modal");
		$("#editErrMsg").css("display", "none");
		$("#editSuccessMsg").css("display", "none");
	})*/

});


//编辑用户事件
function userEdit() {
	var checkMsg = checkEditData();
	if(checkMsg.length != 0){
		$("#editErrMsg").text(checkMsg);
		$("#editErrMsg").css("display", "block");
	}else{
		$.ajax({
			type : 'post',
			url : '/monitor/user/editUser',
			data : $('#userEditForm').serialize(),
			success : function(data) {
				if (data.success == true) {
					$("#editErrMsg").css("display", "none");
					$("#editSuccessMsg").css("display", "block");
					setTimeout(function(){
						userEditExit();
					}, 2000)
				} else {
					$("#editErrMsg").text(data.msg);
					$("#editErrMsg").css("display", "block");
				}
			},
			error : function(data) {
				$("#editErrMsg").text(data);
				$("#editErrMsg").css("display", "block");
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
function userEditExit(){
	$("#editErrMsg").css("display", "none");
	$("#editSuccessMsg").css("display", "none");
	//清空数据
    clearForm($('#userEditForm'));
    $('#userEditModal').modal('hide');
   
}


//数据校验
function checkEditData(){
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


//初始化数据
function initEditData(userId) {
//	alert(11);
    var loadingEL = parent.$('#user_edit_modal_body');
//    var resutMap = undefined;
//    console.log(loadingEL);
//    Metronic.blockUI(loadingEL);
//	var loadingEL = $('#user_main_body');
    console.log(loadingEL);
    Metronic.blockUI(loadingEL);
    $.ajax({
        url: headerUrl + "/monitor/user/queryUserInfo",
        dataType : "json",
        data: {"userId":userId},
        //同步
        async: false,
        success: function (resultVO) {
            Metronic.unblockUI(loadingEL);
            if (resultVO.success) {
            	resutMap = resultVO.data;
            } else {
                $("#userEditForm").html("加载失败~！原因：" + resultVO.msg);
            }
        }

    });
    var user = resutMap.userInfo;
    console.log(user);
    var map = {
    	user : user,
    	statusTextFunc: function () {
            if(this.status == "00"){
            	return '停用';
            }else if(this.status == "01"){
            	return '正常';
            }else{
            	return '未知';
            }
        }
    };
    var html = Mustache.render($('#user_edit_template').html(), map);
    $("#userEditForm").html(html);
    //Amm.changeiframeParentHeight();
}
