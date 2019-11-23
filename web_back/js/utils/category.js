var category = {
    show: function(callback) {
        // alert('ddd')
        $.get(ApiSur.category_show,
            function(res) {
                callback(res)
            })
    },
    del: function(id, callback) {
        $.post(ApiSur.category_del, {
                'id': id
            },
            function(res) {
                callback(res)
            })
    },
    add: function(name, slug, callback) {
        $.post(ApiSur.category_add, {
                'name': name,
                'slug': slug,
            },
            function(res) {
                callback(res)
            }
        )
    },
    edit: function(id, name, slug, callback) {
        $.post(ApiSur.category_edit, {
                'id': id,
                'name': name,
                'slug': slug,
            },
            function(res) {
                callback(res)
            }
        )
    }

}