var list = {
    show: function(curpage, type, state, callback) {
        $.get(ApiSur.list_show, {
                page: curpage,
                type: type,
                state: state,
            },
            function(res) {
                callback(res)
            })
    },
    del: function(id, callback) {
        $.get(ApiSur.list_del, {
                'id': id
            },
            function(res) {
                callback(res)
            }
        )
    },
    add: function(fd, callback) {

        $.ajax({
            url: ApiSur.list_add,
            type: "post",
            data: fd,
            processData: false,
            contentType: false, //不用默认请求头
            success: function(res) {
                callback(res)
            }
        })
    }
}