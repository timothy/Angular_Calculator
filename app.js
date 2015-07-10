/**
 * Created by tabradford on 7/9/2015.
 */
angular.module("calc", []);

angular.module("calc").controller("calcController",
    [
        "$scope",
        function ($scope) {
            //$scope.calculator = calculator;

            var swtc = 0;
            var num = 0;
            var Total = 0;
            $scope.result = Total;
            $scope.calcNumber = "";
            $scope.equalsV = "=";

            $scope.numberPress = function(theNumber) {
                num *= 10;
                num += theNumber;
                $scope.calcNumber += theNumber.toString();
            };

            $scope.operationPress = function(theOperation, new_swtc) {
                if(Total == 0){
                    Total = num;
                }
                else{
                    switch (swtc) {
                        case 1:
                            Total *= num;// multiply
                            break;
                        case 2:
                            Total /= num;// divide
                            break;
                        case 3:
                            Total -= num;// minues
                            break;
                        case 4:
                            Total += num;// plus
                            break;

                        default:
                            break;
                    }
                }
                $scope.calcNumber += theOperation;
                if(theOperation == "="){
                    $scope.calcNumber += Total.toString();
                }
                $scope.result = Total;
                swtc = new_swtc;
                num = 0;
            };

            $scope.clearPress = function() {
                swtc = 0;
                num = 0;
                Total = 0;
                $scope.result = 0;
                $scope.calcNumber = "";
            };
        }
    ]
);