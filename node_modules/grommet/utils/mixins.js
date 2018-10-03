'use strict';

exports.__esModule = true;
exports.getAvailableAtBadge = exports.findAllByType = exports.palm = exports.lapAndUp = exports.fontSize = exports.parseMetricToNum = undefined;

var _styledComponents = require('styled-components');

var parseMetricToNum = exports.parseMetricToNum = function parseMetricToNum(fontAsString) {
  return parseFloat(fontAsString.replace(/[^0-9/.]/g, ''), 10);
};

var fontSize = exports.fontSize = function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToNum(size) / parseMetricToNum(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToNum(size) / parseMetricToNum(props.theme.global.lineHeight)) * (parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(size)) + 'px';
  });
};

var lapAndUp = exports.lapAndUp = function lapAndUp(content) {
  return (0, _styledComponents.css)(['@media only screen and (min-width:', '){', '}'], function (props) {
    return props.theme.global.breakpoints.narrow + 1 + 'px';
  }, content);
};

var palm = exports.palm = function palm(content) {
  return (0, _styledComponents.css)(['@media only screen and (max-width:', '){', '}'], function (props) {
    return props.theme.global.breakpoints.narrow + 'px';
  }, content);
};

var findAllByType = exports.findAllByType = function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
};

var getAvailableAtBadge = exports.getAvailableAtBadge = function getAvailableAtBadge(availableAt) {
  return [{
    url: 'https://storybook.grommet.io/?selectedKind=' + availableAt + '&full=0&addons=0&stories=1&panelRight=0',
    badge: 'https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png',
    label: 'Storybook'
  }, {
    url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=' + availableAt.toLowerCase() + '&module=%2Fsrc%2F' + availableAt + '.js',
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
    label: 'CodeSandbox'
  }];
};