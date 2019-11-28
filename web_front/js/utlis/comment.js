var comment = {
    add: function(name, content, article_id, callback) {
        $.post(ApiSur.comment_add, {
                'name': name,
                'content': content,
                'article_id': article_id,
            },
            function(res) {
                callback(res)
            }
        )
    },
    get: function(acticle_id, callback) {
        $.get(
            ApiSur.comment_get, {
                'article_id': acticle_id,
            },
            function(res) {
                callback(res)
            }
        )
    },

}