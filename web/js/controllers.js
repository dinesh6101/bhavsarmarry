angular.module('app.controllers', [])

.controller('profilesCtrl', ['$scope', '$stateParams', 'Entry', '$resource', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, Entry, $resource) {
	
		var param = {collection : "GameScore", "score" : 1338};
		var entries = Entry.query(param, function() {
		    console.log(entries);
		  }); //query() returns all the entries
	
		 
        /*var User = Restangular.all('_User');
        User.getList().then(function(userList) {
            alert('userList = ' + JSON.stringify(userList));
            $scope.users = userList;
        });*/

        $scope.showProfileDetails = function(user) {
            alert('user = ' + JSON.stringify(user));
            window.location = '#/tabs/detailprofile';
        };
    }
])

.controller('brideCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('shortlistedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('loginCtrl', ['$scope', '$stateParams', '$location', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $location, $rootScope) {
        $scope.user = { mobile: "", password: "" };
        
        $http({
	        method : 'POST',
	        url : "",
	        headers : {
		        'Content-Type' : 'application/x-www-form-urlencoded'
	        },
	        data : $.param(data),
	        withCredentials: true
	    }).then(function(response) {
		    $log.debug("Success POST API call -> " + path + " with supplied data = " + JSON.stringify(data));
		    if (successHandler && response)
			    return successHandler.call(this, response.data.data);
		    else
			    return response;
	    }, function(error) {
		    $log.error("Failed POST API call -> " + path + " with supplied data = " + JSON.stringify(data) + ", error code: " + error.data.httpStatusCode);
		    if (errorHandler)
			    return symphonyUtilService.handleRestError(error.data, error.data.httpStatusCode, errorHandler);
		    else {
			    throw {
			        success : false,
			        error : error
			    };
		    }
	    });
        
        $scope.login = function() {
            dinesh.login($scope.user.mobile, $scope.user.password, function(userDetails, error) {
                if (userDetails.id) {
                    $('#side-menu21').show();
                    $('.bar-light').show();

                    $rootScope.sessionUser = Parse.User.current();

                    window.location = '#/tabs/profiles';
                    //$location.url('/tabs/profiles'); // --> This is not working properly
                } else {
                    alert('Login was unsuccessful, please verify username and password and try again');
                }
            });
        }

    }
])

.controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('forgotPasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('viewedMyProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('shortlistedMeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('mailBoxCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('detailProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('editProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('uploadPhotosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('enableDisableProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('feedbackContactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('verifyEmailMobileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])