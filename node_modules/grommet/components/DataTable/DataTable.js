'use strict';

exports.__esModule = true;
exports.DataTable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _Header = require('./Header');

var _Footer = require('./Footer');

var _Body = require('./Body');

var _GroupedBody = require('./GroupedBody');

var _buildState = require('./buildState');

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTable = function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable() {
    var _temp, _this, _ret;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onFiltering = function (property) {
      _this.setState({ filtering: property });
    }, _this.onFilter = function (property, value) {
      var onSearch = _this.props.onSearch;

      var nextFilters = _extends({}, _this.state.filters);
      nextFilters[property] = value;
      _this.setState({ filters: nextFilters });

      // Let caller know about search, if interested
      if (onSearch) {
        onSearch(nextFilters);
      }
    }, _this.onSort = function (property) {
      return function () {
        var sort = _this.state.sort;

        var ascending = sort && property === sort.property ? !sort.ascending : true;
        _this.setState({ sort: { property: property, ascending: ascending } });
      };
    }, _this.onToggleGroup = function (groupValue) {
      return function () {
        var groupState = _extends({}, _this.state.groupState);
        groupState[groupValue] = _extends({}, groupState[groupValue], {
          expanded: !groupState[groupValue].expanded
        });
        _this.setState({ groupState: groupState });
      };
    }, _this.onToggleGroups = function () {
      var expanded = Object.keys(_this.state.groupState).filter(function (k) {
        return !_this.state.groupState[k].expanded;
      }).length === 0;
      var groupState = {};
      Object.keys(_this.state.groupState).forEach(function (k) {
        groupState[k] = _extends({}, _this.state.groupState[k], { expanded: !expanded });
      });
      _this.setState({ groupState: groupState });
    }, _this.onResize = function (property) {
      return function (width) {
        var widths = _extends({}, _this.state.widths || {});
        widths[property] = width;
        _this.setState({ widths: widths });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DataTable.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    return (0, _buildState.buildState)(nextProps, prevState);
  };

  DataTable.prototype.render = function render() {
    var _props = this.props,
        columns = _props.columns,
        groupBy = _props.groupBy,
        onMore = _props.onMore,
        resizeable = _props.resizeable,
        size = _props.size,
        sortable = _props.sortable,
        theme = _props.theme;
    var _state = this.state,
        data = _state.data,
        filtering = _state.filtering,
        filters = _state.filters,
        footerValues = _state.footerValues,
        groups = _state.groups,
        groupState = _state.groupState,
        primaryProperty = _state.primaryProperty,
        showFooter = _state.showFooter,
        sort = _state.sort,
        widths = _state.widths;


    if (size && resizeable) {
      console.warn('DataTable cannot combine "size" and "resizeble".');
    }

    return _react2.default.createElement(
      _StyledDataTable.StyledDataTable,
      null,
      _react2.default.createElement(_Header.Header, {
        columns: columns,
        filtering: filtering,
        filters: filters,
        groups: groups,
        groupState: groupState,
        size: size,
        sort: sort,
        theme: theme,
        widths: widths,
        onFiltering: this.onFiltering,
        onFilter: this.onFilter,
        onResize: resizeable ? this.onResize : undefined,
        onSort: sortable ? this.onSort : undefined,
        onToggle: this.onToggleGroups
      }),
      groups ? _react2.default.createElement(_GroupedBody.GroupedBody, {
        columns: columns,
        groupBy: groupBy,
        groups: groups,
        groupState: groupState,
        primaryProperty: primaryProperty,
        theme: theme,
        onToggle: this.onToggleGroup
      }) : _react2.default.createElement(_Body.Body, {
        columns: columns,
        data: data,
        onMore: onMore,
        primaryProperty: primaryProperty,
        size: size,
        theme: theme
      }),
      showFooter && _react2.default.createElement(_Footer.Footer, {
        columns: columns,
        footerValues: footerValues,
        groups: groups,
        size: size,
        theme: theme
      })
    );
  };

  return DataTable;
}(_react.Component);

DataTable.defaultProps = {
  columns: [],
  data: []
};


var DataTableDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  DataTableDoc = require('./doc').doc(DataTable); // eslint-disable-line global-require
}
var DataTableWrapper = (0, _recompose.compose)(_hocs.withTheme)(DataTableDoc || DataTable);

exports.DataTable = DataTableWrapper;