angular.module('myApp', [])
    .controller('DisplayCtrl', function ($scope) {
        $scope.$on('displayData', function (event, data) {
            $scope.content = data;
        });
    })
    .controller('MultiplicationCtrl', function ($scope, $attrs, $rootScope) {
        function populateNumbers(x) {
            var numbers = [];
            for (var i = 0; i < x; i++) {
                numbers[i] = i + 1;
            }
            ;
            return numbers;
        }

        $scope.compute = function (a, b) {
            return a * b;
        };

        $scope.$watch("numberLimit", function (limit) {
            $scope.numbers = populateNumbers(limit);
        });

        $scope.numberLimit = $attrs.initialNumberLimit || 10;

        $scope.activeFactorA = 0;
        $scope.activeFactorB = 0;
        $scope.setActiveFactors = function (a, b) {
            $scope.activeFactorA = a;
            $scope.activeFactorB = b;
        };

        $scope.matchesFactor = function (a, b) {
            return a === $scope.activeFactorA || b === $scope.activeFactorB;
        };

        $scope.setActiveNumber = function (number) {
            $rootScope.$broadcast('displayData', number);
        };

        $scope.clearActiveFactors = function () {
            activeFactorA = activeFactorB = null;
        };
    });
