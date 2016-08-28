var appServices = angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('BlankService', [function() {

}]);


appServices.factory('Entry', function($resource) {
	return $resource('http://localhost/mongo/rest/dbs/test/:collection/:id', 
			{collection : "@collection", id: "@id"}, {
	  'get':    {method:'GET', isArray:true},
	  'save':   {method:'POST'},
	  'update': {method:'PUT' },
	  'query':  {method:'GET', isArray:true},
	  'remove': {method:'DELETE'},
	  'delete': {method:'DELETE'} 
	}, 
    {
        stripTrailingSlashes: false
    });
});

/*appServices.
factory('User', function($q) {

    var User = Parse.Object.extend("User", {
        // Instance methods
    }, {
        // Class methods
        getAllGroom: function(aUser) {
            var defer = $q.defer();
            var query = new Parse.Query(this);
            query.equalTo("gender", "Male");
            query.equalTo("userType", "Groom");
            query.find({
                success: function(aResult) {
                    defer.resolve(aResult);
                },
                error: function(aError) {
                    defer.reject(aError);
                }
            });

            return defer.promise;
        }
    });

    // Properties
    User.prototype.__defineGetter__("firstName", function() {
        return this.get("firstName");
    });
    User.prototype.__defineSetter__("firstName", function(aValue) {
        return this.set("firstName", aValue);
    });
    User.prototype.__defineGetter__("lastName", function() {
        return this.get("lastName");
    });
    User.prototype.__defineSetter__("lastName", function(aValue) {
        return this.set("lastName", aValue);
    });
    return User;
});*/