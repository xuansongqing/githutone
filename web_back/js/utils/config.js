var gitset = 'http://localhost:8000/'
var ApiSur = {
    user_logout: gitset + 'admin/logout',
    user_logInfo: gitset + 'admin/getuser',
    user_login: gitset + 'admin/login',

    category_show: gitset + 'admin/category_search',
    category_del: gitset + 'admin/category_delete',
    category_add: gitset + 'admin/category_add',
    category_edit: gitset + 'admin/category_edit',

    list_show: gitset + 'admin/search',
    list_del: gitset + 'admin/article_delete',
    list_add: gitset + 'admin/article_publish',
    list_getDetail: gitset + 'admin/search',
    list_edit: gitset + 'admin/article_edit',
}