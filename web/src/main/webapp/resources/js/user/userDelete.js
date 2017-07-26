$(function() {
//	// 在调用 show 方法后触发
//	$('#userDeleteModal').on('show.bs.modal', function() {
//		$("#deleteErrMsg").css("display", "none");
//		$("#deleteSuccessMsg").css("display", "none");
//	})

});



//删除用户事件
function userDelete() {
	var deleteId = $("#deleteId").val();
	alert(deleteId);
	$("#deleteSuccessMsg").css("display", "block");
	setTimeout(function(){
		userDeleteExit();
	}, 2000)
}

//关闭事件
function userDeleteExit(){
	$("#deleteErrMsg").css("display", "none");
	$("#deleteSuccessMsg").css("display", "none");
    $('#userDeleteModal').modal('hide');
}