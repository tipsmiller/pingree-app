ionic.Platform.isIE = function() {
  return ionic.Platform.ua.toLowerCase().indexOf('trident') > -1;
}

if (ionic.Platform.isIE()) {
  angular.module('ionic')
    .factory('$ionicNgClick', ['$parse', '$timeout', function($parse, $timeout) {
      return function(scope, element, clickExpr) {
        var clickHandler = angular.isFunction(clickExpr) ? clickExpr : $parse(clickExpr);

        element.on('click', function(event) {
          scope.$apply(function() {
            if (scope.clicktimer) return; // Second call
            clickHandler(scope, {$event: (event) });
            scope.clicktimer = $timeout(function() { delete scope.clicktimer; }, 1, false);
          });
        });

        // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
        // something else nearby.
        element.onclick = function(event) {};
      };
    }]);
}


var deviceName;

//Workaround for android, needs different URLs, used in media calls for sound:
function getMediaURL(s) {
    if(deviceName === "android") return "/android_asset/www/" + s;
    return s;
}

document.addEventListener("deviceready", onDeviceReady, false);

//Prevent back frome home
function onDeviceReady(){
    navigator.splashscreen.hide();
    deviceName = device.platform.toLowerCase();
    if(deviceName == "ios") ionic.Platform.fullScreen(false,true);
    document.addEventListener("backbutton", function(e){
       if(document.getElementById('home')){
           e.preventDefault();
           navigator.app.exitApp();
       }
       else {
           navigator.app.backHistory();
       }
    }, false);
}

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.appControllers']);

app.run(function($ionicPlatform)
{
    $ionicPlatform.ready(function()
    {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard)
        {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar)
        {
            StatusBar.styleDefault();
        }
    });
});


//Unique filtering function:
app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});

//"Cache" for storing information between states
//Used in searching to remeber searches when navigated away from
app.factory('myCache', function ($cacheFactory) {
    return $cacheFactory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache');
    });
});


