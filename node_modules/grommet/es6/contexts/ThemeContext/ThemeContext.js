import React from 'react';
import { base as baseTheme } from '../../themes';
import { deepMerge } from '../../utils';

var ThemeContext = React.createContext(baseTheme);

ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return React.createElement(
    ThemeContext.Consumer,
    null,
    function (theme) {
      return React.createElement(
        ThemeContext.Provider,
        {
          value: deepMerge(theme, value)
        },
        children
      );
    }
  );
};

export { ThemeContext };