(function(){
    'use strict';

    angular
        .module('shipyard.containers')
        .config(getRoutes);

    getRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function getRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard.containers', {
                url: '/containers',
                templateUrl: 'app/containers/containers.html',
                controller: 'ContainersController',
                controllerAs: 'vm',
                authenticate: true,
                resolve: {
                    containers: ['ContainersService', '$state', function (ContainersService, $state) {
                        return ContainersService.query().$promise.then(null, function(errorData) {	                            
                            $state.go('error');
                        }); 
                    }] 
                }
            });
    }
})();
