'use strict';

angular.module('cvDev', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('hello', {
        url: '/hello',
        component: 'js/components/intro',
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
  });
