var headerUrl = 'http://' + window.location.host;
//全局缓存  
var storage = window.sessionStorage;//localStorage;

// 所有的user相关map，将返回的对象存储起来
var allUserResutMap = undefined;

$(function () {
    initData();
    buttonClick();
    inputFunction();
    selectFunction();
});

//初始化数据
function initData() {

    if (allUserResutMap == undefined) {
        var loadingEL = $('#user_main_body');
        Metronic.blockUI(loadingEL);
        $.ajax({
            url: headerUrl + "/monitor/user/queryAllUser",
            //同步
            async: false,
            success: function (resultVO) {
                Metronic.unblockUI(loadingEL);
                if (resultVO.success) {
                	allUserResutMap = resultVO.data;
                } else {
                    $("#user_main_body").html("加载失败~！原因：" + resultVO.msg);
                }
            }

        });
    }
    $('#normalUserSumNumber').html(allUserResutMap.normalUserSum);
    $('#stopUserSumNumber').html(allUserResutMap.stopUserSum);

    // 拼接所有app数据
    var edit_html = '<button type="button" class="btn btn-info btn-sm" onclick="editUser(USERID)">编辑</button>';
    var delete_html = '<button type="button" class="btn btn-danger btn-sm" onclick="deleteUser(USERID)">删除</button>';
    var empty_html = '&nbsp;&nbsp;&nbsp;&nbsp;';

    var userList = allUserResutMap.userList;
    var map = {
        list: userList,
        statusFunc: function () {
            if(this.status == "00"){
            	return '停用';
            }else if(this.status == "01"){
            	return '正常';
            }else{
            	return '未知';
            }
        },
        operateFunc: function () {
        	var operate_html = '';
        	var edit_button_html = edit_html.replace('USERID', this.userId);
        	var delete_button_html = delete_html.replace('USERID', this.userId);
        	operate_html = edit_button_html + empty_html + delete_button_html;
            return operate_html;
        }
    };
    var html = Mustache.render($('#main_user_list_template').html(), map);
    $("#main_user_tbody").html(html);
    Amm.changeiframeParentHeight();
}
//打开新增用户model
function openAddUserModal(){
	$("#userAddModal").modal("show");
}
//编辑用户
function editUser(userId){
	$("#userEditModal").modal("show");
}
//删除用户
function deleteUser(userId){
	$("#userDeleteModal").modal("show");
	$("#deleteId").val(userId);
}
function buttonClick() {
    $(".reload").click(function () {
        $('#search_user_btn').trigger('click');
        return false;
    });
}

// 搜索查询
function inputFunction() {
    $('#search_user_value').keyup(function () {
        filterUserTable();
        return false;
    });
    $('#search_user_value').keyup(function () {
        var key_value = $("#search_user_value").val().trim().toUpperCase();
        var all_tr = $('#all_service_div > div > div.active>div>table>tbody>tr.service');
        if (key_value == '') {
            $(all_tr).removeClass("hidden");
        } else {
            $.each(all_tr, function (i, obj) {
                var value = $(obj).data("servicename").toUpperCase();
                if (value.indexOf(key_value) == -1) {
                    $(obj).addClass("hidden");
                } else {
                    $(obj).removeClass("hidden");
                }
            });
        }
        return false;
    });
}

// 下拉列表框
function  selectFunction() {
    $('#main_category_select').change(function () {
        var value = $('#main_category_select').val();
        var all_tr = $('#main_application_tbody > tr');
        if (value == '-1') {
            all_tr.removeClass("hidden");
            return false;
        }
        $.each(all_tr, function (i, obj) {
            var provider_value = $(obj).find(".providers").html();
            var consumer_value = $(obj).find(".consumers").html();
            if (value == 'all') {
                if (provider_value != undefined && consumer_value != undefined) {
                    $(obj).removeClass("hidden");
                } else {
                    $(obj).addClass("hidden");
                }
            }
            if (value == "providers") {
                if (provider_value != undefined && consumer_value == undefined) {
                    $(obj).removeClass("hidden");
                } else {
                    $(obj).addClass("hidden");
                }
            }
            if (value == "consumers") {
                if (consumer_value != undefined && provider_value == undefined) {
                    $(obj).removeClass("hidden");
                } else {
                    $(obj).addClass("hidden");
                }
            }
        });
    });
}



// 筛选主表格的userName
function filterUserTable() {
    var key_value = $("#search_user_value").val().trim().toUpperCase();
    var all_tr = $('#main_user_tbody > tr');
    if (key_value == '') {
        $(all_tr).removeClass("hidden");
    } else {
        $.each(all_tr, function (i, obj) {
            var value = $(obj).data("user").toUpperCase();
            if (value.indexOf(key_value) == -1) {
                $(obj).addClass("hidden");
            } else {
                $(obj).removeClass("hidden");
            }
        });
    }
    return false;
}








