<#--user 主列表模板-->
<script type="text/template" id="user_edit_template">
    <div class="form-group">
    	<label for="name"><span style="color:red">*</span>用户名</label>
    	<input type="text" class="form-control" id="editUserName" name="userName" value="{{user.userName}}"
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
    				<li><a href="javascript:changeEditStatus('01')">正常</a></li>
    				<li class="divider"></li>
    				<li><a href="javascript:changeEditStatus('00')">停用</a></li>
    			</ul>
    		</div>
    		<input id="editStatusText" type="text" class="form-control" value="{{{statusTextFunc}}}" placeholder="请选择状态 " readOnly="true" >
    		<input type="hidden" class="form-control" value="{{user.status}}" id="editStatus" name="status">
			<input type="hidden" class="form-control" value="{{user.userId}}" name="userId">
    	</div>
    </div>
	<div class="form-group">
		<label for="name">备注</label>
		<textarea class="form-control" rows="3" id="editNote" name="note" style="resize:none;" value="{{user.note}}"
		   		placeholder="请输入备注信息">{{user.note}}</textarea>
	</div>
</script>

