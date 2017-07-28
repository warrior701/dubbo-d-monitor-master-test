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
					<script type="text/template" id="user_edit_template">
                        <div class="form-group">
                        	<label for="name"><span style="color:red">*</span>用户名</label>
                        	<input type="text" class="form-control" id="userName" name="userName" value="{{user.userName}}"
                        		   placeholder="请输入用户">
                        </div>
                        <div class="form-group">
                        	<div class="input-group">
                        		<div class="input-group-btn">
                        			<button type="button" class="btn btn-default dropdown-toggle"
                        				data-toggle="dropdown">
                        				<span style="color:red">*</span>状态<span class="caret"></span>
                        			</button>
                        			<ul class="dropdown-menu">
                        				<li><a href="javascript:changeStatus('01')">正常</a></li>
                        				<li class="divider"></li>
                        				<li><a href="javascript:changeStatus('00')">停用</a></li>
                        			</ul>
                        		</div>
                        		<input id="statusText" type="text" class="form-control" value="{{statusTextFunc}}" placeholder="请选择状态 " readOnly="true" >
                        		<input type="hidden" class="form-control" value="{{user.status}}" id="status" name="status">
                        	</div>
                        </div>
						<div class="form-group">
							<label for="name">备注</label>
							<textarea class="form-control" rows="3" id="note" name="note" style="resize:none;" value="{{user.note}}"
							   		placeholder="请输入备注信息">{{user.note}}</textarea>
						</div>
                	</script>
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
