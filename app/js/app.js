'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp',
                ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Music',
      {templateUrl: 'partials/music.html', controller: MusicCtrl});
    $routeProvider.when('/Karate',
      {templateUrl: 'partials/karate.html', controller: KarateCtrl});
    $routeProvider.when('/Gallery',
      {templateUrl: 'partials/gallery.html', controller: GalleryCtrl});
    $routeProvider.when('/About',
      {templateUrl: 'partials/about.html', controller: AboutCtrl});
    $routeProvider.when('/Support',
      {templateUrl: 'partials/support.html', controller: SupportCtrl});
    $routeProvider.otherwise({redirectTo: '/Music'});
  }]);
