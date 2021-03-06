'use strict';

angular.module('githubExample', ['ui.router', 'auth0', 'angular-storage', 'angular-jwt'])
  .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }])
;

'use strict';

angular.module('githubExample')
  .controller('NavbarCtrl', ["$scope", function ($scope) {
    $scope.date = new Date();
  }]);

'use strict';

angular.module('githubExample')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'jQuery',
        'url': 'http://jquery.com/',
        'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
        'logo': 'jquery.jpg'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  }]);

angular.module("githubExample").run(["$templateCache", function($templateCache) {$templateCache.put("components/navbar/navbar.html","<nav class=\"navbar\" ng-controller=\"NavbarCtrl\"><a href=\"https://github.com/Swiip/generator-gulp-angular\">Gulp Angular</a><ul><li class=\"active\"><a ng-href=\"#\">Home</a></li><li><a ng-href=\"#\">About</a></li><li><a ng-href=\"#\">Contact</a></li></ul><ul><li><a ng-href=\"#\">Current date: {{ date | date:\'yyyy-MM-dd\' }}</a></li></ul></nav>");
$templateCache.put("app/main/main.html","<div class=\"container\"><div ng-include=\"\'components/navbar/navbar.html\'\"></div><div class=\"jumbotron\"><h1>\'Allo, \'Allo!</h1><p class=\"lead\"><img src=\"assets/images/yeoman.png\" alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p><a class=\"btn\" ng-href=\"#\">Splendid!</a></p></div><div class=\"col\" ng-repeat=\"awesomeThing in awesomeThings | orderBy:\'rank\'\"><div class=\"thumbnail\"><img class=\"pull-right\" ng-src=\"assets/images/{{awesomeThing.logo}}\" alt=\"{{awesomeThing.title}}\"><div class=\"caption\"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href=\"{{awesomeThing.url}}\">{{awesomeThing.url}}</a></p></div></div></div><hr><div class=\"footer\"><p>With ♥ from <a href=\"https://twitter.com/Swiip\">@Swiip</a></p></div></div>");}]);