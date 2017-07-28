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
    $("#editStatusText").val("正常");
    $("#editStatus").val("01");
};

//关闭事件
function userEditExit(){
	$("#editErrMsg").css("display", "none");
	$("#editSuccessMsg").css("display", "none");
	//清空数据
    clearForm($('#userEditForm'));
    $('#userEditModal').modal('hide');
    
    //重新加载列表数据
    document.getElementById("mainIframe").contentWindow.initData();
   
}


//数据校验
function checkEditData(){
	var userName = $("#editUserName").val();
	var status = $("#editStatus").val();
	var msg = "";
	if(userName == null || userName == ""){
		msg += "、用户名";
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

//下拉框事件
function changeEditStatus(status) {
	if ("00" == status) {
		$("#editStatusText").val("停用");
		$("#editStatus").val(status);
	} else if ("01" == status) {
		$("#editStatusText").val("正常");
		$("#editStatus").val(status);
	} else {
		$("#editStatusText").val("未知");
		$("#editStatus").val("");
	}
}

//初始化数据
function initEditData(userId) {
    var loadingEL = parent.$('#user_edit_modal_body');
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
    var map = {
    	user : user,
    	statusTextFunc: function () {
            if(user.status == "00"){
            	return '停用';
            }else if(user.status == "01"){
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
