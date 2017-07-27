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
	$.ajax({
		type : 'post',
		url : '/monitor/user/deleteUser' ,
		data : {userId:deleteId},
		success : function(data) {
			if (data.success == true) {
				$("#deleteSuccessMsg").css("display", "block");
				setTimeout(function(){
					userDeleteExit();
				}, 2000)
			} else {
				$("#deleteErrMsg").text(data.msg);
				$("#deleteErrMsg").css("display", "block");
			}
		},
		error : function(data) {
			$("#deleteErrMsg").text(data);
			$("#deleteErrMsg").css("display", "block");
		}
	});
}


//关闭事件
function userDeleteExit(){
	$("#deleteErrMsg").css("display", "none");
	$("#deleteSuccessMsg").css("display", "none");
    $('#userDeleteModal').modal('hide');
    
    //重新加载列表数据
    document.getElementById("mainIframe").contentWindow.initData();

}