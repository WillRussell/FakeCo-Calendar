var app = angular.module('app', ['ui.bootstrap']);

// hit remote server for meeting data
function eventsCtrl($scope, $http) {
var url = "http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK";
$http.jsonp(url)
  .success(function(data){
      $scope.meetings = data.events.list
  });
};

//navbar clock control
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



