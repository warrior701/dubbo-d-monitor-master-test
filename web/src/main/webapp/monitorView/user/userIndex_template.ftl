<#--user 主列表模板-->
<script type="text/template" id="main_user_list_template">
    {{#list}}
    <tr class="" data-username="{{userName}}">
        <td>
            <span class="primary-link">{{userName}}</span>
        </td>
        <td>
            {{{status}}}
        </td>
        <td>
            {{createBy}}
        </td>
        <td>
            {{createDate}}
        </td>
        <td>
            {{{updateBy}}}
        </td>
        <td>
            {{{updateDate}}}
        </td>
        <td>
         
        </td>

    </tr>
    {{/list}}
</script>

