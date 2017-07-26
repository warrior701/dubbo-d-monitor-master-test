<#assign base=request.contextPath />
<!-- 模态框（Modal） 新增 -->
<div class="modal fade modal-scroll" id="userDeleteModal" tabindex="-1" data-backdrop="static" role="dialog"
	aria-labelledby="userDeleteModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:80%;">
		<div class="modal-section">
			<div class="modal-header">
				<button type="button" class="close" onclick="userDeleteExit()"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="userDeleteModalLabel">系统提示</h4>
			</div>
			<div class="modal-body">
				<div class="form-group" style="font-size:16px;">
					确定要删除此用户？
				</div>
				<input type="hidden" class="form-control" value="" id="deleteId">
				<div id="deleteErrMsg" style="display:none" class="alert alert-danger">错误！请进行一些更改。</div>
				<div id="deleteSuccessMsg" style="display:none" class="alert alert-success">操作成功，2秒后关闭</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" onclick="userDeleteExit()">取消</button>
				<button type="button" class="btn btn-primary" onclick="userDelete()">确认</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>
<script src="${base}/resources/js/user/userDelete.js" type="text/javascript"></script>