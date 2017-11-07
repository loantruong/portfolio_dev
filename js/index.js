'use strict';

angular.module('cvDev', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
      .state('hello', {
        url: '/hello',
        component: 'intro',
      })
      .state('about', {
        url: '/about',
      })
      .state('skill', {
        url: '/skill',
      })
      .state('work', {
        url: '/work',
      })
      .state('contact', {
        url: '/contact',
      });
      
      $urlRouterProvider.otherwise('/hello');
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  });
