'use strict';

exports.__esModule = true;
exports.StyledGrid = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillStyle = function fillStyle(fill) {
  if (fill === 'horizontal') {
    return 'width: 100%;';
  }
  if (fill === 'vertical') {
    return 'height: 100%;';
  }
  if (fill) {
    return '\n      width: 100%;\n      height: 100%;\n    ';
  }
  return undefined;
};

var ALIGN_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = (0, _styledComponents.css)(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var ALIGN_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignContentStyle = (0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var JUSTIFY_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var justifyStyle = (0, _styledComponents.css)(['justify-items:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var JUSTIFY_CONTENT_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var justifyContentStyle = (0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_CONTENT_MAP[props.justifyContent];
});

var gapStyle = function gapStyle(props) {
  if (typeof props.gap === 'string') {
    var gapSize = props.theme.global.edgeSize[props.gap];
    return 'grid-gap: ' + gapSize + ' ' + gapSize + ';';
  }
  if (props.gap.row && props.gap.column) {
    return '\n      grid-row-gap: ' + props.theme.global.edgeSize[props.gap.row] + ';\n      grid-column-gap: ' + props.theme.global.edgeSize[props.gap.column] + ';\n    ';
  }
  if (props.gap.row) {
    return '\n      grid-row-gap: ' + props.theme.global.edgeSize[props.gap.row] + ';\n    ';
  }
  if (props.gap.column) {
    return '\n      grid-column-gap: ' + props.theme.global.edgeSize[props.gap.column] + ';\n    ';
  }
  return '';
};

var SIZE_MAP = {
  'flex': '1fr',
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var sizeFor = function sizeFor(size, props) {
  return SIZE_MAP[size] || props.theme.global.size[size] || size;
};

var columnsStyle = function columnsStyle(props) {
  if (Array.isArray(props.columns)) {
    return (0, _styledComponents.css)(['grid-template-columns:', ';'], props.columns.map(function (s) {
      if (Array.isArray(s)) {
        return 'minmax(' + sizeFor(s[0], props) + ', ' + sizeFor(s[1], props) + ')';
      }
      return sizeFor(s, props);
    }).join(' '));
  }
  if (_typeof(props.columns) === 'object') {
    return (0, _styledComponents.css)(['grid-template-columns:repeat(auto-', ',minmax(', ',1fr));'], props.columns.count, props.theme.global.size[props.columns.size]);
  }
  return (0, _styledComponents.css)(['grid-template-columns:repeat(auto-fill,minmax(', ',1fr));'], props.theme.global.size[props.columns]);
};

var rowsStyle = function rowsStyle(props) {
  if (Array.isArray(props.rowsProp)) {
    return (0, _styledComponents.css)(['grid-template-rows:', ';'], props.rowsProp.map(function (s) {
      if (Array.isArray(s)) {
        return 'minmax(' + sizeFor(s[0], props) + ', ' + sizeFor(s[1], props) + ')';
      }
      return sizeFor(s, props);
    }).join(' '));
  }
  return (0, _styledComponents.css)(['grid-auto-rows:', ';'], props.theme.global.size[props.rowsProp]);
};

var areasStyle = function areasStyle(props) {
  // translate areas objects into grid-template-areas syntax
  var cells = props.rowsProp.map(function () {
    return props.columns.map(function () {
      return '.';
    });
  });
  props.areas.forEach(function (area) {
    for (var row = area.start[1]; row <= area.end[1]; row += 1) {
      for (var column = area.start[0]; column <= area.end[0]; column += 1) {
        cells[row][column] = area.name;
      }
    }
  });
  return 'grid-template-areas: ' + cells.map(function (r) {
    return '"' + r.join(' ') + '"';
  }).join(' ') + ';';
};

var StyledGrid = exports.StyledGrid = _styledComponents2.default.div.withConfig({
  displayName: 'StyledGrid',
  componentId: 'sc-1wofa1l-0'
})(['display:grid;box-sizing:border-box;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.fillContainer && fillStyle(props.fillContainer);
}, function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.areas && areasStyle(props);
}, function (props) {
  return props.columns && columnsStyle(props);
}, function (props) {
  return props.gap && gapStyle(props);
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.justifyContent && justifyContentStyle;
}, function (props) {
  return props.rowsProp && rowsStyle(props);
}, function (props) {
  return props.theme.grid && props.theme.grid.extend;
});