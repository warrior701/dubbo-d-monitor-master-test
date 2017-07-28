<#assign base=request.contextPath />
<!-- 模态框（Modal） 修改 -->
<div class="modal fade modal-scroll" id="userEditModal" tabindex="-1" data-backdrop="static" role="dialog"
	aria-labelledby="userEditModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:80%;">
		<div class="modal-section">
			<div class="modal-header">
				<button type="button" class="close" onclick="userEditExit()"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="userEditModalLabel"><span style="color:#65A0D0;font-weight:600">编辑用户<span></h4>
			</div>
			<div class="modal-body" id="user_edit_modal_body">
				<form id="userEditForm">
					
				</form>
				<div id="editErrMsg" style="display:none" class="alert alert-danger">错误！请进行一些更改。</div>
				<div id="editSuccessMsg" style="display:none" class="alert alert-success">操作成功，2秒后关闭</div>
				
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" onclick="userEditExit()">关闭</button>
				<button type="button" class="btn btn-primary" onclick="userEdit()">保存</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>
<script src="${base}/resources/js/user/userEdit.js" type="text/javascript"></script>
