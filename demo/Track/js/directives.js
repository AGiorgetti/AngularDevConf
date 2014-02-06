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
            // make it reusable!
            return {
                restrict: 'EA',
                replace: true,
                scope: { // isolated scope!!! (it does not inherits the scope from its enclosing scope).
                    // this is a way to map the properties of the outside scope on the properties of the inner scope
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
        .directive('myLabelInputUsingCompile', ['$compile',
            function ($compile) {
                // compile & attributes!
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        ngModel: '='
                    },
                    //template: '<p>template</p>', // if a template is specified it gets linked to the scope automatically, otherwise you need to link it manually
                    compile: function (iElement, iAttrs) {
                        // the right place for DOM manipulations.
                        var html = '<div class="form-group">' +
                            '<label for="' + iAttrs.id + '">' + iAttrs.placeholder + '</label>' +
                            '<input type="' + iAttrs.type + '" class="form-control" id="' + iAttrs.id + '" placeholder="' + iAttrs.placeholder + '" ng-model="ngModel" data-select-on-focus="">' +
                            '</div>';
                        iElement.append(angular.element(html));

                        // the $compile service converts an HTML string into Angular template (and returns a link function to be used against a scope)
                        return function (scope, iElement) {
                            $compile(iElement.contents())(scope);
                        };
                    }
                    // you can check for changes on attrs with: iAttrs.observe() 
                    // you can set values using .Attrs.$set()
                };
            }])
        .directive('myCenteredFrame', function () {
            // transclude
            return {
                restrict: 'EA',
                transclude: true,
                //replace: true,
                template: '<div class="row"><div class="col-xs-8 col-xs-offset-2" ng-transclude></div></div>'
            };
        })
        .directive('myTabs', function () {
            // require
            // controller
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                template: '<div class="tabbable">' +
                    '<ul class="nav nav-tabs">' +
                    '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                    '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                    '</li></ul>' +
                    '<div class="tab-content" ng-transclude></div></div>',
                controller: ['$scope', '$element', '$attrs', '$transclude',
                    function ($scope, $element, $attrs, $transclude) {
                        // the controlle is instantiated before the link functions are called

                        // the controller is injectable! pay attention to minifications.

                        // the controller gets injected in every directive that requires it

                        var panes = $scope.panes = [];

                        $scope.select = function (pane) {
                            angular.forEach(panes, function (pane) {
                                pane.selected = false;
                            });
                            pane.selected = true;
                        };

                        this.addPane = function (pane) {
                            if (panes.length === 0) {
                                $scope.select(pane);
                            }
                            panes.push(pane);
                        };
                    }]
            };
        })
        .directive('myPane', function () {
            return {
                require: '^myTabs', // look myTabs in the parent node, pass the controller in the link functions
                restrict: 'E',
                transclude: true,
                scope: {
                    title: '@'
                },
                template: '<div class="tab-pane" ng-show="selected" ng-transclude></div>',
                link: function (scope, element, attrs, tabsCtrl) {
                    // use the injected controller
                    tabsCtrl.addPane(scope);
                }
            };
        });

    // priority
    // terminal

}());