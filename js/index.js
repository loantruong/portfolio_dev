'use strict';

angular.module('cvDev', ['ui.router'])
  .config(function($stateProvider) {
  let introState = {
    name: 'hello',
    url: '/hello',
    templateUrl: 'js/components/intro.html'
  }

  let aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'js/components/about.html'
  }

  let skillState = {
    name: 'skill',
    url: '/skill',
    templateUrl: 'js/components/skill.html'
  }

  let workState = {
    name: 'work',
    url: '/work',
    templateUrl: 'js/components/work.html'
  }

  let contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'js/components/contact.html'
  }

  $stateProvider.state(introState);
  $stateProvider.state(aboutState);
  $stateProvider.state(skillState);
  $stateProvider.state(workState);
  $stateProvider.state(contactState);
});