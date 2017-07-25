$(function() {
	// 在调用 show 方法后触发
	$('#userDeleteModal').on('show.bs.modal', function() {
		$("#errMsg").css("display", "none");
		$("#successMsg").css("display", "none");
	})
});



//删除用户事件
function userDelete() {
	var deleteId = $("#deleteId").val;
	alert(deleteId);
	$("#successMsg").css("display", "block");
	setTimeout(function(){
		$('#userDeleteModal').modal('hide')
	}, 2000)
}