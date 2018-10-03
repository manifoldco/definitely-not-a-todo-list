'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(WorldMap) {
  var DocumentedWorldMap = (0, _reactDesc.describe)(WorldMap).availableAt((0, _utils.getAvailableAtBadge)('WorldMap')).description('A map of the world, or a continent.').usage("import { WorldMap } from 'grommet';\n<WorldMap />");

  DocumentedWorldMap.propTypes = {
    color: _reactDesc.PropTypes.string.description('Default color'),
    continents: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      name: _reactDesc.PropTypes.oneOf(['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America']).isRequired,
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func
    })).description('Continent details.'),
    onSelectPlace: _reactDesc.PropTypes.func.description('Called when the user clicks on a place.\n        It is passed the location.'),
    places: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      name: _reactDesc.PropTypes.string, // for a11y aria-label
      location: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).isRequired,
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func
    })).description('Place details.'),
    hoverColor: _reactDesc.PropTypes.string.description('Color when hovering over places while selecting.')
  };

  return DocumentedWorldMap;
};