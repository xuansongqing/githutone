var category = {
    //展示数据
    show: function(callback) {
        // alert('ddd')
        $.get(ApiSur.category_show,
            function(res) {
                callback(res)
            })

    },

}