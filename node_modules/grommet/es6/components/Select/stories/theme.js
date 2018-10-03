import { css } from 'styled-components';

import { FormCheckmark } from 'grommet-icons/es6/icons/FormCheckmark';


import { colorForName } from '../../../utils';

import { ArrowDown } from './components/icons/ArrowDown';
import { SearchInput } from './components/SearchInput';

export var theme = {
  global: {
    colors: {
      border: '#e0e0e0',
      focus: '#2196F3',
      gray: 'rgba(0, 0, 0, 0.54)'
    },
    drop: {
      background: '#ffffff'
    },
    elevation: {
      light: {
        small: '0 2px 2px 0 rgba(0,0,0,0.19)',
        medium: '0 3px 3px 0 rgba(0,0,0,0.18)',
        large: '0 4px 4px 0 rgba(0,0,0,0.17)',
        xlarge: '0 24px 24px 0 rgba(0, 0, 0, 0.12)'
      }
    },
    font: {
      family: 'Arial'
    },
    size: {
      xxsmall: '24px'
    }
  },
  checkBox: {
    border: {
      color: {
        light: css(['', ''], function (props) {
          return colorForName('gray', props.theme);
        })
      },
      radius: '2px'
    },
    hover: {
      border: {
        color: undefined
      }
    },
    icons: {
      checked: FormCheckmark
    },
    size: '18px',
    extend: function extend(props) {
      return '\n      input:checked + div {\n        border-color: ' + colorForName('brand', props.theme) + ';\n        background: ' + colorForName('brand', props.theme) + ';\n\n        > svg {\n          stroke: ' + colorForName('white', props.theme) + ';\n        }\n      }\n    ';
    }
  },
  drop: {
    maxHeight: '384px'
  },
  select: {
    icons: {
      down: ArrowDown
    },
    searchInput: SearchInput
  },
  textInput: {
    extend: function extend(props) {
      return '\n      color: ' + colorForName('gray', props.theme) + ';\n      font-weight: 400;\n      font-size: 13px;\n      padding: 14px;\n    ';
    }
  }
};