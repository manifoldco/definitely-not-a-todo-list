'use strict';

exports.__esModule = true;
exports.TableFooter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableContext = require('../Table/TableContext');

var _StyledTable = require('../Table/StyledTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFooter = function (_Component) {
  _inherits(TableFooter, _Component);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableFooter.prototype.render = function render() {
    return _react2.default.createElement(
      _TableContext.TableContext.Provider,
      { value: 'footer' },
      _react2.default.createElement(_StyledTable.StyledTableFooter, this.props)
    );
  };

  return TableFooter;
}(_react.Component);

var TableFooterDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TableFooterDoc = require('./doc').doc(TableFooter); // eslint-disable-line global-require
}
var TableFooterWrapper = TableFooterDoc || TableFooter;

exports.TableFooter = TableFooterWrapper;