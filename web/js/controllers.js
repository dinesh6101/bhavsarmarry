angular.module('app.controllers', ['ngStorage'])

.controller('rootController', ['$rootScope', '$scope', '$stateParams', '$rest', '$localStorage', 'restService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($rootScope, $scope, $stateParams, $rest, $localStorage, restService) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            //alert(' toState ' + JSON.stringify(toState) + ' fromState = ' + JSON.stringify(fromState));
            if (toState.url == "/login") {
                //alert('Show menu');
                $('#side-menu21').hide();
                //$('.bar-light').hide();
            } else if ($localStorage.user == "") {
                //window.location = "#/login";
            }

        });

        $rootScope.master = {};
        $rest.get('matrimony/bloodgroup/view', function(response) {
            $rootScope.master.bloodgroup = response;
        });

        $rest.get('matrimony/weight/view', function(response) {
            $rootScope.master.weight = response;
        });

        $rest.get('matrimony/height/view', function(response) {
            $rootScope.master.height = response;
        });

        $rest.get('matrimony/bloodgroup/view', function(response) {
            $rootScope.master.bloodgroup = response;
        });

        $rest.get('matrimony/maritalStatus/view', function(response) {
            $rootScope.master.maritalStatus = response;
        });

        $rest.get('matrimony/motherTongue/view', function(response) {
            $rootScope.master.motherTongue = response;
        });

        $rest.get('matrimony/eatingHabit/view', function(response) {
            $rootScope.master.eatingHabit = response;
        });

        $rest.get('matrimony/habits/view', function(response) {
            $rootScope.master.habits = response;
        });

        $rest.get('matrimony/nakshtra/view', function(response) {
            $rootScope.master.nakshtra = response;
        });

        $rest.get('matrimony/rashi/view', function(response) {
            $rootScope.master.rashi = response;
        });

        $rest.get('matrimony/nadi/view', function(response) {
            $rootScope.master.nadi = response;
        });

        $rest.get('matrimony/education/view', function(response) {
            $rootScope.master.education = response;
        });

        $rest.get('matrimony/employedIn/view', function(response) {
            $rootScope.master.employedIn = response;
        });

        $rest.get('matrimony/locations/view', function(response) {
            $rootScope.master.locations = response;
        });

        $rest.get('matrimony/occupation/view', function(response) {
            $rootScope.master.occupation = response;
        });

        $rest.get('matrimony/income/view', function(response) {
            $rootScope.master.income = response;
        });

        $rest.get('matrimony/familyType/view', function(response) {
            $rootScope.master.familyType = response;
        });

        $rest.get('matrimony/familyStatus/view', function(response) {
            $rootScope.master.familyStatus = response;
        });

        $rest.get('matrimony/numbers/view', function(response) {
            $rootScope.master.numbers = response;
        });

        $rest.get('matrimony/religion/view', function(response) {
            $rootScope.master.religion = response;
        });

        $scope.shortListProfile = function(user) {
            var logedInUser = JSON.parse($localStorage.user);
            var shortlistedUser = user;

            var currentId = logedInUser._id;
            var showrListedId = user._id;

            if (logedInUser.shortlisted == undefined)
                logedInUser.shortlisted = new Array();

            if ($scope.isAlreadyShortlisted(logedInUser.shortlisted, showrListedId)) {
                logedInUser.shortlisted.splice(showrListedId, 1);
            } else {
                logedInUser.shortlisted.push(showrListedId);
            }
            restService.updateUser(logedInUser);
        }

        $scope.classForShortlisted = function(user) {
        	var logedInUser = JSON.parse($localStorage.user);
            if ($scope.isAlreadyShortlisted(logedInUser.shortlisted, user._id))
                return true;
            else
                return false;
        }

        $scope.isAlreadyShortlisted = function(array, value) {
            return (array.indexOf(value) > -1);
        }

        $scope.showProfileDetails = function(user, decision) {
            if (decision == 'groom') {
                window.location = '#/tabs/tab1/detailprofile?id=' + user._id;
            } else if (decision == 'bride') {
                window.location = '#/tabs/tab2/detailprofile?id=' + user._id;
            }
        };
    }
])

