/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos
 */


angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) { //$http allows us to make an http request
        $scope.userName = 'drstearns';
        $scope.getRepos = function() {

            $scope.loading = true;
            $http.get('https://api.github.com/users/' + $scope.userName + '/repos')
                .success(function(data) {
                    $scope.repos = data;
                    $scope.errorMessage = null;
                //.success is a function on returned object, takes parameter that's called when request is finished
                })

                .error(function(err) {
                   //alert(err.message);
                    $scope.errorMessage = err.message;

                })
                .finally(function() {
                    $scope.loading = false;
                });

            // when we make an http request, it doesnt block our code
        };
    });