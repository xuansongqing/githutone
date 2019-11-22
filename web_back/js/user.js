var gitset = 'http://localhost:8000/'

var user = {
    logout: function(callback) {
        $.post(
            gitset + 'admin/logout',
            function(res) {
                callback(res)
            }
        )
    },
    logInfo: function(callback) {
        $.get(gitset + 'admin/getuser',
            function(res) {
                callback(res)
            }
        )
    },
    login: function(myName, myPassword, callback) {
        $.post(
            gitset + 'admin/login', {
                user_name: myName,
                password: myPassword
            },
            function(res) {
                callback(res)
            }
        )
    }
}