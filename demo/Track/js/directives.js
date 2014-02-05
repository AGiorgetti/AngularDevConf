(function () {
    "use strict";

    angular.module('myDirectives', [])
        .directive('selectOnFocus', function () {
            // add behaviour
            return {
                restrict: 'A',
                link: function (scope, iElement) {
                    iElement.mouseup(function (evt) {
                        evt.preventDefault();
                    });
                    iElement.focus(function () {
                        iElement.select();
                    });
                }
            };
        })
        .directive('myLabelInputHardcoded', function () {
            // create a widget
            return {
                restrict: 'EA',
                replace: true,
                template: '<div class="form-group">' +
                    '<label for="exampleInputEmail1">Email address</label>' +
                    '<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" ng-model="data.email" data-select-on-focus="">' +
                    '</div>'
                // templateUrl: 'file.html' 
            };
        })
        .directive('myLabelInputScope', function () {
            // make it usable!
            return {
                restrict: 'EA',
                replace: true,
                scope: { // isolated scope!!! (it does not inherits the scope from its enclosing scope).
                    id: '@', // one-way expression: it gets evaluated to a string
                    type: '@',
                    placeholder: '@',
                    ngModel: '=' // two-way binding
                },
                template: '<div class="form-group">' +
                    '<label for="{{ id }}">{{ placeholder }}</label>' +
                    '<input type="{{ type }}" class="form-control" id="{{ id }}" placeholder="{{ placeholder }}" data-ng-model="ngModel" data-select-on-focus="">' +
                    '</div>'
            };
        })
        .directive('myLabelInputUsingCompile', function () {
            // make it a little bit more efficient using compile & attributes!
            return {
                restrict: 'EA',
                //replace: true,
                scope: {
                    ngModel: '='
                },
                compile: function (iElement, iAttrs) {
                    // the right place for DOM manipulations.
                    var html = '<div class="form-group">' +
                        '<label for="' + iAttrs.id + '">' + iAttrs.placeholder + '</label>' +
                        '<input type="' + iAttrs.type + '" class="form-control" id="' + iAttrs.id + '" placeholder="' + iAttrs.placeholder + '" ng-model="ngModel" data-select-on-focus="">' +
                        '</div>';
                    iElement.replaceWith(angular.element(html));

                    // the $compile service converts an HTML string into Angular template (and returns a link function to be used against a scope)
                }
                // you can check for changes on attrs with: iAttrs.observe() 
                // you can set values using .Attrs.$set()
            };
        })
    
        // priority
        // terminal
        // controller
        // require
    
        .directive('myCenteredFrame', function () {
            // an example of transclusion
            
            return {
                restrict: 'EA',
                transclude: true,
                //replace: true,
                template: '<div class="row"><div class="col-xs-8 col-xs-offset-2" ng-transclude></div></div>'
            }
        });
}());