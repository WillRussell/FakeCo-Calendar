var app = angular.module('app', ['ui.bootstrap']);

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

}]);

