var app = angular.module('app', ['ui.bootstrap']);

function DataCtrl($scope, $http) {

  $http.jsonp("http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK").
  success(function(data) {
    $scope.data = data;
    $scope.events = data.events;
  }).
  error(function (data) {
    $scope.data = "Request failed";
  });
}

app.controller('Ctrl2', ['$scope', function ($scope) {
  $scope.format = 'h:mm a';
}]);

app.directive("myCurrentTime", function(dateFilter){
    return function(scope, element, attrs){
        var format;

        scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
        });

        function updateTime(){
            var dt = dateFilter(new Date(), format);
            element.text(dt);
        }

        function updateLater() {
            setTimeout(function() {
              updateTime(); // update DOM
              updateLater(); // schedule another update
            }, 1000);
        }

        updateLater();
    }
});

app.controller('accordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
});

app.controller('meetingsCtrl', ['$scope', '$http', function($scope, $http){


  // set collapse options for dynamic accordian
  $scope.oneAtATime = true;
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
  $scope.status = {
    isFirstOpen: false,
    isFirstDisabled: false
  };





  // setup client object to take data
  // initializeCtrl();
  // $scope.meeting = {
  //   startTime: undefined,
  //   endTime: undefined,
  //   name: undefined,
  //   location: undefined,
  //   attendees: undefined,
  //   toggle: function(){
  //     $scope.client.showingDetails = !$scope.client.showingDetails;
  //   }
  // }
  // function meetingsLoaded (data){
  //   console.log(data);
  //   $scope.client.name = data.node_label;
  //   $scope.client.regions = data.children;
  // };

  // // hit facility tree api, grab data
  // function initializeCtrl() {
  //   $http({method: 'GET', url: 'http://fake-co-calendar.herokuapp.com/api/v1/events'})
  //     .success(meetingsLoaded)

  //     .error(function (data, status, headers, config) {
  //       console.log('error!', status)
  //       console.log(data)
  //     });
  //   };
}]);

