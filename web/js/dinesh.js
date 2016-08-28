var dinesh = {};
dinesh.login = function(username, password, callbackfunction) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    Parse.User.logIn(username, password, {
        success: function(user) {
            // Do stuff after successful login.

            // We have received response and can hide activity indicator
            // TODO

            var username = user.get("username");
            callbackfunction(user);
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            callbackfunction(user, error);
        }
    });
}



dinesh.getAllGroom = function(callbackfunction) {
    var userDfd = $q.defer();
    var user = new Parse.User();
    var query = new Parse.Query(user);
    query.equalTo("gender", "Male");
    query.equalTo("userType", "Groom");
    query.find({
        success: function(results) {
            ArticleDfd.resolve(results);
            callbackfunction(results);
            /*alert("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                alert(object.id + ' - ' + object.get('playerName'));
            }*/
        },
        error: function(error) {
            callbackfunction(error);
            alert("Error: " + error.code + " " + error.message);
        }
    });

}