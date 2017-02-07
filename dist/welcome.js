'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, Welcome, UpperValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Welcome', Welcome = function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;
        }

        Welcome.prototype.submit = function submit() {
          this.previousValue = this.fullName;
          alert('Welcome, ' + this.fullName + '!');
        };

        Welcome.prototype.canDeactivate = function canDeactivate() {
          if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
          }
        };

        _createClass(Welcome, [{
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      }());

      _export('Welcome', Welcome);

      _export('UpperValueConverter', UpperValueConverter = function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        UpperValueConverter.prototype.toView = function toView(value) {
          return value && value.toUpperCase();
        };

        return UpperValueConverter;
      }());

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiV2VsY29tZSIsImhlYWRpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInByZXZpb3VzVmFsdWUiLCJmdWxsTmFtZSIsInN1Ym1pdCIsImFsZXJ0IiwiY2FuRGVhY3RpdmF0ZSIsImNvbmZpcm0iLCJVcHBlclZhbHVlQ29udmVydGVyIiwidG9WaWV3IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFFYUEsTzs7OztlQUNYQyxPLEdBQVUsd0M7ZUFDVkMsUyxHQUFZLE07ZUFDWkMsUSxHQUFXLEs7ZUFDWEMsYSxHQUFnQixLQUFLQyxROzs7MEJBV3JCQyxNLHFCQUFTO0FBQ1AsZUFBS0YsYUFBTCxHQUFxQixLQUFLQyxRQUExQjtBQUNBRSw4QkFBa0IsS0FBS0YsUUFBdkI7QUFDRCxTOzswQkFFREcsYSw0QkFBZ0I7QUFDZCxjQUFJLEtBQUtILFFBQUwsS0FBa0IsS0FBS0QsYUFBM0IsRUFBMEM7QUFDeEMsbUJBQU9LLFFBQVEsaUNBQVIsQ0FBUDtBQUNEO0FBQ0YsUzs7Ozs4QkFiYztBQUNiLG1CQUFVLEtBQUtQLFNBQWYsU0FBNEIsS0FBS0MsUUFBakM7QUFDRDs7Ozs7Ozs7cUNBY1VPLG1COzs7OztzQ0FDWEMsTSxtQkFBT0MsSyxFQUFPO0FBQ1osaUJBQU9BLFNBQVNBLE1BQU1DLFdBQU4sRUFBaEI7QUFDRCxTIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
