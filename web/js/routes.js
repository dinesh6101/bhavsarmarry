angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabMenu.profiles', {
    url: '/profiles',
    views: {
      'tab1': {
        templateUrl: 'templates/profiles.html',
        controller: 'profilesCtrl'
      }
    }
  })

  .state('tabMenu.bride', {
    url: '/bride',
    views: {
      'tab2': {
        templateUrl: 'templates/bride.html',
        controller: 'brideCtrl'
      }
    }
  })

  .state('tabMenu.shortlisted', {
    url: '/shortlisted',
    views: {
      'tab3': {
        templateUrl: 'templates/shortlisted.html',
        controller: 'shortlistedCtrl'
      }
    }
  })

  .state('tabMenu', {
    url: '/tabs',
    templateUrl: 'templates/tabMenu.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('forgotPassword', {
    url: '/forgotpassword',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })

  .state('tabMenu.viewedMyProfile', {
    url: '/viewedmyprofile',
    views: {
      'tab4': {
        templateUrl: 'templates/viewedMyProfile.html',
        controller: 'viewedMyProfileCtrl'
      }
    }
  })

  .state('tabMenu.shortlistedMe', {
    url: '/shortlistedme',
    views: {
      'tab5': {
        templateUrl: 'templates/shortlistedMe.html',
        controller: 'shortlistedMeCtrl'
      }
    }
  })

  .state('mailBox', {
    url: '/emails',
    templateUrl: 'templates/mailBox.html',
    controller: 'mailBoxCtrl'
  })

  .state('tabMenu.detailProfile', {
    url: '/detailprofile',
    views: {
      'tab1': {
        templateUrl: 'templates/detailProfile.html',
        controller: 'detailProfileCtrl'
      }
    }
  })

  .state('editProfile', {
    url: '/editprofile',
    templateUrl: 'templates/editProfile.html',
    controller: 'editProfileCtrl'
  })

  .state('uploadPhotos', {
    url: '/uploadphotos',
    templateUrl: 'templates/uploadPhotos.html',
    controller: 'uploadPhotosCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('enableDisableProfile', {
    url: '/activedeactiveprofile',
    templateUrl: 'templates/enableDisableProfile.html',
    controller: 'enableDisableProfileCtrl'
  })

  .state('feedbackContact', {
    url: '/feedbackcontact',
    templateUrl: 'templates/feedbackContact.html',
    controller: 'feedbackContactCtrl'
  })

  .state('verifyEmailMobile', {
    url: '/verifymobile',
    templateUrl: 'templates/verifyEmailMobile.html',
    controller: 'verifyEmailMobileCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});