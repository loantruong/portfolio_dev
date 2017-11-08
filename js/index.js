'use strict';

angular.module('cvDev', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
      .state('hello', {
        url: '/hello',
        component: 'intro'
      })
      .state('about', {
        url: '/about',
        component: 'about'
      })
      .state('skill', {
        url: '/skill',
        component: 'skill'
      })
      .state('work', {
        url: '/work',
        component: 'work'
      })
      .state('contact', {
        url: '/contact',
        component: 'contact'
      });
      
      $urlRouterProvider.otherwise('/hello');
      //$locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('!');
  });
