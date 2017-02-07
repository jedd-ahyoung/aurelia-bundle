'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjb25maWd1cmVSb3V0ZXIiLCJjb25maWciLCJyb3V0ZXIiLCJ0aXRsZSIsIm1hcCIsInJvdXRlIiwibmFtZSIsIm1vZHVsZUlkIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFhQSxHOzs7OztzQkFDWEMsZSw0QkFBZ0JDLE0sRUFBUUMsTSxFQUFRO0FBQzlCRCxpQkFBT0UsS0FBUCxHQUFlLFNBQWY7QUFDQUYsaUJBQU9HLEdBQVAsQ0FBVyxDQUNULEVBQUVDLE9BQU8sQ0FBQyxFQUFELEVBQUssU0FBTCxDQUFULEVBQTBCQyxNQUFNLFNBQWhDLEVBQWdEQyxVQUFVLFNBQTFELEVBQTBFQyxLQUFLLElBQS9FLEVBQXFGTCxPQUFPLFNBQTVGLEVBRFMsRUFFVCxFQUFFRSxPQUFPLE9BQVQsRUFBMEJDLE1BQU0sT0FBaEMsRUFBZ0RDLFVBQVUsT0FBMUQsRUFBMEVDLEtBQUssSUFBL0UsRUFBcUZMLE9BQU8sY0FBNUYsRUFGUyxFQUdULEVBQUVFLE9BQU8sY0FBVCxFQUEwQkMsTUFBTSxjQUFoQyxFQUFnREMsVUFBVSxjQUExRCxFQUEwRUMsS0FBSyxJQUEvRSxFQUFxRkwsT0FBTyxjQUE1RixFQUhTLENBQVg7O0FBTUEsZUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
