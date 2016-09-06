angular.module('app.controllers', [])

.controller('profilesCtrl', ['$scope', '$stateParams', '$resource', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $resource) {

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

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {
        $scope.user = { mobile: "", password: "" };
        
        $scope.login = function() {
            if (true || userDetails.id) {
                $('#side-menu21').show();
                $('.bar-light').show();
                window.location = '#/tabs/profiles';
                //$location.url('/tabs/profiles'); // --> This is not working properly
            } else {
                alert('Login was unsuccessful, please verify username and password and try again');
            }
        }
    }
])

.controller('registerCtrl', ['$scope', '$stateParams', '$rest', '$msg',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $rest, $msg) {
        $scope.user = {
            firstName:"",
            lastName:"",
            mobileNo:"",
            email:"",
            gender:"",
            password:"",
            registerAs:""
            
        };
        

        $scope.register = function(){
        	$rest.post('matrimony/user', $scope.user).then(function(response){
        		$msg.info("Success", "You need to verify registration by entering code sent to you on mobile & email");
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

.controller('detailProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('editProfileCtrl', ['$scope', '$stateParams','$rest', '$msg', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $rest, $msg) {

        $scope.options={

           heightOption:[
        {id: '1', name: 'Less than 4 feet'},
        {id: '2', name: 'Between 4 to 5 feet'},
        {id: '3', name: 'Beetween 5 to 6 feet'},
        {id: '4', name: 'Above 6 feet..'}
            ],
             weightOption:[
        {id: '1', name: 'Less than 50 kg'},
        {id: '2', name: 'Between 50 to 55 kg'},
        {id: '3', name: 'Between 55 to 60 kg'},
        {id: '4', name: 'Between 60 to 65 kg'},        
        {id: '5', name: 'Between 65 to 70 kg'},
        {id: '6', name: 'Between 70 to 75 kg'},
        {id: '7', name: 'Between 75 to 80 kg'},
        {id: '8', name: 'Between 80 to 85 kg'},
        {id: '9', name: 'Between 85 to 90 kg'},
        {id: '10', name: 'Above 90 kg..'}
           ],
           bloodGroupOption:[
        {id: '1', name: 'A+'},
        {id: '2', name: 'A-'},
        {id: '3', name: 'B+'},
        {id: '4', name: 'B-'},
        {id: '5', name: 'O+'},
        {id: '6', name: 'O-'},
        {id: '7', name: 'AB+'},
        {id: '8', name: 'AB-'},
           ],
            maritalStatusOption:[
        {id: '1', name: 'Single'},
        {id: '2', name: 'Married'},
        {id: '3', name: 'Divorced'}
           ],
            motherTongueOption:[
         {id: '1', name: 'Marathi'}, 
         {id: '7', name: 'Kokani'},
         {id: '2', name: 'Hindi'},
         {id: '3', name: 'Gujrathi'},
         {id: '4', name: 'Telugu'},
         {id: '5', name: 'Kannad'},
         {id: '6', name: 'Punjabi'},
         {id: '8', name: 'Bengali'}, 
         {id: '9', name: 'English'},
         {id: '10', name: 'Other than these...'}    
           ],
           eatingHabitOption:[
         {id: '1', name: 'vegetarian'},  
         {id: '2', name: 'Non-vegetarian'},  
         {id: '3', name: 'Mixed'}  
          ],
           drinkingHabitOption:[
           {id: '1', name: 'Never'}, 
           {id: '2', name: 'Occasionally'} 
          ],
          smokingHabitOption:[
          {id: '1', name: 'Never'}, 
          {id: '2', name: 'Occasionally'}   
          ],
          religionOption:[
           {id: '1', name: 'Hindu', castOption:[
                       {id: '1', name:'Maratha'},
                       {id: '2', name:'Vanjari'},
                       {id: '3', name:'Bhavsar'},
                       {id: '4', name:'Mali'},
                       {id: '5', name:'Chambhar'},
                       {id: '6', name:'Navhi'},
                       {id: '7', name:'Gosavi'},
                       {id: '8', name:'Lohar'},
                       {id: '9', name:'Teli'},
                       {id: '10', name:'Dhangar'},
                       {id: '11', name:'Dhangar'},
                        ] }, 
           {id: '2', name: 'Christian'},  
           {id: '3', name: 'Jain'},
           {id: '4', name: 'Buddhist'}, 
           {id: '5', name: 'Islam'}, 
           {id: '6', name: 'Sikh',castOption:[
                       {id:'1' , name:'Arora'},
                       {id:'2' , name:'Khatri'},
                       {id:'3' , name:'Ramgarhia'},
                       {id:'4' , name:'Jat'},
                       {id:'5' , name:'Saini'},
                       {id:'6' , name:'Kamboh'},
                       {id:'7' , name:'Mahton'},
                       {id:'8' , name:'Chhimba'},
                       {id:'9' , name:'Mohyal'},
                       {id:'10' , name:'Chamar'}
                        ] },
           {id: '7' , name:'Zoroastrian'} ,
           {id: '8' , name:'Other...'} 
          ],
          nakshtraOption:[
           {id: '1', name: 'Aśvini (अश्विनि)'},
           {id: '2', name: 'Bharaṇī (भरणी)'},
           {id: '3', name: 'Kṛttikā (कृत्तिका)'},
           {id: '4', name: 'Rohiṇī (रोहिणी)'},
           {id: '5', name: 'Mṛgaśīrṣā(म्रृगशीर्षा)'},
           {id: '6', name: 'Ārdrā (आर्द्रा)'},
           {id: '7', name: 'Punarvasu (पुनर्वसु)'},
           {id: '8', name: 'Puṣya (पुष्य)'},
           {id: '9', name: 'Āśleṣā (आश्लेषा)'},
           {id: '10', name: 'Maghā (मघा)'},
           {id: '11', name: 'Pūrva or Pūrva Phālgunī (पूर्व फाल्गुनी)'},
           {id: '12', name: 'Uttara or Uttara Phālgunī (उत्तर फाल्गुनी)'},
           {id: '13', name: 'Hasta (हस्त)'},
           {id: '14', name: 'Chitrā (चित्रा)'},
           {id: '15', name: 'Svāti (स्वाति)'},
           {id: '16', name: 'Viśākhā (विशाखा)'},
           {id: '17', name: 'Anurādhā (अनुराधा)'},
           {id: '18', name: 'Jyeṣṭhā (ज्येष्ठा)'},
           {id: '19', name: 'Mūla (मूल)'},
           {id: '20', name: 'Pūrva Aṣāḍhā (पूर्वाषाढ़ा)'},
           {id: '21', name: 'Uttara Aṣāḍhā (उत्तराषाढ़ा)'},
           {id: '22', name: 'Śrāvaṇa (श्रावण)'},
           {id: '23', name: 'Śrāviṣṭhā (श्रविष्ठा) / Dhaniṣṭhā (धनिष्ठा)'},
           {id: '24', name: 'Śatabhiṣā (शतभिषा) / Śatataraka'},
           {id: '25', name: 'Pūrva Bhādrapadā (पूर्वभाद्रपदा)'},
           {id: '26', name: 'Uttara Bhādrapadā (उत्तरभाद्रपदा)'},
           {id: '27', name: 'Revati (रेवती)'}    
             ],
          rashiOption:[
                 {id: '1', name: 'Aries (मेष)'},
                 {id: '2', name: 'Taurus (वृषभ)'},
                 {id: '3', name: 'Gemini (मिथुन)'},
                 {id: '4', name: 'Cancer (कर्क)'},
                 {id: '5', name: 'Leo (सिंह)'},
                 {id: '6', name: 'Virgo (कन्या)'},
                 {id: '7', name: 'Libra (तुला)'},
                 {id: '8', name: 'Scorpio (वृश्चिक)'},
                 {id: '9', name: 'Sagittarius (धनुष)'},
                 {id: '10', name: 'Capricorn (मकर)'},
                 {id: '11', name: 'Aquarius (कुंभ)'},
                 {id: '12', name: 'Pisces (मीन)'},
             ],
             nadiOption:[
                 {id:'1', name:'ADI / Adhya / Aadh Nadi'},
                 {id:'2', name:'Madhya Nadi'},
                 {id:'3', name:'Antya Nadi'}
             ],
             higherEduOption:[
                 {id:'1' , name:'Aeronautical Engineering'},
                 {id:'2' , name:'B. Arch'},
                 {id:'3' , name:'BCA'},
                 {id:'4' , name:'BE'},
                 {id:'5' , name:'B. Pharm'},
                 {id:'6' , name:'B. Sc. IT/Computer Science'},
                 {id:'7' , name:'B. Tech'},
                 {id:'8' , name:'M. Arch'},
                 {id:'9' , name:'MCA'},
                 {id:'10' , name:'ME'},
                 {id:'11' , name:'M. Sc. IT/Computer Science'},
                 {id:'12' , name:'M. S.'},
                 {id:'13' , name:'M. Tech'},
                 {id:'14' , name:'MBBS'},
                 {id:'15' , name:'MD'},
                 {id:'16' , name:'BHMS'},
                 {id:'17' , name:'BAMS'},
                 {id:'18' , name:'Other...'}
             ],
             employedInOption:[
                 {id:'1' , name:'Government'},
                 {id:'2' , name:'Private'},
                 {id:'3' , name:'Business'},
                 {id:'4' , name:'Self Employed'},
                 {id:'5' , name:'Defence'},
                 {id:'6' , name:'Other...'}
              ],
               workLocationOption:[
                 {id:'1' , name:'Pune'},
                 {id:'2' , name:'Mumbai'},
                 {id:'3' , name:'Nashik'},
                 {id:'4' , name:'Thane'},
                 {id:'5' , name:'Hydrabad'},
                 {id:'6' , name:'Chennai'},
                 {id:'7' , name:'Kolkata'},
                 {id:'8' , name:'Other...'}
               ],
                occupationOption:[
                 {id:'1' , name:'Manager'},
                 {id:'2' , name:'Supervisor'},
                 {id:'3' , name:'Officer'},
                 {id:'4' , name:'Administrative Professional'},
                 {id:'5' , name:'Executive'},
                 {id:'6' , name:'Cleark'},
                 {id:'7' , name:'HR Prefessional'},
                 {id:'8' , name:'Archi. &amp; Farming Professional'},
                 {id:'9' , name:'Pilot'},
                 {id:'10' , name:'Air Hostess'},
                 {id:'11' , name:'Airline Professional'},
                 {id:'12' , name:'Architect'},
                 {id:'13' , name:'Software Engineeer'},
                 {id:'14' , name:'Chemical Engineeer'},
                 {id:'15' , name:'Doctor'},
                 {id:'16' , name:'Nurse'},
                 {id:'17' , name:'Farmer'},
                 {id:'18' , name:'Teacher'},
                 {id:'19' , name:'Professor'},
                 {id:'20' , name:'Other...'},
                ],
                incomeOption:[
                      {id:'1' , name:'Below 1k...'},
                      {id:'2' , name:'Between 1k to 2k'},
                      {id:'3' , name:'Between 3k to 4k'},
                      {id:'4' , name:'Between 5k to 6k'},
                      {id:'5' , name:'Between 7k to 8k'},
                      {id:'6' , name:'Between 9k to 10k'},
                      {id:'7' , name:'Between 11k to 12k'},
                      {id:'8' , name:'Between 13k to 14k'},
                      {id:'9' , name:'Between 15k to 16k'},
                      {id:'10' , name:'Between 17k to 18k'},
                      {id:'11' , name:'Above 19k....'}
                ],
                 familyTypeOption:[
                    {id:'1' , name:'Joint Family'},
                    {id:'1' , name:'Nuclear Family'}
                    
                ],
                familyStatusOption:[
                    {id:'1' , name:'Middle Class'},
                    {id:'2' , name:'Upper Middle Class'},
                    {id:'3' , name:'High Class'},
                    {id:'4' , name:'Rich'}
                    
                ],
                numbers:[
                      {id:'1' , name:'None'},
                      {id:'2' , name:'One'},
                      {id:'3' , name:'Two'},
                      {id:'4' , name:'Three'},
                      {id:'5' , name:'Four'},
                      {id:'6' , name:'More than four...'}
                  ]
     
        };

          
       $scope.userEdit={
             primaryPhoneNo:"",
             secondaryPhoneNo:"",
             primaryEmail:"",
             secondaryEmail:"",
             aboutMyself:"",
             expectations:"",
             dateOfBirth:"",
             timeOfBirth:"",
             placeOfBirth:"",
             height:"",
             weight:"",
             bloodGroup:"",
             maritalStatus:"",
             motherTongue:"",
             eatingHabit:"",
             drinkingHabit:"",
             smokingHabit:"",
             religion:"",
             cast:"",
             castNoBar:"",
             nakshtra:"",
             rashi:"",
             nadi:"",
             higherEdu:"",
             collage:"",
             employedIn:"",
             workLocation:"",
             occupation:"",
             occupationDetail:"",
             income:"",
             incomeAmmount:"",
             familyType:"",
             familyStatus:"",
             fatherOccupation:"",
             motherOccupation:"",
             noOfBrother:"",
             noOfBrotherMarried:"",
             noOfSister:"",
             noOfSisterMarried:"",
             aboutMyFamily:"" 
         };

          $scope.GetSelectedReligion = function (selectedreligion) {
                $scope.userEdit.religion = selectedreligion.name;
            };
            
            $scope.GetSelectedCast = function (selectedCast) {
                $scope.userEdit.cast = selectedCast.name;
           };

         $scope.fun = function(a){
               alert(a);
         };

         $scope.updateUser = function(){
        	$rest.post('matrimony/user?id', $scope.userEdit).then(function(response){
        		$msg.info("Success", "You need to verify registration by entering code sent to you on mobile & email");
        	});
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