var ctrls = angular.module('starter.appControllers', [])

ctrls.controller( 'MainCtrl', function($scope,$ionicModal)
{});

ctrls.controller( 'SearchCtrl', function( $scope, PlantService, VertService, InvertService, myCache)
{
    $scope.query = myCache.get('searchValue');
    $scope.plantshow = "@@@@@@@@";
    $scope.plantcollapsed = true;
    $scope.vertshow = "@@@@@@@@";
    $scope.vertcollapsed = true;
    $scope.invertshow = "@@@@@@@@";
    $scope.invertcollapsed = true;
    $scope.data = 
    {
        plants : PlantService.plants,
        inverts : InvertService.inverts,
        verts : VertService.verts,
    }
    $scope.clearSearch = function()
    {
        $scope.query = '';
        myCache.put('searchValue', '');
    }
    $scope.Change = function()
    {
        myCache.put('searchValue', $scope.query);
    }
    $scope.collapsePlants = function()
    {
        if($scope.plantcollapsed) $scope.plantshow = "";
        else $scope.plantshow = "@@@@@@@@";
        $scope.plantcollapsed = !$scope.plantcollapsed;
    }
    $scope.collapseVerts = function()
    {
        if($scope.vertcollapsed) $scope.vertshow = "";
        else $scope.vertshow = "@@@@@@@@";
        $scope.vertcollapsed = !$scope.vertcollapsed;
    }
    $scope.collapseInverts = function()
    {
        if($scope.invertcollapsed) $scope.invertshow = "";
        else $scope.invertshow = "@@@@@@@@";
        $scope.invertcollapsed = !$scope.invertcollapsed;
    }
});

ctrls.controller( 'PlantsCtrl', function( $scope, PlantService )
{
    $scope.data = 
    {
        plants : PlantService.plants
    }
});

ctrls.controller( 'PlantCtrl', function( $scope, plant )
{
    $scope.data = 
    {
        plant : plant
    }
    var my_media;
    var mediaStatus = 0;
    $scope.mediaPlay = function(src)
    {
        if(mediaStatus == 0 || mediaStatus == 3 || mediaStatus == 4) {
            var mp3 = getMediaURL(src);
            my_media = new Media(mp3,
                function () {console.log("playAudio():Audio Success");},
                function (err) {console.log("playAudio():Audio Error: " + err.code + " " + err.message + " "  + mp3);},
                function(status) {
                    mediaStatus = status;
                    console.log(mediaStatus);
                    if(mediaStatus == 4 || mediaStatus == 0) {
                        document.getElementById(src).innerHTML = "&nbsp;Play";
                        document.getElementById(src).className = "button icon ion-play";
                    }
                }
            );
            my_media.play();
            document.getElementById(src).innerHTML = "&nbsp;Pause";
            document.getElementById(src).className = "button icon ion-pause";
        }
        else if(mediaStatus == 2 || mediaStatus == 1) {
            console.log("PAUSED");
            my_media.pause();
            document.getElementById(src).innerHTML = "&nbsp;Play";
            document.getElementById(src).className = "button icon ion-play";
            mediaStatus = 0;
            my_media.pause();
        }
    }
});


ctrls.controller( 'InvertsCtrl', function( $scope, InvertService )
{
    $scope.data = 
    {
        inverts : InvertService.inverts
    }
});

ctrls.controller( 'InvertCtrl', function( $scope, invert, InvertService )
{
    $scope.data = 
    {
        invert : invert, 
        inverts : InvertService.inverts
    }
    var my_media;
    var mediaStatus = 0;
    $scope.mediaPlay = function(src)
    {
        if(mediaStatus == 0 || mediaStatus == 3 || mediaStatus == 4) {
            var mp3 = getMediaURL(src);
            my_media = new Media(mp3,
                function () {console.log("playAudio():Audio Success");},
                function (err) {console.log("playAudio():Audio Error: " + err.code + " " + err.message + " "  + mp3);},
                function(status) {
                    mediaStatus = status;
                    console.log(mediaStatus);
                    if(mediaStatus == 4 || mediaStatus == 0) {
                        document.getElementById(src).innerHTML = "&nbsp;Play";
                        document.getElementById(src).className = "button icon ion-play";
                    }
                }
            );
            my_media.play();
            document.getElementById(src).innerHTML = "&nbsp;Pause";
            document.getElementById(src).className = "button icon ion-pause";
        }
        else if(mediaStatus == 2 || mediaStatus == 1) {
            console.log("PAUSED");
            my_media.pause();
            document.getElementById(src).innerHTML = "&nbsp;Play";
            document.getElementById(src).className = "button icon ion-play";
            mediaStatus = 0;
            my_media.pause();
        }
    }
});


ctrls.controller( 'VertsCtrl', function( $scope, VertService )
{
    $scope.data = 
    {
        verts : VertService.verts
    }
});

ctrls.controller( 'VertCtrl', function( $scope, vert, VertService )
{
    $scope.data = 
    {
        vert : vert, 
        verts : VertService.verts
    }
    var my_media;
    var mediaStatus = 0;
    $scope.mediaPlay = function(src)
    {
        if(mediaStatus == 0 || mediaStatus == 3 || mediaStatus == 4) {
            var mp3 = getMediaURL(src);
            my_media = new Media(mp3,
                function () {console.log("playAudio():Audio Success");},
                function (err) {console.log("playAudio():Audio Error: " + err.code + " " + err.message + " "  + mp3);},
                function(status) {
                    mediaStatus = status;
                    console.log(mediaStatus);
                    if(mediaStatus == 4 || mediaStatus == 0) {
                        document.getElementById(src).innerHTML = "&nbsp;Play";
                        document.getElementById(src).className = "button icon ion-play";
                    }
                }
            );
            my_media.play();
            document.getElementById(src).innerHTML = "&nbsp;Pause";
            document.getElementById(src).className = "button icon ion-pause";
        }
        else if(mediaStatus == 2 || mediaStatus == 1) {
            console.log("PAUSED");
            my_media.pause();
            document.getElementById(src).innerHTML = "&nbsp;Play";
            document.getElementById(src).className = "button icon ion-play";
            mediaStatus = 0;
            my_media.pause();
        }
    }
});

/*ctrls.controller( 'CommCtrl', function( $scope, VertService, PlantService, InvertService )
{
    $scope.plantshow = "";
    $scope.plantcollapsed = false;
    $scope.vertshow = "";
    $scope.vertcollapsed = false;
    $scope.invertshow = "";
    $scope.invertcollapsed = false;
    $scope.data = 
    {
        verts : VertService.verts,
        plants : PlantService.plants,
        inverts : InvertService.inverts
    }
    $scope.collapsePlants = function()
    {
        if($scope.plantcollapsed) $scope.plantshow = "";
        else $scope.plantshow = "@@@@@@@@";
        $scope.plantcollapsed = !$scope.plantcollapsed;
    }
    $scope.collapseVerts = function()
    {
        if($scope.vertcollapsed) $scope.vertshow = "";
        else $scope.vertshow = "@@@@@@@@";
        $scope.vertcollapsed = !$scope.vertcollapsed;
    }
    $scope.collapseInverts = function()
    {
        if($scope.invertcollapsed) $scope.invertshow = "";
        else $scope.invertshow = "@@@@@@@@";
        $scope.invertcollapsed = !$scope.invertcollapsed;
    }
});*/