var headerUrl = 'http://' + window.location.host;
//全局缓存  
var storage = window.sessionStorage;//localStorage;

// 所有的user相关map，将返回的对象存储起来
var allUserResutMap = undefined;

$(function () {
    initData();
    buttonClick();
    othersClick();
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
    var noHtml = '<span class="badge badge-danger">无</span>';
    var numberHtml = '<span class="badge badge-success">NUMBER</span>';
    var providers_category_html = '<span class="badge badge-danger providers">提供者</span>';
    var consumers_category_html = '<span class="badge badge-success consumers">消费者</span>';

    var userList = allUserResutMap.userList;
    var map = {
        list: userList,
        categoryFunc: function () {
            var categoty_html = '';
            var isProvider = this.isProvider;
            var isConsumer = this.isConsumer;
            if (isProvider) categoty_html += providers_category_html;
            if (isConsumer) categoty_html += consumers_category_html;
            return categoty_html;
        },
        serviceSumFunc: function () {
            var sum = Number(this.serviceSum);
            if (sum == 0) return noHtml;
            return numberHtml.replace('NUMBER', sum);
        },
        providerSumFunc: function () {
            var sum = Number(this.providerSum);
            if (sum == 0) return noHtml;
            return numberHtml.replace('NUMBER', sum);
        },
        consumerSumFunc: function () {
            var sum = Number(this.consumerSum);
            if (sum == 0) return noHtml;
            return numberHtml.replace('NUMBER', sum);
        }
    };
    var html = Mustache.render($('#main_user_list_template').html(), map);
    $("#main_user_tbody").html(html);
    Amm.changeiframeParentHeight();

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


function rankingFunctionHelp(resultList){
    var firstIndexHtml = '<div class="label label-best label-danger"> <i class="fa fa-trophy"></i>&nbsp;INDEX</div>';
    var otherIndexHtml = '<span class="primary-link">INDEX </span>';

    var indexs = 0;
    var map = {
        list:resultList,
        indexFunc: function () {
            var html = "";
            indexs += 1;
            if(indexs < 4){
                html = firstIndexHtml.replace("INDEX",indexs);
            }else{
                html = otherIndexHtml.replace("INDEX",indexs);
            }
            return html;
        }
    };
    var rank_html = Mustache.render($('#method_rank_template').html(), map);
    $("#ranking_body").html(rank_html);

}






