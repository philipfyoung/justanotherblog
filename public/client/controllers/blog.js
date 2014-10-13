/**
 * Created by Sandra on 10/13/2014.
 */
/* global angular */
'use strict';

angular.module('MyApp')
    .controller('BlogCtrl', ['$scope', function($scope) {
        $scope.headingTitle = "Latest";
    }]);