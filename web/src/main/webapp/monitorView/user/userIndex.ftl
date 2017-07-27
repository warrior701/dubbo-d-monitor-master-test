<#assign base=request.contextPath />
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8"/>
    <title>ants-monitor - dubbo监控中心</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="${base}/resources/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"
          type="text/css">
    <link href="${base}/resources/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"
          type="text/css">
    <link href="${base}/resources/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"
          type="text/css">
    <link href="${base}/resources/assets/global/plugins/uniform/css/uniform.default.min.css" rel="stylesheet"
          type="text/css">
    <!-- END GLOBAL MANDATORY STYLES -->
    
    
    
    <!-- BEGIN THEME STYLES -->
    <link href="${base}/resources/assets/global/css/components-rounded.css" id="style_components" rel="stylesheet"
          type="text/css"/>
    <link href="${base}/resources/assets/main/css/layout.css" rel="stylesheet" type="text/css"/>
    <link id="style_color" href="${base}/resources/assets/main/css/light.css" rel="stylesheet" type="text/css"/>
    <!-- END THEME STYLES -->
    
    
    
    <!-- BEGIN USER STYLES -->
    <link href="${base}/resources/assets/main/css/amm.css" rel="stylesheet" type="text/css"/>
    <link href="${base}/resources/assets/global/css/components-rounded.css" id="style_components" rel="stylesheet"
          type="text/css"/>
    <style type="text/css">
        tr, th {
            text-align: center;
        }
        tbody > tr {
            cursor: pointer;
        }
        .ranking_body{
            min-height: 500px;
        }
        .label-best{
            display: inline-block;
            padding: 5px 4px 6px 5px;
            vertical-align: middle;
            text-align: center;
            font-size: 12px;
        }
    </style>
    <!-- END USER STYLES -->
    
    
    
    <!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="${base}/resources/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
	<script src="${base}/resources/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="${base}/resources/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
	        type="text/javascript"></script>
	<script src="${base}/resources/assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
	<#--模板-->
	<script src="/resources/assets/main/js/mustache.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL SCRIPTS -->
	<script src="${base}/resources/assets/main/js/metronic.js" type="text/javascript"></script>
	<#--echarts-->
	<script src="${base}/resources/echarts/dist/echarts.js" type="text/javascript"></script>
	<#--自定义公用的js-->
	<script src="${base}/resources/assets/main/js/amm.js" type="text/javascript"></script>
	<#include "/monitorView/user/userIndex_template.ftl" />
	
	<script>
	    jQuery(document).ready(function () {
	        Metronic.init();
	        Amm.init();
	    });
	</script>
	<script src="${base}/resources/js/user/userIndex.js" type="text/javascript"></script>
	<!-- END JAVASCRIPTS -->
	
</head>

<body class="page-header-fixed page-sidebar-closed-hide-logo " style="overflow: hidden;">
	<#--标题-->
	<div class="page-head">
		<div class="page-title">
			<h1>
				用户管理
				<!-- <small>往下拉，东西很多哦~~</small> -->
			</h1>
		</div>
	</div>


	<#--结果的list-->
	<section>
		<div class="row margin-top-10">
			<div class="col-md-12">
				<div class="portlet light tasks-widget">
					<div class="portlet-title">
						<div class="tools">
							<a href="" class="collapse" data-original-title="" title=""></a> 
							<a href="javascript:void(0)" class="reload" data-original-title="" title="" onclick="initData()"> </a>
						</div>
						<span style="font-size: 13px; color: #333333"> 搜索：</span>
						<div class="inputs" style="float: none;">
							<div class="portlet-input input-inline input-small ">
								<div class="input-icon right">
									<i class="icon-magnifier"></i> <input type="text"
										class="form-control form-control-solid" id="search_user_value"
										placeholder="用户名模糊搜索">
								</div>
							</div>
						</div>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="button" class="btn btn-info" id="addUser" onclick="openAddUserModal()">新增用户</button>
					</div>
					<div class="portlet-body" id="user_main_body">
						<div class="row number-stats margin-bottom-30">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="stat-center">
									<div class="stat-number">
										<div class="number">
											<span
												style="border-left: 3px solid #F3565D; font-size: 14px; color: #333333; margin-right: 16px;">
												&nbsp;&nbsp;&nbsp;正常用户总数: </span> <span id="normalUserSumNumber"
												style="font-size: 35px; color: #333333;">0</span> <span
												class="small_span" style="font-size: 14px; color: #333333;">个</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<div class="stat-center">
									<div class="stat-number">
										<div class="number">
											<span
												style="border-left: 3px solid #9BC3EA; font-size: 14px; color: #333333; margin-right: 16px;">
												&nbsp;&nbsp;&nbsp;停用用户个数: </span> <span id="stopUserSumNumber"
												style="font-size: 35px; color: #333333;">0</span> <span
												class="small_span" style="font-size: 14px; color: #333333;">个</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="table-scrollable table-scrollable-borderless">
							<table class="table table-hover table-light">
								<thead>
									<tr class="uppercase" style="background-color: #E9ECF3;">
										<th>用户名</th>
										<th>状态</th>
										<th>创建人</th>
										<th>创建时间</th>
										<th>修改人</th>
										<th>修改时间</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody id="main_user_tbody">

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</body>
<!-- END BODY -->
</html>