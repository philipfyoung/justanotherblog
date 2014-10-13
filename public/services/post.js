/**
 * Created by Sandra on 10/12/2014.
 */
/* global angular */
'use strict';

angular.module('MyApp')
    .factory('Post', ['$resource', function($resource) {
        return $resource('/api/posts/:_id');
    }]);