app.config
(
    function($stateProvider, $urlRouterProvider, $compileProvider)
    {
        $compileProvider.imgSrcSanitizationWhitelist('images/');
        
        $urlRouterProvider.otherwise('/')
        
        $stateProvider
        
        .state('home',
        {
            url: '/',
            templateUrl: 'home.html'
        })
            
        .state('search',
        {
            url: '/search',
            templateUrl: 'search.html',
            controller: 'SearchCtrl'
        })
        
        .state('about',
        {
            url: '/about',
            templateUrl: 'about.html'
        })
        
        .state('acknowledgments',
        {
            url: '/acknowledgments',
            templateUrl: 'acknowledgments.html'
        })
        
        .state('copyright',
        {
            url: '/copyright',
            templateUrl: 'copyright.html'
        })
        
        .state('plants',
        {
            url: '/plants/',
            templateUrl: 'plants.html'
        })
        
        .state('plantsall',
        {
            url: '/plants/all',
            templateUrl: 'plantsall.html',
            controller: 'PlantsCtrl'
        })
        
        .state('plantsalldetails', {
            url: '/plants/all/:plant',
            templateUrl: 'plantsdetails.html',
            controller: 'PlantCtrl',
            resolve: {
                plant: function( $stateParams, PlantService )
                {
                    return PlantService.getPlant( $stateParams.plant-1 );
                }
            }
        })
        
        .state('nonvascular',
        {
            url: '/plants/nonvascular',
            templateUrl: 'nonvascular.html',
            controller: 'PlantsCtrl'
        })
        
        .state('nonvasculardetails', {
            url: '/plants/nonvascular/:plant',
            templateUrl: 'plantsdetails.html',
            controller: 'PlantCtrl',
            resolve: {
                plant: function( $stateParams, PlantService )
                {
                    return PlantService.getPlant( $stateParams.plant-1 );
                }
            }
        })
		
		.state('vascular',
		{
			url: '/plants/vascular',
			templateUrl: 'vascular.html',
            controller: 'PlantsCtrl'
		})
		
		.state('vasculardetails', {
			url: '/plants/vascular/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
		
		.state('seedbearing',
		{
			url: '/plants/seedbearing',
			templateUrl: 'seedbearing.html',
            controller: 'PlantsCtrl'
		})
		
		.state('seedbearingdetails', {
			url: '/plants/seedbearing/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
        
        .state('gymnosperm',
		{
			url: '/plants/gymnosperm',
			templateUrl: 'gymnosperm.html',
            controller: 'PlantsCtrl'
		})
		
		.state('gymnospermdetails', {
			url: '/plants/gymnosperm/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
		
        
        .state('angiosperm',
		{
			url: '/plants/angiosperm',
			templateUrl: 'angiosperm.html',
            controller: 'PlantsCtrl'
		})
		
		.state('angiospermdetails', {
			url: '/plants/angiosperm/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
		
        
        .state('nonseedbearing',
		{
			url: '/plants/nonseedbearing',
			templateUrl: 'nonseedbearing.html',
            controller: 'PlantsCtrl'
		})
		
		.state('nonseedbearingdetails', {
			url: '/plants/nonseedbearing/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
		
        
        .state('other',
		{
			url: '/plants/other',
			templateUrl: 'other.html',
            controller: 'PlantsCtrl'
		})
		
		.state('otherdetails', {
			url: '/plants/other/:plant',
			templateUrl: 'plantsdetails.html',
			controller: 'PlantCtrl',
			resolve: {
				plant: function( $stateParams, PlantService )
				{
					return PlantService.getPlant( $stateParams.plant-1 );
				}
			}
		})
        
        .state('inverts',
        {
            url: '/inverts/',
            templateUrl: 'inverts.html'
        })
        
        .state('invertsall',
        {
            url: '/inverts/all',
            templateUrl: 'invertsall.html',
            controller: 'InvertsCtrl'
        })
        
        .state('invertsalldetails', {
            url: '/inverts/all/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('porifera',
        {
            url: '/inverts/porifera',
            templateUrl: 'porifera.html',
            controller: 'InvertsCtrl'
        })
        
        .state('poriferadetails', {
            url: '/inverts/porifera/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('cnidaria',
        {
            url: '/inverts/cnidaria',
            templateUrl: 'cnidaria.html',
            controller: 'InvertsCtrl'
        })
        
        .state('cnidariadetails', {
            url: '/inverts/cnidaria/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('ctenophora',
        {
            url: '/inverts/ctenophora',
            templateUrl: 'ctenophora.html',
            controller: 'InvertsCtrl'
        })
        
        .state('ctenophoradetails', {
            url: '/inverts/ctenophora/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('platyhelminthes',
        {
            url: '/inverts/platyhelminthes',
            templateUrl: 'platyhelminthes.html',
            controller: 'InvertsCtrl'
        })
        
        .state('platyhelminthesdetails', {
            url: '/inverts/platyhelminthes/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('annelida',
        {
            url: '/inverts/annelida',
            templateUrl: 'annelida.html',
            controller: 'InvertsCtrl'
        })
        
        .state('annelidadetails', {
            url: '/inverts/annelida/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('mollusca',
        {
            url: '/inverts/mollusca',
            templateUrl: 'mollusca.html',
            controller: 'InvertsCtrl'
        })
        
        .state('molluscadetails', {
            url: '/inverts/mollusca/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('arthropoda',
        {
            url: '/inverts/arthropoda',
            templateUrl: 'arthropoda.html',
            controller: 'InvertsCtrl'
        })
        
        .state('arthropodadetails', {
            url: '/inverts/arthropoda/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('bryozoa',
        {
            url: '/inverts/bryozoa',
            templateUrl: 'bryozoa.html',
            controller: 'InvertsCtrl'
        })
        
        .state('bryozoadetails', {
            url: '/inverts/bryozoa/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('brachiopoda',
        {
            url: '/inverts/brachiopoda',
            templateUrl: 'brachiopoda.html',
            controller: 'InvertsCtrl'
        })
        
        .state('brachiopodadetails', {
            url: '/inverts/brachiopoda/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('phoronida',
        {
            url: '/inverts/phoronida',
            templateUrl: 'phoronida.html',
            controller: 'InvertsCtrl'
        })
        
        .state('phoronidadetails', {
            url: '/inverts/phoronida/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('echinodermata',
        {
            url: '/inverts/echinodermata',
            templateUrl: 'echinodermata.html',
            controller: 'InvertsCtrl'
        })
        
        .state('echinodermatadetails', {
            url: '/inverts/echinodermata/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('chordata',
        {
            url: '/inverts/chordata',
            templateUrl: 'chordata.html',
            controller: 'InvertsCtrl'
        })
        
        .state('chordatadetails', {
            url: '/inverts/chordata/:invert',
            templateUrl: 'invertsdetails.html',
            controller: 'InvertCtrl',
            resolve: {
                invert: function( $stateParams, InvertService )
                {
                    return InvertService.getInvert( $stateParams.invert-1 );
                }
            }
        })
        
        .state('verts',
        {
            url: '/verts/',
            templateUrl: 'verts.html'
        })
        
        .state('vertsall',
        {
            url: '/verts/all',
            templateUrl: 'vertsall.html',
            controller: 'VertsCtrl'
        })
        
        .state('vertsalldetails', {
            url: '/verts/all/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        .state('fish',
        {
            url: '/verts/fish',
            templateUrl: 'fish.html',
            controller: 'VertsCtrl'
        })
        
        .state('fishdetails', {
            url: '/verts/fish/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        .state('amphibian',
        {
            url: '/verts/amphibians',
            templateUrl: 'amphibian.html',
            controller: 'VertsCtrl'
        })
        
        .state('amphibiandetails', {
            url: '/verts/amphibians/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        .state('reptile',
        {
            url: '/verts/reptiles',
            templateUrl: 'reptile.html',
            controller: 'VertsCtrl'
        })
        
        .state('reptiledetails', {
            url: '/verts/reptiles/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        .state('bird',
        {
            url: '/verts/birds',
            templateUrl: 'bird.html',
            controller: 'VertsCtrl'
        })
        
        .state('birddetails', {
            url: '/verts/birds/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        .state('mammal',
        {
            url: '/verts/mammals',
            templateUrl: 'mammal.html',
            controller: 'VertsCtrl'
        })
        
        .state('mammaldetails', {
            url: '/verts/mammals/:vert',
            templateUrl: 'vertsdetails.html',
            controller: 'VertCtrl',
            resolve: {
                vert: function( $stateParams, VertService )
                {
                    return VertService.getVert( $stateParams.vert-1 );
                }
            }
        })
        
        
        
        /*.state('Alpine',
        {
            url: '/communities/alpine',
            templateUrl: 'alpine.html',
            controller: 'CommCtrl'
        })
        
        .state('Lodgepole Pine',
        {
            url: '/communities/lodgepole',
            templateUrl: 'lodgepole.html',
            controller: 'CommCtrl'
        })
        
        .state('Mountain Shrub',
        {
            url: '/communities/shrub',
            templateUrl: 'shrub.html',
            controller: 'CommCtrl'
        })
        
        .state('Ponderosa Pine',
        {
            url: '/communities/ponderosa',
            templateUrl: 'ponderosa.html',
            controller: 'CommCtrl'
        })
        
        .state('Riparian',
        {
            url: '/communities/riparian',
            templateUrl: 'riparian.html',
            controller: 'CommCtrl'
        })
        
        .state('Spruce-fir',
        {
            url: '/communities/spruce',
            templateUrl: 'spruce.html',
            controller: 'CommCtrl'
        })*/;
    }
);