.controller('profilesCtrl', ['$scope', '$stateParams', '$resource', '$rest', '$msg', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $resource, $rest, $msg) {
        $scope.init = function() {

            var condition = {
                "condition": [{
                        "isOr": false,
                        "searchpath": "gender",
                        "values": [
                            'Male'
                        ]
                    }

                ],
                "sortAscending": true,
                "sortOn": "firstName"
            };

            $rest.post('matrimony/user/search', condition).then(function(response) {
                $scope.userList = response.data;
            });
        }


    }
])

.controller('brideCtrl', ['$scope', '$stateParams', '$resource', '$rest', '$msg', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $resource, $rest, $msg) {
        $scope.init = function() {
            var condition = {
                "condition": [{
                    "isOr": false,
                    "searchpath": "gender",
                    "values": [
                        'Female'
                    ]
                }],
                "sortAscending": true,
                "sortOn": "firstName"
            };
            $rest.post('matrimony/user/search', condition).then(function(response) {
                $scope.userList = response.data;
            });
        }

    }
])

.controller('shortlistedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $localStorage) {



    }
])

.controller('loginCtrl', ['$rootScope', '$scope', '$stateParams', '$rest', '$msg', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($rootScope, $scope, $stateParams, $rest, $msg, $localStorage) {
        $localStorage.user = "";
        $scope.user = { mobileNo: "", password: "" };

        $scope.login = function() {
            var condition = {
                "condition": [{
                    "isOr": false,
                    "searchpath": "mobileNo",
                    "values": [
                        $scope.user.mobileNo
                    ]
                }, {
                    "isOr": false,
                    "searchpath": "password",
                    "values": [
                        $scope.user.password
                    ]
                }],
                "sortAscending": true,
                "sortOn": "primaryPhoneNo"
            };

            $rest.post('matrimony/user/search', condition).then(function(response) {
                $msg.info("Success", "You have logged in");
                var user = response.data[0];
                $localStorage.user = angular.toJson(user);
                if (user._id) {
                    $('#side-menu21').show();
                    if (user.gender != 'Male') {
                        window.location = '#/tabs/profiles';
                    } else {
                        window.location = '#/tabs/bride';
                    }
                    //$location.url('/tabs/profiles'); // --> This is not working properly
                } else {
                    alert('Login was unsuccessful, please verify username and password and try again');
                }

            });
        }
    }
])

.controller('registerCtrl', ['$scope', '$stateParams', '$rest', '$msg', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $rest, $msg, $localStorage) {
        $scope.user = { updateOn: "" };
        $scope.register = function() {
            $rest.post('matrimony/user', $scope.user).then(function(response) {
                $msg.info("Success", "You need to verify registration by entering code sent to you on mobile & email");
                window.location = '#/login';
            });
        }
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

.controller('detailProfileCtrl', ['$scope', '$stateParams', '$rootScope', '$rest', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $rootScope, $rest, $localStorage) {

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        $scope.init = function() {
            var myParam = getParameterByName('id', window.location); //location.search.split('id=')[1];
            var url = 'matrimony/user/' + myParam;
            $rest.get(url, function(response) {
                $scope.user = response;
            });

        }
    }
])

.controller('editProfileCtrl', ['$rootScope', '$scope', '$stateParams', '$rest', '$msg', '$localStorage', 'restService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($rootScope, $scope, $stateParams, $rest, $msg, $localStorage, restService) {
        $scope.userEdit = { updateOn: "" };

        $scope.init = function() {
            var url = 'matrimony/user/' + $localStorage.user._id;
            $rest.get(url, function(response) {
                $scope.userEdit = response;
            });
        }

        $scope.GetSelectedReligion = function(selectedreligion) {
            $scope.userEdit.religion = selectedreligion.name;
        };

        $scope.GetSelectedCast = function(selectedCast) {
            $scope.userEdit.cast = selectedCast.name;
        };

        $scope.updateUser = function() {
            restService.updateUser($scope.userEdit);
        }

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