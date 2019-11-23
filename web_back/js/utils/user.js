var gitset = 'http://localhost:8000/'

var user = {
    logout: function(callback) {
        $.post(
            ApiSur.user_logout,
            function(res) {
                callback(res)
            }
        )
    },
    logInfo: function(callback) {
        $.get(ApiSur.user_logInfo,
            function(res) {
                callback(res)
            }
        )
    },
    login: function(myName, myPassword, callback) {
        $.post(ApiSur.user_login, {
                user_name: myName,
                password: myPassword
            },
            function(res) {
                callback(res)
            }
        )
    }
}