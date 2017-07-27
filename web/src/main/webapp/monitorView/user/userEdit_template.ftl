<#--user编辑Form模板-->
<script type="text/template" id="user_edit_template">
	<div class="form-group">
		<label for="name">用户名</label>
		<input type="text" class="form-control" id="userName" name="userName" value="{{userName}}"
			   placeholder="请输入用户">
	</div>
	<div class="form-group">
		<label for="name">密码</label>
		<input type="text" class="form-control" id="password" name="password" value="{{password}}"
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
			<input id="statusText" type="text" class="form-control" value="{{statusTextFunc}}" placeholder="请选择状态 " readOnly="true" >
			<input type="hidden" class="form-control" value="{{status}}" id="status" name="status">
		</div>
	</div>
</script>

