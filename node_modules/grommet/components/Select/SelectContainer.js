'use strict';

exports.__esModule = true;
exports.SelectContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _Box = require('../Box');

var _Button = require('../Button');

var _InfiniteScroll = require('../InfiniteScroll');

var _Keyboard = require('../Keyboard');

var _Text = require('../Text');

var _TextInput = require('../TextInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerBox = (0, _styledComponents2.default)(_Box.Box).withConfig({
  displayName: 'SelectContainer__ContainerBox',
  componentId: 'sc-1wi0ul8-0'
})(['max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}']);

var OptionsBox = (0, _styledComponents2.default)(_Box.Box).withConfig({
  displayName: 'SelectContainer__OptionsBox',
  componentId: 'sc-1wi0ul8-1'
})(['scroll-behavior:smooth;']);

var SelectContainer = function (_Component) {
  _inherits(SelectContainer, _Component);

  function SelectContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.optionsRef = {}, _this.searchRef = (0, _react.createRef)(), _this.selectRef = (0, _react.createRef)(), _this.state = {
      search: '',
      activeIndex: -1
    }, _this.onInput = function (event) {
      _this.setState({
        search: event.target.value,
        activeIndex: -1
      }, function () {
        return _this.onSearch(_this.state.search);
      });
    }, _this.onSearch = (0, _utils.debounce)(function (search) {
      return _this.props.onSearch(search);
    }, 300), _this.selectOption = function (option, index) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange,
          options = _this$props.options,
          selected = _this$props.selected,
          value = _this$props.value;


      if (onChange) {
        var nextValue = option;
        var nextSelected = index;
        if (multiple) {
          nextValue = [];
          nextSelected = [];
          var removed = false;
          var selectedIndexes = [];

          if (Array.isArray(selected)) {
            selectedIndexes = selected;
          } else if (Array.isArray(value)) {
            selectedIndexes = value.map(function (v) {
              return options.indexOf(v);
            });
          }

          selectedIndexes.forEach(function (selectedIndex) {
            if (selectedIndex === index) {
              removed = true;
            } else {
              nextValue.push(options[selectedIndex]);
              nextSelected.push(selectedIndex);
            }
          });
          if (!removed) {
            nextValue.push(option);
            nextSelected.push(index);
          }
        }

        onChange({
          target: (0, _reactDom.findDOMNode)(_this.searchRef.current),
          option: option,
          value: nextValue,
          selected: nextSelected
        });
      }
    }, _this.onNextOption = function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      event.preventDefault();
      var index = Math.min(activeIndex + 1, options.length - 1);
      _this.setState({ activeIndex: index }, function () {
        var buttonNode = (0, _reactDom.findDOMNode)(_this.optionsRef[index]);
        var selectNode = (0, _reactDom.findDOMNode)(_this.selectRef.current);

        if ((0, _utils.isNodeAfterScroll)(buttonNode, selectNode) && selectNode.scrollBy) {
          selectNode.scrollBy(0, buttonNode.getBoundingClientRect().height);
        }
      });
    }, _this.onPreviousOption = function (event) {
      var activeIndex = _this.state.activeIndex;

      event.preventDefault();
      var index = Math.max(activeIndex - 1, 0);
      _this.setState({ activeIndex: index }, function () {
        var buttonNode = (0, _reactDom.findDOMNode)(_this.optionsRef[index]);
        var selectNode = (0, _reactDom.findDOMNode)(_this.selectRef.current);

        if ((0, _utils.isNodeBeforeScroll)(buttonNode, selectNode) && selectNode.scrollBy) {
          selectNode.scrollBy(0, -buttonNode.getBoundingClientRect().height);
        }
      });
    }, _this.onSelectOption = function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      if (activeIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        _this.selectOption(options[activeIndex], activeIndex);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var options = nextProps.options,
        value = nextProps.value;


    if (prevState.activeIndex === -1 && prevState.search === '' && options && value) {
      var optionValue = Array.isArray(value) && value.length ? value[0] : value;
      var activeIndex = options.indexOf(optionValue);
      return {
        activeIndex: activeIndex
      };
    } else if (prevState.activeIndex === -1 && prevState.search !== '') {
      return {
        activeIndex: 0
      };
    }

    return null;
  };

  SelectContainer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var onSearch = this.props.onSearch;
    var activeIndex = this.state.activeIndex;
    // timeout need to send the operation through event loop and allow time to the portal
    // to be available

    setTimeout(function () {
      var selectNode = (0, _reactDom.findDOMNode)(_this2.selectRef.current);
      if (onSearch) {
        var input = (0, _reactDom.findDOMNode)(_this2.searchRef.current);
        if (input && input.focus) {
          (0, _utils.setFocusWithoutScroll)(input);
        }
      } else if (_this2.selectRef) {
        (0, _utils.setFocusWithoutScroll)((0, _reactDom.findDOMNode)(_this2.selectRef.current));
      }

      // scroll to active option if it is below the fold
      if (activeIndex >= 0) {
        var optionNode = (0, _reactDom.findDOMNode)(_this2.optionsRef[activeIndex]);

        var _selectNode$getBoundi = selectNode.getBoundingClientRect(),
            containerBottom = _selectNode$getBoundi.bottom;

        var _optionNode$getBoundi = optionNode.getBoundingClientRect(),
            optionTop = _optionNode$getBoundi.bottom;

        if (containerBottom < optionTop) {
          optionNode.scrollIntoView();
        }
      }
    }, 0);
  };

  // wait 300ms of idle time before notifying that the search changed
  // 300ms seems like the right amount to wait for after the used stopped typing


  SelectContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        id = _props.id,
        name = _props.name,
        onKeyDown = _props.onKeyDown,
        onSearch = _props.onSearch,
        options = _props.options,
        searchPlaceholder = _props.searchPlaceholder,
        selected = _props.selected,
        theme = _props.theme,
        value = _props.value;
    var _state = this.state,
        activeIndex = _state.activeIndex,
        search = _state.search;


    var customSearchInput = theme.select.searchInput;
    var SelectTextInput = customSearchInput || _TextInput.TextInput;

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      {
        onEnter: this.onSelectOption,
        onUp: this.onPreviousOption,
        onDown: this.onNextOption,
        onKeyDown: onKeyDown
      },
      _react2.default.createElement(
        ContainerBox,
        {
          id: id ? id + '__select-drop' : undefined,
          theme: theme
        },
        onSearch && _react2.default.createElement(
          _Box.Box,
          { pad: !customSearchInput ? 'xsmall' : undefined, flex: false },
          _react2.default.createElement(SelectTextInput, {
            focusIndicator: !customSearchInput,
            size: 'small',
            ref: this.searchRef,
            type: 'search',
            value: search,
            placeholder: searchPlaceholder,
            onInput: this.onInput
          })
        ),
        _react2.default.createElement(
          OptionsBox,
          {
            flex: 'shrink',
            role: 'menubar',
            tabIndex: '-1',
            ref: this.selectRef,
            overflow: 'auto',
            theme: theme
          },
          _react2.default.createElement(
            _InfiniteScroll.InfiniteScroll,
            { items: options, step: theme.select.step },
            function (option, index) {
              return _react2.default.createElement(
                _Box.Box,
                { key: 'option_' + (name || '') + '_' + index, flex: false },
                _react2.default.createElement(
                  _Button.Button,
                  {
                    role: 'menuitem',
                    ref: function ref(_ref) {
                      _this3.optionsRef[index] = _ref;
                    },
                    active: selected === index || Array.isArray(selected) && selected.indexOf(index) !== -1 || activeIndex === index || option && option === value || option && Array.isArray(value) && value.indexOf(option) !== -1,
                    onClick: function onClick() {
                      return _this3.selectOption(option, index);
                    },
                    hoverIndicator: 'background'
                  },
                  children ? children(option, index, options) : _react2.default.createElement(
                    _Box.Box,
                    { align: 'start', pad: 'small' },
                    _react2.default.createElement(
                      _Text.Text,
                      { margin: 'none' },
                      option !== null && option !== undefined ? option.toString() : undefined
                    )
                  )
                )
              );
            }
          )
        )
      )
    );
  };

  return SelectContainer;
}(_react.Component);

SelectContainer.defaultProps = {
  value: ''
};


var SelectContainerWrapper = (0, _hocs.withTheme)(SelectContainer);

exports.SelectContainer = SelectContainerWrapper;