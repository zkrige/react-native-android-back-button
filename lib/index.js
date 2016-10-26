"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactSideEffect = require("react-side-effect");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listener = null;
var backButtonPressFunction = function backButtonPressFunction() {
  return false;
};

var AndroidBackButton = function (_Component) {
  _inherits(AndroidBackButton, _Component);

  function AndroidBackButton() {
    _classCallCheck(this, AndroidBackButton);

    return _possibleConstructorReturn(this, (AndroidBackButton.__proto__ || Object.getPrototypeOf(AndroidBackButton)).apply(this, arguments));
  }

  _createClass(AndroidBackButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_reactNative.Platform.OS === "android" && listener === null) {
        listener = _reactNative.BackAndroid.addEventListener("hardwareBackPress", function () {
          return backButtonPressFunction();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AndroidBackButton;
}(_react.Component);

AndroidBackButton.propTypes = {
  onPress: _react.PropTypes.func.isRequired
};

function reducePropsToState(propsList) {
  var defaultValue = function defaultValue() {
    return false;
  };
  var lastComponent = propsList[propsList.length - 1];
  return lastComponent && lastComponent.onPress || defaultValue;
}

function mapStateOnServer(callback) {
  backButtonPressFunction = callback;
  return backButtonPressFunction;
}

exports.default = (0, _reactSideEffect2.default)(reducePropsToState, function () {}, mapStateOnServer)(AndroidBackButton);