angular.module("app.services").factory('Works', ['$http', '$q',
    function($http, $q) {
        return {
            fetch: function() {
                var defer = $q.defer();
                $http.get("JSON/work.json").success(function(data) {
                    defer.resolve(data);
                }).error(function() {
                    alert("Fetch work FAILED!!")
                });
                return defer.promise;
            }
        };
    }
]);
