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
            'structural002'
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
                    templateUrl: 'services/providers/providers.html'
                })
                .state('widget001', {
                    url: '/widget001',
                    templateUrl: 'services/providers/widget001/widget001.html'
                })
                .state('decoratorDirectives', {
                    url: '/decoratorDirectives',
                    templateUrl: 'services/decoratorDirectives/decorator-directives.html'
                })
                .state('decorator001', {
                    url: '/decorator001',
                    templateUrl: 'services/decoratorDirectives/decorator001/decorator001.html'
                })
                .state('decorator002', {
                    url: '/decorator002',
                    templateUrl: 'services/decoratorDirectives/decorator002/decorator002.html'
                })
                .state('transclusionDirectives', {
                    url: '/transclusionDirectives',
                    templateUrl: 'services/transclusionDirectives/transclusion-directives.html'
                })
                .state('transclusion001', {
                    url: '/transclusion001',
                    templateUrl: 'services/transclusionDirectives/transclusion001/transclusion001.html'
                })
                .state('transclusion002', {
                    url: '/transclusion002',
                    templateUrl: 'services/transclusionDirectives/transclusion002/transclusion002.html'
                })
                .state('structuralDirectives', {
                    url: '/structuralDirectives',
                    templateUrl: 'services/structuralDirectives/structural-directives.html'
                })
                .state('structural001', {
                    url: '/structural001',
                    templateUrl: 'services/structuralDirectives/structural001/structural001.html'
                })
                .state('structural002', {
                    url: '/structural',
                    templateUrl: 'services/structuralDirectives/structural002/structural002.html'
                })

        });



}());


