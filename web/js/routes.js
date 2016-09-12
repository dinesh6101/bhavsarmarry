angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('tabMenu.profiles', {
        url: '/profiles',
        cache : false,
        views: {
            'tab1': {
                templateUrl: 'templates/profiles.html',
                controller: 'profilesCtrl'
            }
        }
    })

    .state('tabMenu.bride', {
        url: '/bride',
        cache : false,
        views: {
            'tab2': {
                templateUrl: 'templates/bride.html',
                controller: 'brideCtrl'
            }
        }
    })

    .state('tabMenu.shortlisted', {
        url: '/shortlisted',
        cache : false,
        views: {
            'tab3': {
                templateUrl: 'templates/shortlisted.html',
                controller: 'shortlistedCtrl'
            }
        }
    })

    .state('tabMenu', {
        url: '/tabs',
        cache : false,
        templateUrl: 'templates/tabMenu.html',
        abstract: true
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

    .state('register', {
        url: '/register',
        cache : false,
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
    })

    .state('forgotPassword', {
        url: '/forgotpassword',
        cache : false,
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
    })

    .state('tabMenu.viewedMyProfile', {
        url: '/viewedmyprofile',
        cache : false,
        views: {
            'tab4': {
                templateUrl: 'templates/viewedMyProfile.html',
                controller: 'viewedMyProfileCtrl'
            }
        }
    })

    .state('tabMenu.shortlistedMe', {
        url: '/shortlistedme',
        cache : false,
        views: {
            'tab5': {
                templateUrl: 'templates/shortlistedMe.html',
                controller: 'shortlistedMeCtrl'
            }
        }
    })

    .state('mailBox', {
        url: '/emails',
        cache : false,
        templateUrl: 'templates/mailBox.html',
        controller: 'mailBoxCtrl'
    })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabMenu.detailProfile'
      2) Using $state.go programatically:
        $state.go('tabMenu.detailProfile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/detailprofile
      /tabs/tab2/detailprofile
  */
    .state('tabMenu.detailProfile', {
        url: '/detailprofile',
        cache : false,
        views: {
            'tab1': {
                templateUrl: 'templates/detailProfile.html',
                controller: 'detailProfileCtrl'
            },
            'tab2': {
                templateUrl: 'templates/detailProfile.html',
                controller: 'detailProfileCtrl'
            }
        }
    })

    .state('editProfile', {
        url: '/editprofile',
        cache : false,
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
    })

    .state('uploadPhotos', {
        url: '/uploadphotos',
        cache : false,
        templateUrl: 'templates/uploadPhotos.html',
        controller: 'uploadPhotosCtrl'
    })

    .state('settings', {
        url: '/settings',
        cache : false,
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
    })

    .state('enableDisableProfile', {
        url: '/activedeactiveprofile',
        cache : false,
        templateUrl: 'templates/enableDisableProfile.html',
        controller: 'enableDisableProfileCtrl'
    })

    .state('feedbackContact', {
        url: '/feedbackcontact',
        cache : false,
        templateUrl: 'templates/feedbackContact.html',
        controller: 'feedbackContactCtrl'
    })

    .state('verifyEmailMobile', {
        url: '/verifymobile',
        cache : false,
        templateUrl: 'templates/verifyEmailMobile.html',
        controller: 'verifyEmailMobileCtrl'
    })

    $urlRouterProvider.otherwise('/login')



});