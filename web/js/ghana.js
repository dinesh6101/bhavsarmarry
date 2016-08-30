/**
 * 
 */
"use strict";

var servicePath = "http://localhost/mongo/rest/api/v1/dbs/"

var $ghana = angular.module('$ghana', ['ionic']);

$ghana.factory('$rest', function($http, $log) {
	var $rest = {
	    get : function(path, successHandler, errorHandler) {
		    path = servicePath + path;
		    return $http({
		        method : 'GET',
		        url : path
		    }).then(function(response) {
			    $log.debug("Success GET API call -> " + path);
			    if (successHandler && response)
				    return successHandler.call(this, response.data);
			    else
				    return response;
		    }, function(error) {
			    $log.error("Failed GET API call -> " + path + ", error code: " + JSON.stringify(error));
			    throw {
			        success : false,
			        error : error
			    };
		    });
	    },
	     
	    post : function(path, data, successHandler, errorHandler) {
		    path = servicePath + path;
		    return $http({
		        method : 'POST',
		        url : path,
		        headers : {
			        'Content-Type' : 'application/json'
		        },
		        data : data//encodeURIComponent(JSON.stringify(data))
		    }).then(function(response) {
			    $log.debug("Success POST API call -> " + path + " with supplied data = " + JSON.stringify(data));
			    if (successHandler && response)
				    return successHandler.call(this, response.data);
			    else
				    return response;
		    }, function(error) {
		    	$log.error("Failed GET API call -> " + path + ", error code: " + JSON.stringify(error));
			    throw {
			        success : false,
			        error : error
			    };
		    });
	    },
	    
	    put : function(path, data, successHandler, errorHandler) {
		    if (data == undefined) {
			    data = {};
		    }
		    path = servicePath + path;
		    return $http({
		        method : 'PUT',
		        url : path,
		        data : data//encodeURIComponent(JSON.stringify(data))
		    }).then(function(response) {
			    $log.debug("Success PUT API call -> " + path + " with supplied data = " + JSON.stringify(data));
			    if (successHandler && response)
				    return successHandler.call(this, response.data.data);
			    else
				    return response;
		    }, function(error) {
		    	$log.error("Failed GET API call -> " + path + ", error code: " + JSON.stringify(error));
			    throw {
			        success : false,
			        error : error
			    };
		    });
	    },
	    
	    del : function(path, successHandler, errorHandler) {
		    path = servicePath + path;
		    return $http({
		        method : 'DELETE',
		        url : path
		    }).then(function(response) {
			    $log.debug("Success GET API call -> " + path);
			    if (successHandler && response)
				    return successHandler.call(this, response.data.data);
			    else
				    return response;
		    }, function(error) {
		    	$log.error("Failed GET API call -> " + path + ", error code: " + JSON.stringify(error));
			    throw {
			        success : false,
			        error : error
			    };
		    });
	    }
	};
	return $rest;
});


$ghana.factory('$msg', function($ionicPopup){
	var $msg = {
		info : function(title, msg){
				var alertPopup = $ionicPopup.alert({
			     title: title,
			     template: msg
			   });

			   alertPopup.then(function(res) {
			     console.log('Thank you for not eating my delicious ice cream cone');
			   });
			   
			  // An elaborate, custom popup
			  /*var myPopup = $ionicPopup.show({
			    template: '<input type="password" ng-model="data.wifi">',
			    title: 'Enter Wi-Fi Password',
			    subTitle: 'Please use normal things',
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) { }
			      }
			    ]
			  });*/
			  
			//toastr.info('Are you the 6 fingered man?');
		},
		error : function(msg){
			alert("Failed");
		}
	};
	return $msg;
});

