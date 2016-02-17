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
                    templateUrl: 'directives/directive001/directive001.html'
                })
                .state('widgetDirectives', {
                    url: '/widgetDirectives',
                    templateUrl: 'directives/widgetDirectives/widget-directives.html'
                })
                .state('widget001', {
                    url: '/widget001',
                    templateUrl: 'directives/widgetDirectives/widget001/widget001.html'
                })
                .state('decoratorDirectives', {
                    url: '/decoratorDirectives',
                    templateUrl: 'directives/decoratorDirectives/decorator-directives.html'
                })
                .state('decorator001', {
                    url: '/decorator001',
                    templateUrl: 'directives/decoratorDirectives/decorator001/decorator001.html'
                })
                .state('decorator002', {
                    url: '/decorator002',
                    templateUrl: 'directives/decoratorDirectives/decorator002/decorator002.html'
                })
                .state('transclusionDirectives', {
                    url: '/transclusionDirectives',
                    templateUrl: 'directives/transclusionDirectives/transclusion-directives.html'
                })
                .state('transclusion001', {
                    url: '/transclusion001',
                    templateUrl: 'directives/transclusionDirectives/transclusion001/transclusion001.html'
                })
                .state('transclusion002', {
                    url: '/transclusion002',
                    templateUrl: 'directives/transclusionDirectives/transclusion002/transclusion002.html'
                })
                .state('structuralDirectives', {
                    url: '/structuralDirectives',
                    templateUrl: 'directives/structuralDirectives/structural-directives.html'
                })
                .state('structural001', {
                    url: '/structural001',
                    templateUrl: 'directives/structuralDirectives/structural001/structural001.html'
                })
                .state('structural002', {
                    url: '/structural',
                    templateUrl: 'directives/structuralDirectives/structural002/structural002.html'
                })

        });



}());


