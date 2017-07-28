<#assign base=request.contextPath />
<!-- 模态框（Modal） 修改密码 -->
<div class="modal fade modal-scroll" id="passwordEditModal" tabindex="-1" data-backdrop="static" role="dialog"
	aria-labelledby="userEditModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:80%;">
		<div class="modal-section">
			<div class="modal-header">
				<button type="button" class="close" onclick="passwordEditExit()"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="passwordEditModal"><span style="color:#65A0D0;font-weight:600">修改密码<span></h4>
			</div>
			<div class="modal-body" >
				<form id="passwordEditForm">
					<div class="form-group">
						<label for="name"><span style="color: red">*</span>新密码</label> <input
							type="text" class="form-control" id="newPassword" name="newPassword"
							value="" placeholder="请输入用户新密码">
					</div>
					<div class="form-group">
						<label for="name"><span style="color: red">*</span>确认密码</label> <input
							type="text" class="form-control" id="confirmPassword" name="confirmPassword"
							value="" placeholder="请再次输入用户新密码">
					</div>
					<input type="hidden" class="form-control" value="" id="passwordId" name="userId">
				</form>
				<div id="passwordErrMsg" style="display: none"
					class="alert alert-danger">错误！请进行一些更改。</div>
				<div id="passwordSuccessMsg" style="display: none"
					class="alert alert-success">操作成功，2秒后关闭</div>

			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" onclick="passwordEditExit()">关闭</button>
				<button type="button" class="btn btn-primary" onclick="passwordEdit()">保存</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>
<script src="${base}/resources/js/user/passwordEdit.js" type="text/javascript"></script>
