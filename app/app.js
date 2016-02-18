(function () {

    'use strict';

    angular.module('miApp', [
            'ui.router',
            'directive001',
            'widgetDirectives',
            'widget001',
            'decoratorDirectives',
            'decorator001',
            'decorator002',
            'transclusionDirectives',
            'transclusion001',
            'transclusion002',
            'structuralDirectives',
            'structural001',
            'structural002',
            'constantFunction',
            'qService',
            'routingServices',
            'cookies',
            'log'
            ])

        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'services/home/home.html'
                })
                .state('providers', {
                    url: '/providers',
                    templateUrl: 'services/providerFunction/providers.html'
                })
                .state('widget001', {
                    url: '/widget001',
                    templateUrl: 'services/providerFunction/widget001/widget001.html'
                })
                .state('decoratorDirectives', {
                    url: '/decoratorDirectives',
                    templateUrl: 'services/factoryFunction/decorator-directives.html'
                })
                .state('decorator001', {
                    url: '/decorator001',
                    templateUrl: 'services/factoryFunction/decorator001/decorator001.html'
                })
                .state('decorator002', {
                    url: '/decorator002',
                    templateUrl: 'services/factoryFunction/decorator002/decorator002.html'
                })
                .state('transclusionDirectives', {
                    url: '/transclusionDirectives',
                    templateUrl: 'services/serviceFunction/transclusion-directives.html'
                })
                .state('transclusion001', {
                    url: '/transclusion001',
                    templateUrl: 'services/serviceFunction/transclusion001/transclusion001.html'
                })
                .state('transclusion002', {
                    url: '/transclusion002',
                    templateUrl: 'services/serviceFunction/transclusion002/transclusion002.html'
                })
                .state('structuralDirectives', {
                    url: '/structuralDirectives',
                    templateUrl: 'services/valueFunction/structural-directives.html'
                })
                .state('structural001', {
                    url: '/structural001',
                    templateUrl: 'services/valueFunction/structural001/structural001.html'
                })
                .state('structural002', {
                    url: '/structural',
                    templateUrl: 'services/valueFunction/structural002/structural002.html'
                })
                .state('constantFunction', {
                    url: '/constantFunction',
                    templateUrl: 'services/constantFunction/constant-function.html'
                })
                .state('dependency-anotations', {
                    url: '/dependency-anotations',
                    templateUrl: 'services/dependency-anotations.html'
                })
                .state('qService', {
                    url: '/qService',
                    templateUrl: 'builtinServices/qService/q-service.html'
                })
                .state('routingServices', {
                    url: '/routingServices',
                    templateUrl: 'builtinServices/routingServices/routing-services.html'
                })
                .state('cookies', {
                    url: '/cookies',
                    templateUrl: 'builtinServices/cookies/cookies.html'
                })
                .state('log', {
                    url: '/log',
                    templateUrl: 'builtinServices/log/log.html'
                })

        });



}());


