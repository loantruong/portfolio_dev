'use strict';

angular.module('cvDev')
  .component('intro', {
    templateUrl: 'js/components/intro.html',
    //import: 'js/animation/demo-1.js'
  })
  .component('about', {
    templateUrl: 'js/components/about.html'
  })
  .component('skill', {
    templateUrl: 'js/components/skill.html'
  })
  .component('work', {
    templateUrl: 'js/components/work.html'
  })
  .component('contact', {
    templateUrl: 'js/components/contact.html'
  });
