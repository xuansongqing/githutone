var list = {
    //5条新闻
    getFivefocus: function(callback) {
        $.get(ApiSur.list_show, {
                perpage: 5,
                state: '已发布',
            },
            function(res) {
                // console.log(res)
                // callback(res)
                callback(res)
            })
    },
    //获取文章详情
    getDetail: function(id, callback) {
        $.get(ApiSur.list_getDetail, {
                'id': id
            },
            function(res) {
                callback(res)
            }
        )
    },


}