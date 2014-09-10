'use strict';

/**
 * sw-spinner
 * https://github.com/jakubburkiewicz/sw-spinner
 *
 * Version: 0.0.1 - 2014.09.10
 * License: MIT
 */

angular.module('sw.spinner', []).

  /* Spinner constants */
  constant('SPINNER', {
    start: 'spinner-start',
    stop: 'spinner-stop'
  }). // /end Spinner constants

  /* sw-spinner directive */
  directive('swSpinner', ['$rootScope', 'SPINNER', function($rootScope, SPINNER) {
    return {

      restrict: 'E',
      replace: true,
      template: '<div class="spinner"><i class="glyphicon glyphicon-refresh"></i><label>{{label}}</label></div>',
      link: function(scope, element, attrs) {
        $rootScope.$on(SPINNER.start, function(event, args) {
          element.addClass('spin');
          scope.label = args.label;
        });

        $rootScope.$on(SPINNER.stop, function(event, args) {
          element.removeClass('spin');
          scope.label = '';
        });
      }

    };
  }]). // /end sw-spinner directive

  /* sw-spinner-overlay directive */
  directive('swSpinnerOverlay', ['$rootScope', 'SPINNER', function($rootScope, SPINNER) {
    return {

      restrict: 'E',
      replace: true,
      template: '<div class="spinner-overlay"></div>',
      link: function(scope, element, attrs) {
        $rootScope.$on(SPINNER.start, function(event, args) {
          element.addClass('visible');
        });

        $rootScope.$on(SPINNER.stop, function(event, args) {
          element.removeClass('visible');
        });
      }

    };
  }]); // /end sw-spinner-overlay directive
