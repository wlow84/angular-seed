'use strict';

/* Controllers */
function MusicCtrl($scope){
  $scope.hello = "hello world!";
  $scope.url = "partials/navigation.html";
  $scope.musicNav = "active";
}

function KarateCtrl($scope,$http){
 $scope.url = "partials/navigation.html";
 $scope.selectedVideo = "wXywsofPYt4";
 $scope.selectedVideoTitle = "Da Strongest";
 $scope.karateNav = "active";

 $scope.replaceModalVideo = function(url,title){
  $scope.selectedVideo = url;
  $scope.selectedVideoTitle = title;
 }
 $http.get('https://gdata.youtube.com/feeds/api/videos?author=bakemono444&alt=json&v=2')
      .success(function(data){
        $scope.videos = data.feed.entry;
      });
 $scope.getVideoId = function(tag){
    var arr = tag.split(':');
    return arr[arr.length-1];
 }
}

function GalleryCtrl($scope, $http){
  $scope.imageUrl = 'img/seijo-model/001.jpg';
  $scope.url = "partials/navigation.html";
  $scope.galleryNav = "active";
  $scope.replaceModalImage = function(fileName){
    $scope.imageUrl = 'img/seijo-model/' + fileName;
  };

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
