$(function() {
	// 在调用 show 方法后触发
	$('#userAddModal').on('show.bs.modal', function() {
		$("#addErrMsg").css("display", "none");
		$("#addSuccessMsg").css("display", "none");
	})
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
	$("#addSuccessMsg").css("display", "block");
	setTimeout(function(){
		$('#userAddModal').modal('hide')
	}, 2000)
}