'use strict';

exports.__esModule = true;
exports.TableHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableContext = require('../Table/TableContext');

var _StyledTable = require('../Table/StyledTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeader = function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableHeader.prototype.render = function render() {
    return _react2.default.createElement(
      _TableContext.TableContext.Provider,
      { value: 'header' },
      _react2.default.createElement(_StyledTable.StyledTableHeader, this.props)
    );
  };

  return TableHeader;
}(_react.Component);

var TableHeaderDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TableHeaderDoc = require('./doc').doc(TableHeader); // eslint-disable-line global-require
}
var TableHeaderWrapper = TableHeaderDoc || TableHeader;

exports.TableHeader = TableHeaderWrapper;