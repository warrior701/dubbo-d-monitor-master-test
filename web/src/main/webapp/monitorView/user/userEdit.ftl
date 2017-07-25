<!-- 模态框（Modal）编辑 -->
<div class="modal fade modal-scroll" id="userAddModal" tabindex="-1" data-backdrop="static" role="dialog"
	aria-labelledby="userAddModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:80%;">
		<div class="modal-section">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="userAddModalLabel">用户编辑</h4>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="name">用户名</label>
					<input type="text" class="form-control" id="userName" name="userName"
						   placeholder="请输入用户">
				</div>
				<div class="form-group">
					<label for="name">密码</label>
					<input type="text" class="form-control" id="password" name="password"
						   placeholder="请输入密码">
				</div>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-btn">
							<button type="button" class="btn btn-default dropdown-toggle"
								data-toggle="dropdown">
								状态<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li><a href="javascript:changeStatus('01')">正常</a></li>
								<li class="divider"></li>
								<li><a href="javascript:changeStatus('00')">停用</a></li>
							</ul>
						</div>
						<input id="statusText" type="text" class="form-control" value="正常" placeholder="请选择状态 " readOnly="true" >
						<input type="hidden" class="form-control" value="01" id="status" name="status">
					</div>
					<!-- /input-group -->

					<!-- <label for="name">状态</label>
					<input type="text" class="form-control" id="name"> -->
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				<button type="button" class="btn btn-primary" onclick="userAdd()">保存</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal -->
</div>
