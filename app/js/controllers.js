'use strict';

/* Controllers */
function MusicCtrl($scope){
  $scope.hello = "hello world!";
  $scope.url = "partials/navigation.html";
  $scope.musicNav = "active";
}

function KarateCtrl($scope){
 $scope.url = "partials/navigation.html";
 $scope.karateNav = "active";
}

function GalleryCtrl($scope, $http){
  $scope.url = "partials/navigation.html";
  $scope.galleryNav = "active";

  $http.get('img/seijo-model/photos.json').success(function(data) {
    $scope.images = data;
  });
}

function AboutCtrl($scope){
  $scope.url = "partials/navigation.html";
  $scope.aboutNav = "active";
}

function SupportCtrl($scope){
  $scope.url = "partials/navigation.html";
  $scope.supportNav = "active";
}

//MyCtrl2.$inject = [];
